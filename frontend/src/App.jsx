import React from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Enunciate from "./pages/Enunciate";
import Landing from "./pages/Landing";

const App = () => {
  const { currentUser } = React.useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    //  except for the landing page navigate to login if not logged in
    // check if on landing page
    if (window.location.pathname === "/") {
      return children;
    }
    // check if user is logged in
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Landing />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="enunciate" element={<Enunciate />} />


          {/* <Route path="profile" element={<Profile />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
