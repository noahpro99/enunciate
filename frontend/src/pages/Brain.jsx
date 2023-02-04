import React from "react";

import Header from "../components/brain/Header";
import Filters from "../components/brain/Filters";
import Display from "../components/brain/Display";
import Details from "../components/brain/Details";
import { db } from "../firebase";
import { collection, doc, getDoc } from "firebase/firestore";

const Brain = () => {
  const [viewingObject, setViewingObject] = React.useState({});
  const [selectedObject, setSelectedObject] = React.useState({});
  const [filters, setFilters] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [directory, setDirectory] = React.useState([]);

  const getObjectSet = async (id) => {
    const docRef = doc(collection(db, "objects"), id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setViewingObject(docSnap.data());
      console.log("Document data:", docSnap.data());
      setDirectory((directory) => [
        ...directory,
        { id: docSnap.id, name: docSnap.data().name },
      ]);
    } else {
      setError("No such document!");
    }
  };

  // load up the brain object document from the objects collection from firestore first time
  // it's id is xyroRpIwWfXYduFJOEEQ use this id to get the document
  // then set the object state variable to this object
  React.useEffect(() => {
    // load up the brain object document from the objects collection from firestore first time
    getObjectSet("xyroRpIwWfXYduFJOEEQ");
    console.log("useEffect");
  }, []);

  return (
    <div className="min-h-screen flex flex-col max-w-screen bg-gray-700">
      <Header />
      {/* flex row takes up the rest of the screen */}
      <div className="flex flex-col md:flex-row grow">
        {/* <Filters object={selectedObject} setFilters={setFilters} /> */}
        <Display
          object={viewingObject}
          filters={filters}
          getObjectSet={getObjectSet}
          directory={directory}
          setDirectory={setDirectory}
        />
        <Details object={viewingObject} getObjectSet={getObjectSet} />
      </div>
    </div>
  );
};

export default Brain;
