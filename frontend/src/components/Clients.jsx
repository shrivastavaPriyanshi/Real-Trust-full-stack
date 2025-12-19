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
    <section className="w-full bg-white py-20 px-10">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADING */}
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-14">
          Happy Clients
        </h2>

        {/* CLIENT CARDS */}
        <div className="flex gap-6 overflow-x-auto pb-4">

              {clients.map((client) => (
        <div
         key={client._id}
         className="min-w-[260px] bg-gray-100 p-6 text-center shadow-md
                    transform transition duration-300 ease-in-out
                    hover:-translate-y-2 hover:shadow-xl"
        >
         {/* IMAGE */}
         <div className="w-20 h-20 mx-auto mb-4">
           <img
              src={client.image}
              alt={client.name}
              className="w-full h-full rounded-full object-cover"
           />
         </div>

         {/* DESCRIPTION */}
         <p className="text-gray-600 text-sm mb-4">
           {client.description}
         </p>

         {/* NAME */}
         <h4 className="font-semibold">
          {client.name}
         </h4>

         {/* DESIGNATION */}
         <p className="text-sm text-gray-500">
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
