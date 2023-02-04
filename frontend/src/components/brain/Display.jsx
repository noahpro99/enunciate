import React from "react";
import Directory from "./Directory";
import ImageMapper from "react-img-mapper";

const Display = (props) => {
  // takes up available width and has an image of a brain in the center of this display
  // div will be full available width and height

  const object = props.object;

  // map of areas to be highlighted on the image of the brain
  const MAP = {
    name: "my-map",
    areas: [
      {
        name: "iKnbYUWWj2gWP9UxZqMn", //id of the area for hippocampus
        shape: "rect",
        // lower right of the brain is the hippocampus
        coords: [300, 200, 500, 325],

        preFillColor: "rgba(255, 255, 255, 0.5)",
        fillColor: "rgba(255, 255, 255, 0.5)",
      },
    ],
  };

  // on click of an area, set the viewedObject to the object with the id of the area
  function onAreaClick(area) {
    props.getObjectSet(area.name);
  }

  return (
    <div className="flex flex-col grow">
      <Directory
        directory={props.directory}
        getObjectSet={props.getObjectSet}
        setDirectory={props.setDirectory}
      />
      {/* display title */}
      {/* <div className="flex flex-row justify-center items-center h-16 bg-gray-200 text-2xl font-bold">
        <div className="flex flex-row ml-4">{object.name}</div>
      </div> */}
      <div className="h-full mx-auto">
        <ImageMapper
          src={object.imageUrl}
          map={MAP}
          width={500}
          imgWidth={500}
          onClick={onAreaClick}
        />
      </div>
    </div>
  );
};

export default Display;
