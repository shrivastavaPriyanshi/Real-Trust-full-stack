const Realtor = () => {
  return (
    <section className="w-full px-10 py-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-14">
            Not Your Average Realtor
          </h2>

          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Consequat viverra adipiscing at et.
          </p>

          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vitae consequat viverra adipiscing at.
          </p>
        </div>

        {/* RIGHT IMAGES / BUBBLES */}
        <div className="relative flex justify-center items-center h-[420px]">

          {/* Left bubble */}
          <div className="w-64 h-64 rounded-full absolute -left-24
                          overflow-hidden bg-gray-300
                          hover:scale-105 hover:shadow-lg
                          transition duration-300 ease-in-out">
            <img
              src="https://thumbs.dreamstime.com/b/business-people-sitting-desk-workplace-meeting-discussing-finance-growth-company-employees-analyzing-data-stat-financial-400934188.jpg"
              alt="Realtor 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center bubble (main) */}
          <div className="w-80 h-80 rounded-full z-10
                          overflow-hidden bg-gray-400
                          hover:scale-110 hover:shadow-xl
                          transition duration-300 ease-in-out">
            <img
              src="https://media.istockphoto.com/id/1591572504/photo/cheerful-businesswomen-shaking-hands-in-meeting-room.jpg?s=612x612&w=0&k=20&c=mo5VjVyA-t4ydS6ZjJVxaUSi0v9KVbJV_Go5EOF_B8M="
              alt="Realtor 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right bottom bubble */}
          <div className="w-56 h-56 rounded-full absolute -right-24 bottom-0
                          overflow-hidden bg-gray-200
                          hover:scale-105 hover:shadow-lg
                          transition duration-300 ease-in-out">
            <img
              src="https://media.istockphoto.com/id/1020591620/photo/software-developers-doing-some-research.jpg?s=612x612&w=0&k=20&c=CWp-MkykpoORXIPchkN-llDjsoGT3NiY-o-NZ1IzVVY="
              alt="Realtor 3"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Realtor;
