import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import axios from "axios";
import { useState } from "react";


const Navbar = () => {
  // const [res, setRes] = useState("")
  // function handleQuery(query)
  // {
  //   axios.post("http://localhost:5000/predict", query).then((response)=>{ 
  //     console.log(response.data.result); 
  //     setRes(response.data.result); 
  //   }).catch((error)=>{ 
  //     console.log(error); 
  //   })
  // }
  return (
    <>
      <nav className="bg-gray-900 shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <Link to="/">
              <div className="flex flex-shrink-0 items-center text-4xl font-bold py-2 text-white">
                DealSteal
              </div>
            </Link>
            {/* <div className="flex items-center">
              <div className="hidden md:block">
                <Link
                  to="/categories"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  Categories
                </Link>
                <Link
                  to="/patents"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  Patents
                </Link>
              </div>
            </div> */}
            {/* <div className="relative">
              <input
                type="text"
                className="my-3 block w-full appearance-none rounded-full bg-gray-200 py-2 px-10 pl-10 align-top leading-normal focus:border-gray-500 focus:bg-white focus:outline-none"
                placeholder="Search"
              />
              <div className="absolute top-3 right-2 mt-3 ml-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15.5 15.5L20 20M15.5 9.5C15.5 12.5376 12.5376 15.5 9.5 15.5C6.46243 15.5 3.5 12.5376 3.5 9.5C3.5 6.46243 6.46243 3.5 9.5 3.5C12.5376 3.5 15.5 6.46243 15.5 9.5Z"></path>
                </svg>
              </div>
            </div> */}
            {/* <button  onClick={handleQuery("Antique Chair")}>predict item</button> */}
            <Search />
            <div className="flex items-center">
              <div className="hidden md:block">
                <Link
                  to="/sell"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  Sell
                </Link>
                <Link
                  to="/about"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  About Us
                </Link>
                <Link
                  to="/login"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  LogIn
                </Link>
                <Link
                  to="/signup"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  SignUp
                </Link>
                <Link
                  to="/mybids"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  My Bids
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
