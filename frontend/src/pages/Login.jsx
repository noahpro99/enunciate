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
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen text-gray-900 flex justify-center bg-gradient-to-tr from-blue-50 to-blue-900">
      <div className="max-w-screen-xl m-0 sm:m-20 shadow sm:rounded-lg flex justify-center flex-1 backdrop:blur-sm bg-white bg-opacity-60">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign In</h1>

            <form
              className="w-full flex-1 mt-8 text-indigo-500"
              onSubmit={handleSubmit}
            >
              <div className="mx-auto max-w-xs relative ">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="mt-5 tracking-wide mb-5 appearance-none border border-gray-300 w-full py-4 px-8 rounded shadow focus:outline-none focus:border-gray-500 focus:shadow-2xl"
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="mt-5 tracking-wide mb-5 appearance-none border border-white w-full py-4 px-8 rounded shadow focus:outline-none focus:border-gray-500 focus:shadow-2xl"
                />
                <button
                  type="submit"
                  className="mt-5 tracking-wide mb-5 w-full py-4 px-8 rounded shadow bg-gray-900 text-gray-100 font-bold"
                >
                  Sign In
                </button>
              </div>
              {error && <p className="text-xs text-red-500 mt-3">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
