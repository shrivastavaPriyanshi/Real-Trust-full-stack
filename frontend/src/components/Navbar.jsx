import { useState } from "react";
import axios from "axios";
import logo from "../assets/realtrust-logo.png";

const Navbar = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email) return alert("Enter email");

    try {
      await axios.post("http://localhost:5000/api/subscribe", { email });
      alert("Subscribed ✅");
      setEmail("");
    } catch (err) {
      alert("Already subscribed ❌");
    }
  };

  return (
    <nav
      className="
        w-full
        fixed
        top-0
        left-0
        z-50
        bg-blue-100/70
        backdrop-blur-md
        shadow-md
        px-10
        py-4
        flex
        items-center
        justify-between
      "
    >
      {/* LOGO + NAME */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img
          src={logo}
          alt="Real Trust Logo"
          className="w-8 h-8 object-contain"
        />
        <h1 className="text-2xl font-bold text-blue-900">
          Real Trust
        </h1>
      </div>

      {/* MENU */}
      <ul className="flex gap-10 text-lg font-semibold text-blue-900">
        {["Home", "Services", "Projects", "Testimonials", "Contact"].map(
          (item) => (
            <li
              key={item}
              className="
                relative
                cursor-pointer
                transition-all
                duration-300
                hover:text-blue-950
                after:content-['']
                after:absolute
                after:left-0
                after:-bottom-1
                after:w-0
                after:h-[2px]
                after:bg-blue-900
                after:transition-all
                after:duration-300
                hover:after:w-full
                px-2
                py-1
                rounded
              "
            >
              {item}
            </li>
          )
        )}

        {/* ADMIN LINK */}
        <li
          onClick={() => window.location.href = "/admin"}
          className="
            relative
            cursor-pointer
            transition-all
            duration-300
            hover:text-red-600
            px-2
            py-1
            rounded
          "
        >
          Admin
        </li>
      </ul>

      {/* NEWSLETTER */}
      <div className="flex items-center">
        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
            border
            border-blue-300
            px-3
            py-2
            outline-none
            rounded-l
          "
        />
        <button
          onClick={handleSubscribe}
          className="
            bg-orange-500
            text-white
            px-4
            py-2
            rounded-r
            hover:bg-orange-600
            transition
          "
        >
          Subscribe
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
