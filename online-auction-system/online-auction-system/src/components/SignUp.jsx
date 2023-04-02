import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const SignUp = (props) => {
  let navigate = useNavigate();
  useEffect(() => {
    document.title = "Sign Up";
  }, []);
  return (
    <>
      {/* <nav className="bg-gray-900 shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <a
                href="#"
                className="flex flex-shrink-0 items-center text-4xl font-bold text-white"
              >
                {" "}
                Deal{" "}
              </a>
              <a
                href="#"
                className="flex flex-shrink-0 items-center text-4xl font-bold text-white"
              >
                {" "}
                Steal{" "}
              </a>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  Categories
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  Patents
                </a>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                className="my-3 block w-full appearance-none rounded-full bg-gray-200 py-2 px-10 pl-20 align-middle leading-normal focus:border-gray-500 focus:bg-white focus:outline-none"
                placeholder="Search"
              />
              <div className="absolute top-3 right-0 mt-3 ml-3">
                <svg
                  className="h-4 w-4 fill-current text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M19.707 18.293l-5.5-5.5a8 8 0 1 0-1.414 1.414l5.5 5.5a1 1 0 1 0 1.414-1.414zM4 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  Sell
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  About Us
                </a>
                <a
                //   href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                  onClick={() =>
                    {navigate("./login", { replace: false }); console.log("clicked");}
                  }
                >
                  LogIn
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  SignUp
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
      <Navbar />
      <main>
        <div className="mx-auto mt-20 mb-20 max-w-xl rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            Create an Account
          </h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <label
                for="name"
                className="mb-2 block font-semibold text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full rounded-lg border border-gray-400 p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                for="email"
                className="mb-2 block font-semibold text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full rounded-lg border border-gray-400 p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                for="password"
                className="mb-2 block font-semibold text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full rounded-lg border border-gray-400 p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                for="confirm_password"
                className="mb-2 block font-semibold text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                className="w-full rounded-lg border border-gray-400 p-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-gray-800 py-2 px-4 font-semibold text-white"
            >
              Create Account
            </button>
          </form>
          <hr className="my-6 border-gray-400" />
          <p className="font-semibold text-gray-800">
            Already have an account?{" "}
            <a href="#" className="font-semibold text-gray-800 underline">
              Login
            </a>
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
