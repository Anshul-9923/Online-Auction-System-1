import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

// Function to add a product
const addProduct = async (productData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    await axios.post("http://localhost:3000/products", productData, config);
    console.log("Product added successfully");
  } catch (error) {
    console.error(error);
  }
};

const UploadProductPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startingBidPrice, setStartingBidPrice] = useState("");
  const [img, setImg] = useState(null);

  const handleSubmit = (e) => {
    // add product
    const productData = new FormData();
    productData.append("name", name);
    productData.append("description", description);
    productData.append("startingBidPrice", startingBidPrice);
    productData.append("img", img);
    addProduct(productData);
    console.log("Form submitted");

    // reset product
    setName("");
    setDescription("");
    setStartingBidPrice("");
    setImg(null);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Upload Your Product Details</h1>
        <form className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              className="form-input border mt-1 block w-full rounded-md"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">
              Product Description
            </label>
            <textarea
              className="form-textarea mt-1 border block w-full rounded-md"
              placeholder="Enter product description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label className="block font-medium text-gray-700">
              Starting Bid Price
            </label>
            <input
              type="number"
              className="form-input mt-1 border block w-full rounded-md"
              placeholder="Enter starting bid price "
              min="1"
              max="999999999999"
              value={startingBidPrice}
              onChange={(e) => setStartingBidPrice(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">
              Product Image
            </label>
            <input
              type="file"
              className="form-input mt-1 block w-full rounded-sm"
              accept="image/*"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
              onClick={handleSubmit}
            >
              Upload Product Details
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadProductPage;
