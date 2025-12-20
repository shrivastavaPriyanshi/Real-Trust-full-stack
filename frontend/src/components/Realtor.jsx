const Realtor = () => {
  return (
    <section className="w-full min-h-screen bg-white flex items-center overflow-hidden">
      <div className="w-full px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* LEFT TEXT */}
        <div className="max-w-2xl">
          <h2 className="text-6xl md:text-7xl font-extrabold text-blue-600 leading-tight mb-10">
            Not Your Average Realtor
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We go beyond buying and selling properties. Our approach is built on trust, transparency, and a deep understanding of what truly matters to our clients. We take the time to listen, assess your needs, and provide clear, honest insights so you always feel informed and confident. Every decision we make is guided by open communication, ethical practices, and a genuine commitment to putting your interests first—without hidden agendas or unnecessary pressure.
            
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            With strong market expertise, personalized guidance, and a focus on long-term relationships, we support you through every stage of the real estate journey. From understanding market trends and identifying the right opportunities to evaluating options, negotiating the best value, and closing with confidence, we handle each step with precision and care. Our goal is not just to complete transactions, but to help you make strategic, well-informed decisions that align with your goals—today, tomorrow, and well into the future
            
          </p>
        </div>

        {/* RIGHT BUBBLES */}
        <div className="grid grid-cols-3 grid-rows-3 gap-20 place-items-center h-[650px]">

          {/* Bubble 1 — spaced like bubble 3 */}
          <div className="col-start-3 row-start-1 w-80 h-80 rounded-full overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Consultation"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bubble 2 — center dominant */}
          <div className="col-start-2 row-start-2 w-[440px] h-[440px] rounded-full overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              alt="Team Meeting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bubble 3 */}
          <div className="col-start-1 row-start-3 w-72 h-72 rounded-full overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Strategy"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Realtor;
