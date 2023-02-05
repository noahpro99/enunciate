import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (!email) {
      setError("Email is required");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in");
        console.log(user);
        setLoading(false);
        navigate("/enunciate");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        setError(error.message);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 to-purple-200">

      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-500 to-purple-200'>
      <div className='flex flex-col items-center w-full justify-center'>
        <div className="mt-12 flex flex-col items-center">
          <h1 className="text-5xl font-bold text-white mb-4 p-4">Sign In</h1>

          <form
            className="backdrop:blur-sm bg-white bg-opacity-20 shadow-2xl p-6 rounded-2xl w-full font-bold"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col items-center justify-center">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="mt-5 tracking-wide mb-2 appearance-none border border-gray-300 w-full py-4 px-8 rounded-full shadow focus:outline-none  focus:shadow-2xl"
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="mt-5 tracking-wide mb-2 appearance-none border border-white w-full py-4 px-8 rounded-full shadow focus:outline-none  focus:shadow-2xl"
              />
              <button
                type="submit"
                className="mt-5 tracking-wide mb-2 w-full py-4 px-8 rounded-full shadow bg-gray-900 text-gray-100 font-bold"
              >
                Sign In
              </button>

              <button
                type="button"
                className="mt-5 tracking-wide mb-5 w-full py-4 px-8 rounded-full shadow bg-gray-900 text-gray-100 font-bold"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </div>
            {error && <p className="text-xs text-red-500 mt-3">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
