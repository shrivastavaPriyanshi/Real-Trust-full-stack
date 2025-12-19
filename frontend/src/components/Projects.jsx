import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://real-trust-full-stack.onrender.com/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="w-full bg-gray-100 py-20 px-10">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADING */}
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-14">
          Our Projects
      </h2>


        {/* PROJECT CARDS */}
        <div className="flex gap-6 overflow-x-auto pb-4">

          {projects.map((project) => (
  <div
    key={project._id}
    className="min-w-[250px] bg-white shadow-md
               transform transition duration-300 ease-in-out
               hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
  >
    {/* IMAGE */}
    <div className="h-40 bg-gray-300">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover"
      />
    </div>

    {/* CONTENT */}
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2">
        {project.name}
      </h3>

      <p className="text-gray-600 text-sm mb-4">
        {project.description}
      </p>

      <button className="bg-orange-500 text-white px-4 py-2 text-sm">
        Read More
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
