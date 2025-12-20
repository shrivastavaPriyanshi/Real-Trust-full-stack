import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AddProject from "./AddProject";

const BACKEND_URL = "https://real-trust-full-stack-1.onrender.com";

/* 🔹 Compress image to avoid backend failure */
const compressImage = (base64, maxWidth = 400) =>
  new Promise((resolve) => {
    const img = new Image();
    img.src = base64;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const scale = maxWidth / img.width;
      canvas.width = maxWidth;
      canvas.height = img.height * scale;
      canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.7));
    };
  });

const Admin = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);

  const [editingClientId, setEditingClientId] = useState(null);

  const [clientData, setClientData] = useState({
    name: "",
    designation: "",
    description: "",
    image: "",
  });

  /* ================= AUTH ================= */
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (!isLoggedIn) {
      navigate("/admin-login");
      return;
    }
    loadAllData();
  }, [navigate]);

  /* ================= LOAD DATA ================= */
  const loadAllData = async () => {
    try {
      const [contactRes, subscriberRes, clientRes, projectRes] =
        await Promise.all([
          axios.get(`${BACKEND_URL}/api/contact`),
          axios.get(`${BACKEND_URL}/api/subscribe`),
          axios.get(`${BACKEND_URL}/api/clients`),
          axios.get(`${BACKEND_URL}/api/projects`),
        ]);

      setContacts(contactRes.data || []);
      setSubscribers(subscriberRes.data || []);
      setClients(clientRes.data || []);
      setProjects(projectRes.data || []);
    } catch (err) {
      console.error(err);
      alert("Failed to load admin data");
    } finally {
      setLoading(false);
    }
  };

  /* ================= CLIENT HANDLERS ================= */
  const handleClientChange = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  const handleClientImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const compressed = await compressImage(reader.result);
      setClientData((prev) => ({ ...prev, image: compressed }));
    };
    reader.readAsDataURL(file);
  };

  const handleAddOrUpdateClient = async (e) => {
    e.preventDefault();

    if (
      !clientData.name ||
      !clientData.designation ||
      !clientData.description ||
      !clientData.image
    ) {
      alert("Fill all client fields");
      return;
    }

    try {
      if (editingClientId) {
        await axios.put(
          `${BACKEND_URL}/api/clients/${editingClientId}`,
          clientData
        );
        alert("Client updated ✅");
      } else {
        await axios.post(`${BACKEND_URL}/api/clients`, clientData);
        alert("Client added ✅");
      }

      setClientData({
        name: "",
        designation: "",
        description: "",
        image: "",
      });
      setEditingClientId(null);
      loadAllData();
    } catch (err) {
      console.error(err.response?.data || err);
      alert("Client operation failed ❌");
    }
  };

  const handleEditClient = (client) => {
    setClientData({
      name: client.name,
      designation: client.designation,
      description: client.description,
      image: client.image,
    });
    setEditingClientId(client._id);
  };

  const handleDeleteClient = async (id) => {
    if (!window.confirm("Delete client?")) return;
    await axios.delete(`${BACKEND_URL}/api/clients/${id}`);
    loadAllData();
  };

  /* ================= LOGOUT ================= */
  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading Admin Dashboard...
      </div>
    );
  }

  return (
    <div className="p-10 space-y-20">
      <div className="flex justify-end">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2"
        >
          Logout
        </button>
      </div>

      {/* PROJECT MANAGEMENT */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Project Management</h2>
        <AddProject onProjectAdded={loadAllData} />
      </section>

      {/* CLIENT MANAGEMENT */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Client Management</h2>

        <form
          onSubmit={handleAddOrUpdateClient}
          className="grid grid-cols-2 gap-4 mb-10"
        >
          <input
            name="name"
            placeholder="Client Name"
            value={clientData.name}
            onChange={handleClientChange}
            className="border p-2"
          />
          <input
            name="designation"
            placeholder="Designation"
            value={clientData.designation}
            onChange={handleClientChange}
            className="border p-2"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleClientImageUpload}
            className="col-span-2 border p-2"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={clientData.description}
            onChange={handleClientChange}
            className="col-span-2 border p-2"
          />
          <button className="col-span-2 bg-blue-600 text-white py-2">
            {editingClientId ? "Update Client" : "Add Client"}
          </button>
        </form>

        {/* CLIENT LIST */}
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Designation</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((c) => (
              <tr key={c._id}>
                <td className="border p-2">{c.name}</td>
                <td className="border p-2">{c.designation}</td>
                <td className="border p-2">{c.description}</td>
                <td className="border p-2 text-center space-x-4">
                  <button onClick={() => handleEditClient(c)}>✏️</button>
                  <button onClick={() => handleDeleteClient(c._id)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Contact Form Submissions</h2>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Full Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Mobile</th>
              <th className="border p-2">City</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c._id}>
                <td className="border p-2">{c.fullName}</td>
                <td className="border p-2">{c.email}</td>
                <td className="border p-2">{c.mobile}</td>
                <td className="border p-2">{c.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ================= SUBSCRIBERS ================= */}
      <section>
        <h2 className="text-3xl font-bold mb-6">
          Newsletter Subscribers
        </h2>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Email</th>
              <th className="border p-2">Subscribed At</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((s) => (
              <tr key={s._id}>
                <td className="border p-2">{s.email}</td>
                <td className="border p-2">
                  {new Date(s.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

    </div>
  );
};

export default Admin;
