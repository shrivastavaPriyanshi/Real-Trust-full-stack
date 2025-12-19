const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white-100 py-20 px-10">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADING */}
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-14">
          Why Choose Us?
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          {/* CARD 1 */}
          <div className="bg-white p-8 ">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold text-center text-blue-600 mb-2">
              Potential ROI
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 ">
            <div className="text-4xl mb-4">🔑</div>
            <h3 className="text-2xl font-bold text-center text-blue-600 mb-2">
              Design
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 ">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-2xl font-bold text-center text-blue-600 mb-2">
              Marketing
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
