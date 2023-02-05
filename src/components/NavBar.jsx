import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [isNavBarOpen, setNavBarOpen] = useState(false);
  const handleToggle = () => {
    console.log("clicked");
    setNavBarOpen(!isNavBarOpen);
  };
  return (
    <nav className="bg-[#472183] w-full px-8">
      <div className=" mb-12 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl lg:text-5xl name">
            <span className="text-[#82C3EC] font-bold ">Felicia</span> Udosen
          </h1>
        </Link>

        <ul
          className={`${
            isNavBarOpen
              ? "absolute top-24 right-0 bottom-30 left-0 bg-[#82C3EC] px-3 transition ease-in-out duration-200 delay-300"
              : "lg:flex hidden lg:items-center "
          }`}
        >
          <li className="mx-4  my-4 text-xl">
            <Link to="/aboutme">About Me</Link>
          </li>
          <li className="mx-4  my-4 text-xl">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="mx-4  my-4 text-xl">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="lg:text-white px-4 py-1 rounded-md lg:bg-[#82C3EC] my-4 text-xl w-fit mx-4 bg-white text-[#82C3EC]">
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
        <div className="px-3 lg:hidden" onClick={handleToggle}>
          {isNavBarOpen ? (
            <AiOutlineClose className="cursor-pointer text-3xl font-bold" />
          ) : (
            <AiOutlineMenu className="cursor-pointer text-3xl font-bold" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
