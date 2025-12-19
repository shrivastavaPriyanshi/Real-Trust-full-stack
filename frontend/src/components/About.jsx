const About = () => {
  return (
    <section className="relative w-full py-24 px-10 bg-white overflow-hidden">

      {/* Bubble Backgrounds */}
      <div className="absolute top-16 left-10 w-40 h-40 bg-blue-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-16 right-16 w-64 h-64 bg-blue-50 rounded-full opacity-60"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-blue-200 rounded-full opacity-40"></div>

      <div className="relative max-w-4xl mx-auto text-center">

        {/* Heading with full-width underline */}
        <h2 className="inline-block text-3xl font-bold text-blue-600 border-b-4 border-blue-600 pb-2 mb-6">
          About Us
        </h2>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vitae consequat viverra adipiscing at. 
          Aenean in nisl sed libero varius consectetur.
        </p>

        <button className="bg-white text-blue-600 px-8 py-3 font-semibold shadow-md hover:shadow-lg transition">
          Learn More
        </button>

      </div>
    </section>
  );
};

export default About;
