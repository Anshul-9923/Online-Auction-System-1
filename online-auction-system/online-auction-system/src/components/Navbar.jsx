import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-900 shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <Link to="/">
              <div className="flex flex-shrink-0 items-center text-4xl font-bold text-white">
                DealSteal
              </div>
            </Link>
            <div className="flex items-center">
              <div className="hidden md:block">
                <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100">
                  Categories
                </a>
                <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100">
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
                <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100">
                  <Link to="/sell">Sell</Link>
                </a>
                <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100">
                  <Link to="/about">About Us</Link>
                </a>
                <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100">
                  <Link to="/login">LogIn</Link>
                </a>
                <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100">
                  <Link to="/signup">SignUp</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
