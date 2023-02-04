import React from "react";

const Directory = (props) => {
  // for each {id:"xyroRpIwWfXYduFJOEEQ", name:"Brain"} in directory
  // display a div with the name of the object and a right arrow icon

  const rightArrow = (
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
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  function removeUpTo(index) {
    props.setDirectory(props.directory.slice(0, index + 1));
  }

  const dirIcons = props.directory.map((dir, index) => {
    return (
      <li key={dir.id} className="">
        <button
          className="flex flex-row items-center m-1 p-2 rounded-2xl shadow h-auto bg-gradient-to-tr from-indigo-500 to-indigo-700 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out"
          onClick={() => {
            removeUpTo(index - 1);
            props.getObjectSet(dir.id);
          }}
        >
          <div className="text-xl font-semibold">{dir.name}</div>
          <div className="">{rightArrow}</div>
        </button>
      </li>
    );
  });

  return (
    <div className="">
      <ul className="flex flex-row items-center justify-start flex-wrap p-2 text-white">
        {dirIcons}
      </ul>
    </div>
  );
};

export default Directory;
