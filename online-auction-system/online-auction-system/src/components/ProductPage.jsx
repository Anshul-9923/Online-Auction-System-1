import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import data from "../data";
import Navbar from "./Navbar";
import io from "socket.io-client";

const socket = io("http://localhost:3000"); // replace with your own server URL

export const ProductPage = () => {
  const { id } = useParams();
  const product = data.find((p) => p.id === id);

  // if(typeof product === "undefined"){
  //   Navigate("./error");
  // }

  useEffect(() => {
    document.title = product.name;
  }, []);

  // dynamic bid
  const [bidPrice, setBidPrice] = useState(null);

  useEffect(() => {
    // listen for updates to the bid price
    socket.on("bidPriceUpdate", (newBidPrice) => {
      setBidPrice(newBidPrice);
    });

    return () => {
      socket.off("bidPriceUpdate");
    };
  }, []);

  const handleBid = (newBidPrice) => {
    // send the new bid price to the server
    socket.emit("newBid", newBidPrice);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 py-10">
        <div className="flex flex-wrap">
          <div className="w-full p-4 lg:w-1/2">
            <img
              src={product.src}
              alt="Product Image"
              className="w-full"
            />
          </div>
          <div className="w-full p-4 lg:w-1/2">
            <h1 className="mb-4 text-6xl font-medium">{product.name}</h1>
            <p className="mb-4 text-gray-700 text-xl">{product.caption}</p>
            <p className="mb-4 text-gray-700 text-3xl">
              Current bid: Rs. {product.bid}
            </p>
            
            <form className="flex flex-wrap">
              <div className="w-full pr-4 lg:w-1/2">
                <input
                  type="number"
                  className="mb-4 w-full rounded-md border-transparent bg-gray-100 px-4 py-2 focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="Enter bid amount"
                  min="1"
                  max="999999999999"
                />
              </div>
              <div className="w-full pl-4 lg:w-1/2">
                <button
                  type="submit"
                  className="rounded-full bg-blue-500 px-4 py-2 font-semibold text-xl text-white hover:bg-blue-600"
                  onClick={() => handleBid(bidPrice + 1)}
                >
                  Place Bid
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

// // Product.js

// import { useParams } from 'react-router-dom';
// import productsData from './productsData';

// function Product() {
//   const { id } = useParams();
//   const product = productsData.find(p => p.id === parseInt(id));

//   return (
//     <div>
//       <h2>{product.title}</h2>
//       <img src={product.image} alt={product.title} />
//       <p>{product.description}</p>
//       <p>Price: {product.price}</p>
//     </div>
//   );
// }

// export default Product;
