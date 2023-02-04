import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

const Home = () => {
  return (
    // signout button
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <button
            className="mt-5 tracking-wide mb-5 appearance-none border border-gray-300 w-full py-4 px-8 rounded shadow focus:outline-none focus:border-gray-500 bg-blue-500 text-gray-100 font-bold"
            onClick={() => {
              console.log("signout button clicked");
              signOut(auth)
                .then(() => {
                  // Sign-out successful.
                })
                .catch((error) => {
                  // An error happened.
                });
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
