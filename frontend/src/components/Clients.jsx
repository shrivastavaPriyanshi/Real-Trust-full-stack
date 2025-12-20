import { useEffect, useState } from "react";
import axios from "axios";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("https://real-trust-full-stack-1.onrender.com/api/clients")
      .then((res) => setClients(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="testimonials" className="relative w-full min-h-screen bg-white px-10 overflow-hidden flex items-center">

      {/* BACKGROUND BUBBLES / SHAPES */}
      <div className="absolute -top-24 -left-40 w-[420px] h-[420px] bg-blue-200 rounded-full opacity-40 blur-1xl"></div>
      <div className="absolute top-32 -right-40 w-[480px] h-[480px] bg-orange-200 rounded-full opacity-40 blur-1xl"></div>
      <div className="absolute bottom-16 left-1/3 w-[320px] h-[320px] bg-gray-300 rounded-3xl opacity-30 blur-1xl"></div>

      {/* FULL-WIDTH CONTENT */}
      <div className="relative w-full">

        {/* CENTERED HEADING */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-20 text-center">
          What Our Clients Say
        </h2>

        {/* CLIENT CARDS – LEFT TO RIGHT */}
        <div className="flex gap-10 overflow-x-auto pb-6 pr-10">

          {clients.map((client) => (
        <div
           key={client._id}
           className="min-w-[460px] bg-gray-50 rounded-2xl p-10 shadow-xl
               transition duration-300 ease-in-out
               hover:-translate-y-3 hover:shadow-2xl"
        >
         {/* IMAGE */}
        <div className="w-28 h-28 mx-auto mb-8">
          <img
               src={client.image}
               alt={client.name}
              className="w-full h-full rounded-full object-cover"
          />
        </div>

         {/* TESTIMONIAL TEXT */}
          <p className="text-gray-600 text-base leading-relaxed mb-8 text-center">
              Choosing this real estate team was one of the best decisions we made.
              From the very first consultation, they understood our requirements,
              explained every detail clearly, and guided us through the entire
              process with honesty and professionalism. Their market knowledge and
              transparent approach gave us complete confidence at every step.
          </p>

          {/* CLIENT NAME */}
          <h4 className="font-bold text-xl text-center text-gray-800">
           {client.name}
          </h4>

          {/* DESIGNATION */}
             <p className="text-base text-gray-500 text-center mt-1">
              {client.designation}
             </p>
         </div>
        ))}


        </div>
      </div>
    </section>
  );
};

export default Clients;
