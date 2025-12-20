const WhyChooseUs = () => {
  return (
    <section id="services" className="relative w-full min-h-screen bg-white py-24 px-10 flex items-center overflow-hidden">
      
      {/* DECORATIVE BACKGROUND SHAPES */}
      {/* Bubble Top Left */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/40 rounded-full blur-1xl"></div>

      {/* Bubble Bottom Right */}
      <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-orange-200/40 rounded-full blur-1xl"></div>

      {/* Square Mid Left */}
      <div className="absolute top-1/2 left-20 w-40 h-40 bg-blue-100/50 rounded-3xl rotate-12 blur-1xl"></div>

      {/* Square Top Right */}
      <div className="absolute top-24 right-24 w-32 h-32 bg-orange-100/60 rounded-2xl -rotate-12 blur-1xl"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* SECTION HEADING */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-blue-600 mb-20">
          Why Choose Us?
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 text-center">

          {/* CARD 1 */}
          <div className="bg-white p-12 rounded-xl shadow-lg hover:shadow-2xl transition">
            <div className="text-6xl mb-8">🏠</div>
            <h3 className="text-3xl font-bold text-blue-600 mb-4">
              Strong ROI Potential
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              We help you identify properties with high growth potential by
              analyzing market trends, location advantages, and long-term
              value—ensuring smarter investments and stronger returns.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-12 rounded-xl shadow-lg hover:shadow-2xl transition">
            <div className="text-6xl mb-8">🔑</div>
            <h3 className="text-3xl font-bold text-blue-600 mb-4">
              Thoughtful Design
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              From space planning to aesthetics, we focus on designs that
              enhance comfort, functionality, and visual appeal—creating
              spaces that truly feel like home.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-12 rounded-xl shadow-lg hover:shadow-2xl transition">
            <div className="text-6xl mb-8">📍</div>
            <h3 className="text-3xl font-bold text-blue-600 mb-4">
              Strategic Marketing
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our marketing strategies combine digital reach, local insights,
              and targeted campaigns to position your property effectively
              and attract the right buyers faster.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
