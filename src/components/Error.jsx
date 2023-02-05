import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="text-center mx-auto my-24 flex items-center flex-col justify-center">
      <img
        src="error.jpg"
        alt="error"
        width={400}
        height={500}
        className="mx-12"
      />
      <h1 className="text-2xl mt-8 lg:text-5xl">Oops, PAGE NOT FOUND!</h1>
      <button className="bg-white px-4 py-2 rounded-full text-[#2D033B] mx-4 w-fit my-2 border-none bold mt-12 font-bold">
        <Link to="/">
          BACK TO HOME <i className="fa-solid fa-arrow-right ml-2"></i>
        </Link>
      </button>
    </div>
  );
};
