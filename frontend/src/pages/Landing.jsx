import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    // tailwind background whole page is a image with text on top
    <div>
      {/* gradient background with 4 colors of indago animated*/}
      <article className="relative h-screen bg-gradient-to-tr from-indigo-400 to-indigo-600">
        {/* <picture>
          <source
            srcSet="https://wallpaperaccess.com/full/1647799.jpg"
            media="(min-width: 1024px)"
          />
          <img src="https://wallpaperaccess.com/full/1647799.jpg" alt="" />
        </picture> */}
        <div className="absolute top-0 left-0 w-full h-[750px]">
          <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
              Master Anatomy
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-white mb-4 leading-tight">
              Better Brain Education
            </h2>
            <Link to="/brain">
              {/* should have glow beneath it on hover */}
              <button className="bg-white text-gray-800 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-gray-200 hover:text-gray-900 hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105">
                Get Started
              </button>
            </Link>
            {/* animated  */}
            {/* <div className="h-auto my-10 w-auto rounded-md bg-gradient-to-r from-yellow-400 to-green-500 p-1">
              <div className="flex h-full w-full items-center justify-center bg-indigo-500 back">
                <h1 className="text-2xl font-black text-white p-4">
                  Get Started
                </h1>
              </div>
            </div> */}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Landing;
