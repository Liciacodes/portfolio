import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="mt-12">
      <h1 className="text-2xl underline lg:text-5xl text-center">Projects</h1>
      <section className="flex flex-col items-center lg:flex-row gap-10 lg:justify-center mt-12">
        <div className="bg-[#82C3EC] w-[200px] h-[200px]">
          <h1 className="text-center font-bold">Blog Project</h1>
        </div>
        <div className="bg-[#82C3EC] w-[200px] h-[200px]">
          <h1 className="text-center font-bold">E-Commerce Project</h1>
        </div>
        <div className="bg-[#82C3EC] w-[200px] h-[200px]">
          <h1 className="text-center font-bold">Random Generator Project</h1>
        </div>
      </section>
      <button className="bg-white px-3 py-2 rounded-full text-[#2D033B] mx-4 mt-12 w-fit my-2 border-none font-bold">
        <Link to="/">
          BACK TO HOME <i class="fa-solid fa-arrow-right"></i>
        </Link>
      </button>
    </div>
  );
};

export default Project;
