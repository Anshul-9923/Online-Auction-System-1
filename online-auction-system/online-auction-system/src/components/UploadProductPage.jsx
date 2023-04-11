import React, { useState } from "react";
import axios from "axios";

// Function to add a product
const addProduct = async (productData) => {
  try {
    // Make a POST request to the server with product data in the request body
    await axios.post("/products", productData);
    // Handle success, e.g., show a success message, update UI, etc.
    console.log("Product added successfully");
  } catch (error) {
    // Handle error, e.g., show an error message, etc.
    console.error(error);
  }
};

const UploadProductPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startingBidPrice, setStartingBidPrice] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form data to send to the server
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("startingBidPrice", startingBidPrice);
    formData.append("productImage", productImage);
    // Make API call to the server to submit the form data
    // using a library like Axios or Fetch
    // e.g., axios.post('/products', formData);
    // Replace the above line with actual API call to your server
    // Handle success and error responses as needed

    addProduct(formData); // added myself ==> to be checked

    console.log("Form submitted:", {
      name,
      description,
      startingBidPrice,
      productImage,
    });
    // Reset form fields
    setName("");
    setDescription("");
    setStartingBidPrice("");
    setProductImage(null);
  };

  return (
    <>
      <div className="max-w-lg mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Upload Your Product Details</h1>
        <form className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md"
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
              className="form-textarea mt-1 block w-full rounded-md"
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
              className="form-input mt-1 block w-full rounded-md"
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
              onChange={(e) => setProductImage(e.target.files[0])}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
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
