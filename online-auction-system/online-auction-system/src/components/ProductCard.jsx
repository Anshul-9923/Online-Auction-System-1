import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <Link to={`/product/${props.id}`}>
      {/* <div className="overflow-hidden rounded-lg bg-white shadow">
        <img
          src={props.src}
          alt={props.alt}
          className="object-scale-down h-72 w-96"
        />
        <div className="p-4">
          <h3 className="mb-2 text-lg font-bold">{props.name}</h3>
          <p className="font-bold leading-tight text-gray-700">
            Current Bid - Rs. {props.currentBid}
          </p>
          <p className="mt-2 text-sm text-gray-600">
            {props.caption}
          </p>
          <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
            Bid Now
          </button>
        </div>
      </div> */}
      <div className="relative overflow-hidden rounded-lg shadow-lg w-100 h-100 hover:scale-125 transition-all duration-500 cursor-pointer">
        <img
          src={props.src}
          alt={props.alt}
          className="object-cover w-full h-64 sm:h-72 lg:h-96"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800  to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-lg font-bold">{props.name}</h3>
          <p className="mt-2 text-sm">{props.description}
          </p>
          <div className="flex">
            <div>
              <p className="mt-4 font-bold text-xl">Current Bid: Rs. {props.currentBid}</p>
            </div>
            <div>
              <button className="mt-3 absolute right-4 bottom-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {" "}
                Bid Now{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
