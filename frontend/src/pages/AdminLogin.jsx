import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const ADMIN_EMAIL = "admin@realtrust.com";
  const ADMIN_PASSWORD = "admin123";

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdminLoggedIn", "true");
      navigate("/admin");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleLogin}
        autoComplete="off"
        className="bg-white w-full max-w-lg min-h-[520px] p-12 shadow-2xl rounded-xl flex flex-col justify-center"
      >
        <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-600">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-500 mb-6 text-base text-center">
            {error}
          </p>
        )}

        <input
          type="email"
          name="admin-email"
          autoComplete="off"
          placeholder="Admin Email"
          className="w-full border p-4 mb-6 text-lg rounded-md outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          name="admin-password"
          autoComplete="new-password"
          placeholder="Password"
          className="w-full border p-4 mb-8 text-lg rounded-md outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-md transition"
        >
          Login
        </button>

        {/* DEMO CREDENTIALS */}
        <div className="mt-10 text-base text-gray-500 opacity-80 text-center">
          <p className="font-semibold mb-1">Demo Admin Credentials</p>
          <p>Email: admin@realtrust.com</p>
          <p>Password: admin123</p>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
