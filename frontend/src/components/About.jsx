const About = () => {
  return (
    <section id="about" className="relative w-full py-8 px-10 bg-white overflow-hidden">

      {/* BACKGROUND DECOR – MOVED UP & CLOSER */}
      <div className="absolute top-0 -left-32 w-[420px] h-[420px] bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
      <div className="absolute top-6 right-[-180px] w-[520px] h-[520px] bg-blue-50 rounded-full opacity-60 blur-2xl"></div>
      <div className="absolute top-24 right-1/4 w-[200px] h-[200px] bg-blue-200 rounded-full opacity-40 blur-xl"></div>

      {/* CONTENT */}
      <div className="relative max-w-5xl mx-auto text-center mt-24">

        {/* HEADING – MOVED UP */}
        <h2 className="inline-block text-4xl md:text-5xl font-extrabold text-blue-600 border-b-4 border-blue-600 pb-2 mb-3">
          About Us
        </h2>

        {/* TEXT */}
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          We are committed to delivering trusted real estate solutions built on
          transparency, expertise, and long-term value. Our focus goes beyond
          transactions—we strive to understand your goals, guide you with clear
          insights, and support you at every stage of the real estate journey.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          With a deep understanding of market dynamics, thoughtful planning,
          and personalized strategies, we help individuals and businesses make
          confident property decisions that stand the test of time.
        </p>

        <button className="bg-white text-blue-600 px-8 py-3 font-semibold shadow-md hover:shadow-lg transition rounded-md">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default About;
