import React from "react";
import { Navigate, useParams } from "react-router-dom";
import data from "../data";
import Navbar from "./Navbar";

export const ProductPage = () => {
  const { id } = useParams();
  const product = data.find((p) => p.id === id);

  // if(typeof product === "undefined"){
  //   Navigate("./error");
  // }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 py-10">
        <div className="flex flex-wrap">
          {/* <!-- Product image --> */}
          <div className="w-full p-4 lg:w-1/2">
            <img
              src="https://media.istockphoto.com/id/1322158059/es/foto/mancuerna-botella-de-agua-toalla-en-el-banco-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=6wc4q5s37IHzQh-2uAaaXROj2dSNWYpwFz6oHRQYKsQ="
              alt="Product Image"
              className="w-full"
            />
          </div>
          {/* <!-- Product description and bid form --> */}
          <div className="w-full p-4 lg:w-1/2">
            {/* <!-- Product title --> */}
            <h1 className="mb-4 text-6xl font-medium">{product.name}</h1>

            {/* <!-- Product description --> */}
            <p className="mb-4 text-gray-700 text-xl">{product.caption}</p>

            {/* <!-- Current bid --> */}
            <p className="mb-4 text-gray-700 text-3xl">
              Current bid: Rs. {product.bid}
            </p>

            {/* <!-- Bid form --> */}
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
