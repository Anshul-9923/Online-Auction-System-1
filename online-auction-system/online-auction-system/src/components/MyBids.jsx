import React from "react";
import Navbar from "./Navbar";

const MyBids = () => {
  return (
    <>
      <Navbar />
      <div class="grid grid-cols-1  my-10 mx-10 gap-4">
        <h3 class="mb-4 text-3xl font-bold text-gray-800">My Past Bids</h3>
        <div class="border p-4 flex flex-row items-center">
          <img
            src="https://via.placeholder.com/150x150.png"
            alt="Product Photo"
            class="mr-4 object-scale-down w-30 h-30"
          />
          <div class="flex flex-col">
            <h2 class="text-lg font-semibold">Signed Football</h2>
            <p class="text-gray-600 my-2">
              This is a rare, signed football by the legendary player XYZ.
            </p>
          </div>
          <div class="flex ml-auto flex-col">
            <h2 class="text-lg">Your Bid</h2>
            <p class="text-gray-800 font-bold text-2xl my-2">Rs. 6969</p>
          </div>
          <div class="ml-auto flex flex-col items-end mx-5">
            <h2 class="text-lg ">Current Bid</h2>
            <p class="text-gray-800 font-bold text-2xl my-2">Rs. 9696</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded mt-4">
              Bid Again
            </button>
          </div>
        </div>
        <div class="border p-4 flex flex-row items-center">
          <img
            src="https://via.placeholder.com/150x150.png"
            alt="Product Photo"
            class="mr-4 object-scale-down w-30 h-30"
          />
          <div class="flex flex-col">
            <h2 class="text-lg font-semibold">Signed Football</h2>
            <p class="text-gray-600 my-2">
              This is a rare, signed football by the legendary player XYZ.
            </p>
          </div>
          <div class="flex ml-auto flex-col">
            <h2 class="text-lg">Your Bid</h2>
            <p class="text-gray-800 font-bold text-2xl my-2">Rs. 6969</p>
          </div>
          <div class="ml-auto flex flex-col items-end mx-5">
            <h2 class="text-lg ">Current Bid</h2>
            <p class="text-gray-800 font-bold text-2xl my-2">Rs. 9696</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded mt-4">
              Bid Again
            </button>
          </div>
        </div>
        <div class="border p-4 flex flex-row items-center">
          <img
            src="https://via.placeholder.com/150x150.png"
            alt="Product Photo"
            class="mr-4 object-scale-down w-30 h-30"
          />
          <div class="flex flex-col">
            <h2 class="text-lg font-semibold">Signed Football</h2>
            <p class="text-gray-600 my-2">
              This is a rare, signed football by the legendary player XYZ.
            </p>
          </div>
          <div class="flex ml-auto flex-col">
            <h2 class="text-lg">Your Bid</h2>
            <p class="text-gray-800 font-bold text-2xl my-2">Rs. 6969</p>
          </div>
          <div class="ml-auto flex flex-col items-end mx-5">
            <h2 class="text-lg ">Current Bid</h2>
            <p class="text-gray-800 font-bold text-2xl my-2">Rs. 9696</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded mt-4">
              Bid Again
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBids;
