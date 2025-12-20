import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// PAGES (ONLY real pages go here)
import Landing from "./pages/Landing";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import AddProject from "./pages/AddProject";

function App() {
  return (
    <Router>
      <Routes>
        {/* MAIN LANDING PAGE */}
        <Route path="/" element={<Landing />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/add-project" element={<AddProject />} />

        {/* 🔥 CATCH ALL INVALID ROUTES */}
        {/* This fixes /about, /services, /projects, etc. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
