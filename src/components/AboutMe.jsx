import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  // let navigate = useNavigate();

  return (
    <section className="text-white flex flex-col md:flex-row mt-8 lg:mt-24 items-center ml-5 px-8 lg:justify-center lg:items-center gap-10">
      <div className="flex-[0.5] lg:ml-40">
        <div className="relative w-[400px] h-[500px]">
          <div className="bg-[#82C3EC] absolute top-[-20px] left-[-20px] z-20 w-full h-full" />
          <img
            src="IMG-2840.jpg"
            alt="Felicia Udosen"
            className="w-[100%]  md:w-full object-contain z-30 relative h-full"
          />
        </div>
      </div>

      <div className="flex-1">
        <h1 className="text-5xl text-center mb-2 lg:text-5xl name mt-2 md:text-justify">
          <span className="text-[#82C3EC] font-bold ">Felicia </span>Udosen
        </h1>
        <p className="text-center md:text-justify">Frontend Developer</p>
        <p className="mt-8 text-[#F1F6F5] w-[99%] text-center  md:w-[95%] md:text-justify px-6 md:px-0 lg:w-[60%]">
          I am a skilled front-end developer with experience in React, Tailwind
          CSS, and Git. I have a strong understanding of React components and
          state management, and I am proficient in using Tailwind CSS to create
          responsive, dynamic user interfaces. Additionally, I have a solid
          background in version control using Git, which allows me to
          collaborate effectively.
        </p>
        <div className="flex mt-8 justify-center md:block lg:block">
          <a
            href="https://github.com/Liciacodes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github fa-2xl mr-3"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/felicia-udosen-74828923a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin fa-2xl mr-3 pointer"></i>
          </a>

          <a
            href="https://hashnode.com/@Liciacodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-hashnode fa-2xl mr-3"></i>
          </a>
          <a href="mailto:udosenfelicia@gmail.com">
            <i className="fa-solid fa-envelope fa-2xl mr-3"></i>
          </a>
          <a
            href="http://www.twitter.com/Liciacodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-square-twitter fa-2xl mr-3"></i>
          </a>
        </div>
        <div className="text-center md:text-justify lg:text-justify">
          <button className="rounded-lg bg-white text-black mr-4 p-2 border-none w-content mt-12 font-bold">
            <Link to="/projects">SEE MY PORTFOLIO</Link>
          </button>
          {/* <button
            className="rounded-lg bg-white text-black mr-4 p-2 border-none w-content mt-12 font-bold"
            onClick={() => navigate("/contact")}
          >
            RESUME
          </button> fix soon*/}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
