import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MyBids = () => {
  useEffect(() => {
    document.title = "My Bids";
  }, []);

  const data = [{1:1}, {2:2}, {3:3}];
  
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1  my-10 mx-10 gap-4">
        <h3 className="mb-4 text-3xl font-bold text-gray-800">My Past Bids</h3>
        {data.map((bids, key) => {
          return (
            <div key={key} className="border p-4 flex flex-row items-center">
              <img
                src="https://via.placeholder.com/150x150.png"
                alt="Product Photo"
                className="mr-4 object-scale-down w-30 h-30"
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold">Signed Football</h2>
                <p className="text-gray-600 my-2">
                  This is a rare, signed football by the legendary player XYZ.
                </p>
              </div>
              <div className="flex ml-auto flex-col">
                <h2 className="text-lg">Your Bid</h2>
                <p className="text-gray-800 font-bold text-2xl my-2">Rs. 6969</p>
              </div>
              <div className="ml-auto flex flex-col items-end mx-5">
                <h2 className="text-lg ">Current Bid</h2>
                <p className="text-gray-800 font-bold text-2xl my-2">Rs. 9696</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                  Bid Again
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default MyBids;
