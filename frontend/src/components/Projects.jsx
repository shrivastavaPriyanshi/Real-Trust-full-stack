import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://real-trust-full-stack-1.onrender.com/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="projects" className="relative w-full min-h-screen bg-gray-100 px-10 overflow-hidden flex items-center">

      {/* BACKGROUND BUBBLES */}
      <div className="absolute -top-24 -left-40 w-[420px] h-[420px] bg-blue-200 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute top-32 -right-40 w-[480px] h-[480px] bg-orange-200 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute bottom-16 left-1/3 w-[320px] h-[320px] bg-gray-300 rounded-3xl opacity-30 blur-2xl"></div>

      {/* FULL-WIDTH CONTENT */}
      <div className="relative w-full">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-16 text-center max-w-3xl mx-auto">
          Our Featured Projects
        </h2>


        {/* CARDS – FROM LEFT TO RIGHT */}
        <div className="flex gap-10 overflow-x-auto pb-6 pr-10">

          {projects.map((project) => (
            <div
              key={project._id}
              className="min-w-[380px] bg-white rounded-xl shadow-lg
                         transition duration-300 ease-in-out
                         hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* IMAGE */}
              <div className="h-56 rounded-t-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-gray-800">
                  {project.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  A premium real estate development offering modern design,
                  smart layouts, and high-end amenities for comfortable
                  living and long-term value.
                </p>

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-sm font-semibold rounded-md transition">
                  View Details
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
