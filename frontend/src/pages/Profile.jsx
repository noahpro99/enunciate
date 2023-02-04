import React, { useContext } from "react";
import { signOutUser } from "../firebase";
import AuthContext from "../authContext";
import { Navigate, useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOutUser();
      console.log("signed out");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Profile</h1>
            <button
              onClick={handleSignOut}
              className="mt-5 tracking-wide mb-5 appearance-none border border-gray-300 w-full py-4 px-8 rounded shadow focus:outline-none focus:border-gray-500 bg-indigo-500 text-gray-100 font-bold"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
