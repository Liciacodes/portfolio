import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="mt-12">
      <h1 className="text-2xl underline lg:text-5xl text-center">Projects</h1>
      <section className="flex flex-col items-center lg:flex-row gap-10 lg:justify-center mt-12">
        <div className="w-[60%] sm:w-[25%]  h-[300px] hover:width-[400%]">
          <div>
            <img
              src="onboading screenshot.png"
              alt="onboarding"
              className="w-[100%] object-contain"
            />
          </div>
          <h1 className="text-center font-bold mt-2">Onboarding Project</h1>
          <p className="text-center">
            This project takes you through the onboading phase of an
            application, from the Sign Up Page to the Login in Page and then the
            dashboard. I also implemented Sign In with Google.
          </p>
          <div className="text-center mt-4">
            <a
              href="https://feliciaonboarding-project.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className=" underline font-semibold"
            >
              View Live Site
            </a>
          </div>
        </div>
        <div className="bg-[#82C3EC] w-[60%] sm:w-[25%] h-[300px]">
          <div></div>
          <h1 className="text-center font-bold">E-Commerce Project</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            laborum voluptate esse corrupti quibusdam ut, nulla laboriosam neque
            quasi error!
          </p>
        </div>
        <div className="bg-[#82C3EC] w-[60%] sm:w-[25%] h-[300px]">
          <div></div>
          <h1 className="text-center font-bold">Random Generator Project</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            laborum voluptate esse corrupti quibusdam ut, nulla laboriosam neque
            quasi error!
          </p>
        </div>
      </section>
      <button className="bg-white px-3 py-2 rounded-full text-[#2D033B] mx-4 mt-24 w-fit my-2 border-none font-bold">
        <Link to="/">
          BACK TO HOME <i class="fa-solid fa-arrow-right"></i>
        </Link>
      </button>
    </div>
  );
};

export default Project;
