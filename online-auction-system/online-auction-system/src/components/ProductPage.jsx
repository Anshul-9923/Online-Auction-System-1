import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
// import data from "../data";
import Navbar from "./Navbar";
import io from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:3000/");

export const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();
  
  useEffect(() => {
    // Fetch data from server when component mounts
    axios.get(`http://localhost:3000/product/${id}`).then((response) => {
      // Update state with retrieved data
      console.log(response.data);
      setProduct(response.data);
      document.title = response.data.name;
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  // dynamic bid
  const [bidPrice, setBidPrice] = useState(0);
  const [bid, setBid] = useState(0);

  useEffect(() => {
    // listen for updates to the bid price
    // socket.on("bidPriceUpdate", (newBidPrice) => {
    //   setBidPrice(newBidPrice);
    //   console.log("bid price updated");
    // });

    socket.on("currentBid", (newBidPrice) => {
      setBidPrice(newBidPrice);
      console.log("bid price updated");
    });

    return () => {
      socket.off("currentBid");
    };
  }, []);

  const handleBid = (e, newBidPrice) => {
    e.preventDefault();
    // send the new bid price to the server
    socket.emit("newBid", newBidPrice);
  };

  if (!product) {
    return <div>Loading...</div>; // Replace with your own loading spinner or placeholder
  }

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
            <p className="mb-4 text-gray-700 text-xl">{product.description}</p>
            <p className="mb-4 text-gray-700 text-3xl">
              Current bid: Rs. {bidPrice}
            </p>
            
            <form className="flex flex-wrap">
              <div className="w-full pr-4 lg:w-1/2">
                <input
                  type="number"
                  className="mb-4 w-full rounded-md border-transparent bg-gray-100 px-4 py-2 focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="Enter bid amount"
                  min="1"
                  max="999999999999"
                  onChange={(e) => setBid(e.target.valueAsNumber)}
                />
              </div>
              <div className="w-full pl-4 lg:w-1/2">
                <button
                  // type="submit"
                  className="rounded-full bg-blue-500 px-4 py-2 font-semibold text-xl text-white hover:bg-blue-600"
                  onClick={(e) => handleBid(e, bid)}
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