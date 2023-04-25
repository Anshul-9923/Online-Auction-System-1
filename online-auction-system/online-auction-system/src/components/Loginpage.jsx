import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import AuthContext from '../AuthContext';


const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  const { authentic, setAuthentic } = useContext(AuthContext);

  useEffect(() => {
    // Initialize Firebase
    const firebaseConfig = {
      // replace with your Firebase project's API keys
      apiKey: "AIzaSyC8fwVcnQ8UU1eneLFpzseqfj3e_TpzAck",
      authDomain: "online-auction-system-b0dc5.firebaseapp.com",
      projectId: "online-auction-system-b0dc5",
      storageBucket: "online-auction-system-b0dc5.appspot.com",
      messagingSenderId: "77490244258",
      appId: "1:77490244258:web:1f982fa5673418ed0fe5fb"
    };
    initializeApp(firebaseConfig);

    document.title = "Login";
  }, []);

const login = async (email, password) => {
  try {
    const auth = getAuth();
    console.log("before authentic", authentic);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    setAuthentic(true)
    console.log("after authentic", authentic);
    const user = userCredential.user;
    return user;
  } catch (error) {
    // Handle error
    alert("Wrong Password");
    console.error(error);
    throw error;
  }
};

  const logIn = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      // Handle successful login
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <Navbar />
      <main>
        <div className="max-w-xl mb-20 mx-auto mt-20 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Welcome Back!
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-400 p-2 w-full rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-400 p-2 w-full rounded-lg"
                required
              />
            </div>
            <button
              className="bg-gray-800 text-white py-2 px-4 rounded-lg font-semibold w-full"
              onClick={e => logIn(e)}
            >
              Login
            </button>
          </form>
          <hr className="my-6 border-gray-400" />
          <p className="text-gray-800 font-semibold">
            Don't have an account yet?{" "}
            <Link to={'/signup'} className="text-gray-800 font-semibold underline">
              Signup
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Loginpage;