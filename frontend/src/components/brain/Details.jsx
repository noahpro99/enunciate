import { collection, doc, getDoc } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase";

const Details = (props) => {
  const object = props.object;
  const getObjectSet = props.getObjectSet;

  function handleChildClick(childId) {
    // go to that child object from firestore
    // set the object state variable to this object

    getObjectSet(childId);
  }
  // const childrenJSX = object.children.map((child) => {
  //   return (
  //     <li key={child.id}>
  //       <button
  //         className="my-2 p-2 rounded-2xl shadow bg-white text-black hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out"
  //         onClick={() => handleChildClick(child.id)}
  //       >
  //         {child.name}
  //       </button>
  //     </li>
  //   );
  // });

  console.log(object.children);
  return (
    <div className="flex flex-col h-auto w-full justify-start md:w-96 text-black">
      {/* rounded details display */}
      <div className="my-8 mx-8 rounded-2xl shadow-2xl h-auto bg-white">
        {/* details title */}
        <div className="text-2xl font-bold text-center p-2 my-2">
          {object.name}
        </div>
        {/* all of the children buttons rounded and shadows and hover very pretty */}
        {/* <ul className="flex flex-col justify-start items-center my-5">
          {childrenJSX}
        </ul> */}
        <p className="text-base p-6 my-2 overflow-y-auto h-96 text-left break-words">
          {object.details}
        </p>
      </div>
    </div>
  );
};

export default Details;
