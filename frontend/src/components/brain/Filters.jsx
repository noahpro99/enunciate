import React from "react";

const Filters = () => {
  // vertical menu which has the height of the screen and contains the filters
  return (
    <div className="flex flex-col h-auto bg-slate-500 w-full md:w-52">
      {/* filter title */}
      <div className="flex flex-row items-center text-center py-4 px-auto">
        <div className="flex-grow text-2xl font-bold text-white">Filters</div>{" "}
        {/* filter icon */}
      </div>
      {/* filter content */}
      {/* each will be a rounded drop down button */}
      <div className="flex flex-wrap md:flex-col h-full bg-slate-400 items-center text-center text-white">
        <div className="m-2 rounded-full bg-gray-700 px-5 py-2">Filter 1</div>
        <div className="m-2 rounded-full bg-gray-700 px-5 py-2">Filter 2</div>
        <div className="m-2 rounded-full bg-gray-700 px-5 py-2">Filter 3</div>
      </div>
    </div>
  );
};

export default Filters;
