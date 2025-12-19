const FooterBanner = () => {
  return (
    <section
      className="w-full py-24 px-10 text-white text-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1505691938895-1758d7feb511)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-3xl font-bold mb-4">
        Learn more about our listing process,
        <br /> as well as our additional staging and design work.
      </h2>

      <button className="mt-6 bg-white text-black px-8 py-3 font-semibold">
        Learn More
      </button>
    </section>
  );
};

export default FooterBanner;
