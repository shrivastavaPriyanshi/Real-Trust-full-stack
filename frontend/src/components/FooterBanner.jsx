const Footer = () => {
  return (
    <footer
      
      className="bg-blue-900 text-white px-10 py-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* NAV LINKS */}
        <ul className="flex flex-wrap gap-8 text-lg font-semibold">
          <li>
            <a href="#home" className="hover:text-orange-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-orange-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-orange-400 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-orange-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-orange-400 transition">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* SUBSCRIBE */}
        <div className="flex">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="px-4 py-3 text-black outline-none rounded-l-md w-64"
          />
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 font-semibold rounded-r-md transition">
            Subscribe
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
