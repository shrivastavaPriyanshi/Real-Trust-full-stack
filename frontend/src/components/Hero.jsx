import { useState } from "react";
import axios from "axios";

const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://real-trust-full-stack-1.onrender.com/api/contact",
        formData
      );
      alert("Form submitted successfully ✅");
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        city: "",
      });
    } catch (error) {
      alert("Something went wrong ❌");
    }
  };

  return (
    <section
     id="home"
      className="relative w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/business-people-meeting_53876-25158.jpg?semt=ais_hybrid&w=740&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-10 items-center">
        
        {/* LEFT TEXT */}
        <div className="text-white">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-8 drop-shadow-lg">
            Consultation, <br />
            Design, <br />
            & Marketing
          </h1>

          <p className="text-xl max-w-lg leading-relaxed drop-shadow-md">
            We provide end-to-end real estate solutions tailored to your needs.
            From expert consultation and property planning to strategic marketing,
            we help you make informed decisions and achieve lasting value with confidence.
          </p>
        </div>

        {/* FORM */}
        <div className="flex justify-center md:justify-end">
          <div
            className="
              bg-blue-900/70
              backdrop-blur-sm
              text-white
              p-10
              min-h-[520px]
              rounded-xl
              shadow-xl
              w-full
              max-w-md
              transition-all
              duration-300
              hover:bg-blue-900/80
              hover:shadow-2xl
              hover:-translate-y-1
            "
          >
            <h2 className="text-xl font-semibold mb-8 text-center">
              Get a Free Consultation
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-transparent text-white placeholder-gray-200 border border-white/40 shadow-[0_0_8px_rgba(255,255,255,0.4)] outline-none focus:shadow-[0_0_12px_rgba(255,255,255,0.7)] transition"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-transparent text-white placeholder-gray-200 border border-white/40 shadow-[0_0_8px_rgba(255,255,255,0.4)] outline-none focus:shadow-[0_0_12px_rgba(255,255,255,0.7)] transition"
                required
              />

              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-transparent text-white placeholder-gray-200 border border-white/40 shadow-[0_0_8px_rgba(255,255,255,0.4)] outline-none focus:shadow-[0_0_12px_rgba(255,255,255,0.7)] transition"
                required
              />

              <input
                type="text"
                name="city"
                placeholder="Area, City"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-transparent text-white placeholder-gray-200 border border-white/40 shadow-[0_0_8px_rgba(255,255,255,0.4)] outline-none focus:shadow-[0_0_12px_rgba(255,255,255,0.7)] transition"
                required
              />

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 font-semibold rounded hover:bg-orange-600 transition"
              >
                Get Quick Quote
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
