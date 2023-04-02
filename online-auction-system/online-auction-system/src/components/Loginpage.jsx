import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Loginpage = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <div className="max-w-xl mb-20 mx-auto mt-20 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Welcome Back!
          </h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <label
                for="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-gray-400 p-2 w-full rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label
                for="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="border border-gray-400 p-2 w-full rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gray-800 text-white py-2 px-4 rounded-lg font-semibold w-full"
            >
              Login
            </button>
          </form>
          <hr className="my-6 border-gray-400" />
          <p className="text-gray-800 font-semibold">
            Don't have an account yet?{" "}
            <a href="#" className="text-gray-800 font-semibold underline">
              Signup
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Loginpage;
