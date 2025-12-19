const Gallery = () => {
  return (
    <section className="relative w-full bg-white py-24 px-16 overflow-hidden">
      {/* ⬆️ py-40 → py-24 (LESS HEIGHT) */}

      {/* Grey bubbles */}
      <div className="absolute top-24 left-24 w-48 h-48 bg-gray-100 rounded-full opacity-70"></div>
      <div className="absolute bottom-16 right-32 w-36 h-36 bg-gray-100 opacity-60"></div>

      {/* CENTERED container */}
      <div className="relative max-w-[1200px] mx-auto h-[520px]">
        {/* ⬆️ reduced width & height */}

        {/* IMAGE 1 */}
        <div className="absolute top-0 left-[120px]">
          <div className="absolute -top-4 -left-4 w-10 h-10 border-t-4 border-l-4 border-orange-500"></div>
          <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-4 border-r-4 border-orange-500"></div>
          <div className="absolute top-8 -right-8 w-6 h-6 bg-blue-600"></div>

          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
            className="w-72 h-48 object-cover shadow-xl"
            alt="Gallery 1"
          />
        </div>

        {/* IMAGE 2 (CENTER & BIG) */}
        <div className="absolute top-28 left-1/2 -translate-x-1/2 z-10">
          {/* 👈 true center */}
          <div className="absolute -top-4 -right-4 w-10 h-10 border-t-4 border-r-4 border-blue-600"></div>
          <div className="absolute -bottom-4 -left-4 w-10 h-10 border-b-4 border-l-4 border-blue-600"></div>

          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
            className="w-[420px] h-[300px] object-cover shadow-2xl"
            alt="Gallery 2"
          />
        </div>

        {/* IMAGE 3 */}
        <div className="absolute bottom-0 right-[120px]">
          <div className="absolute -top-4 -left-4 w-10 h-10 border-t-4 border-l-4 border-orange-500"></div>
          <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-4 border-r-4 border-orange-500"></div>

          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            className="w-72 h-48 object-cover shadow-xl"
            alt="Gallery 3"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
