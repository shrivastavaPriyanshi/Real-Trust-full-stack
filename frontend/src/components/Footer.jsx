const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white px-10 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        

        <ul className="flex gap-6">
          <li>Home</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>

        <div className="flex">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="px-3 py-2 text-black outline-none"
          />
          <button className="bg-orange-500 px-4 py-2">
            Subscribe
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
