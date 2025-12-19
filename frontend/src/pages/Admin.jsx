import { useEffect, useState } from "react";
import axios from "axios";
import AddProject from "./AddProject";   // ✅ new
// import AddClient from "./AddClient";  // optional later

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    axios
      .get("https://real-trust-full-stack-1.onrender.com/api/contact")
      .then((res) => setContacts(res.data));

    axios
      .get("https://real-trust-full-stack-1.onrender.com/api/subscribe")
      .then((res) => setSubscribers(res.data));
  }, []);

  return (
    <div className="p-10 space-y-16">

      {/* ================= ADD PROJECT SECTION ================= */}
      <section>
        <h2 className="text-3xl font-bold mb-6">
          Add Project (Image Cropping Enabled)
        </h2>
        <AddProject />
      </section>

      {/* ================= CONTACT FORM TABLE ================= */}
      <section>
        <h2 className="text-3xl font-bold mb-6">
          Contact Form Submissions
        </h2>

        <table className="w-full border mb-10">
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

      {/* ================= SUBSCRIBERS TABLE ================= */}
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
