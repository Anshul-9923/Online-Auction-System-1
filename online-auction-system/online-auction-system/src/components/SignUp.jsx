import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Navbar from "./Navbar";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const createAccount = async (event) => {
    event.preventDefault();
    try {
      if (password != confirmPassword) {
        setError("Password and confirm password do not match");
        return;
      }
      console.log("whatever");
      // console.log(email, password);
      const user = {
        name: name,
        email: email,
        password: password,
      };
      console.log(user);
      await axios
        .post("http://localhost:3000/signup", user)
        .then(console.log("sent user cred"));
      // await createUserWithEmailAndPassword(getAuth(), email, password);
      console.log("whatever2");
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    document.title = "Sign Up";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div className="mx-auto mt-20 mb-20 max-w-xl rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            Create an Account
          </h2>
          {error && <p className="error">{error}</p>}
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-2 block font-semibold text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full rounded-lg border border-gray-400 p-2"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 block font-semibold text-gray-700"
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
                className="w-full rounded-lg border border-gray-400 p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="mb-2 block font-semibold text-gray-700"
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
                className="w-full rounded-lg border border-gray-400 p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirm_password"
                className="mb-2 block font-semibold text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                placeholder="Re-renter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-400 p-2"
                required
              />
            </div>
            <button
              type="submit"
              onClick={(e) => createAccount(e)}
              className="w-full rounded-lg bg-gray-800 py-2 px-4 font-semibold text-white"
            >
              Create Account
            </button>
          </form>
          <hr className="my-6 border-gray-400" />
          <p className="font-semibold text-gray-800">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="font-semibold text-gray-800 underline"
            >
              Login
            </Link>
          </p>
        </div>
      </main>
      <footer className="bg-gray-900 py-10 text-gray-400 shadow-lg">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            <div className="mb-4 w-full md:mb-0 md:w-auto">
              <p>DealSteal - An Online Auction Website</p>
            </div>
            <div className="w-full md:w-auto">
              <ul className="flex items-center">
                <li className="mr-6">
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li className="mr-6">
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SignUp;
