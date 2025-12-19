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
      await axios.post("https://real-trust-full-stack.onrender.com/api/contact", formData);
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
      className="w-full min-h-[85vh] flex items-center pt-24"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/business-people-meeting_53876-25158.jpg?semt=ais_hybrid&w=740&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-10 items-center">

        {/* LEFT TEXT */}
        <div className="text-white">
          <h1 className="text-4xl font-bold leading-snug mb-6 drop-shadow-lg">
            Consultation, <br />
            Design, <br />
            & Marketing
          </h1>

          <p className="text-lg max-w-md drop-shadow-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* FORM FLOATING ON IMAGE */}
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
              {/* Full Name */}
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="
                  w-full
                  px-4
                  py-3
                  rounded
                  bg-transparent
                  text-white
                  placeholder-gray-200
                  border
                  border-white/40
                  shadow-[0_0_8px_rgba(255,255,255,0.4)]
                  outline-none
                  focus:shadow-[0_0_12px_rgba(255,255,255,0.7)]
                  transition
                "
                required
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="
                  w-full
                  px-4
                  py-3
                  rounded
                  bg-transparent
                  text-white
                  placeholder-gray-200
                  border
                  border-white/40
                  shadow-[0_0_8px_rgba(255,255,255,0.4)]
                  outline-none
                  focus:shadow-[0_0_12px_rgba(255,255,255,0.7)]
                  transition
                "
                required
              />

              {/* Mobile */}
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="
                  w-full
                  px-4
                  py-3
                  rounded
                  bg-transparent
                  text-white
                  placeholder-gray-200
                  border
                  border-white/40
                  shadow-[0_0_8px_rgba(255,255,255,0.4)]
                  outline-none
                  focus:shadow-[0_0_12px_rgba(255,255,255,0.7)]
                  transition
                "
                required
              />

              {/* City */}
              <input
                type="text"
                name="city"
                placeholder="Area, City"
                value={formData.city}
                onChange={handleChange}
                className="
                  w-full
                  px-4
                  py-3
                  rounded
                  bg-transparent
                  text-white
                  placeholder-gray-200
                  border
                  border-white/40
                  shadow-[0_0_8px_rgba(255,255,255,0.4)]
                  outline-none
                  focus:shadow-[0_0_12px_rgba(255,255,255,0.7)]
                  transition
                "
                required
              />

              {/* Button */}
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
