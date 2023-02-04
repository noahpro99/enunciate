import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between h-12 bg-indigo-700 top-0 w-full items-center">
      <div className="flex flex-row items-center ml-4 text-white font-bold">
        Master Anatomy
      </div>
      <div className="flex flex-row items-center mr-4 text-white font-bold">
        <button
          className="flex flex-row items-center justify-center h-8 w-8 rounded-full hover:bg-slate-700"
          onClick={() => {
            console.log("menu button clicked");
            navigate("/landing");
          }}
        >
          {/* menu icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
