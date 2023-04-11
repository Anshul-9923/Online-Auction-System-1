// Import required modules
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import "dotenv/config";
import { connectDB, Users, Products } from "./db.js";

// Set up server
const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });
app.use(cors());

// Set up initial bid price
let currentBid = 0;

// Listen for incoming socket connections
io.on("connection", (socket) => {
  socket.emit("currentBid", currentBid); // Send current bid price to new client

  socket.on("newBid", (bid) => {
    // Listen for new bid from clients
    if (bid > currentBid) {
      // Check if bid is higher than current bid
      currentBid = bid; // Update current bid and broadcast to all clients
      io.emit("currentBid", currentBid);
    }
  });
});

// Start server
connectDB(() =>
  server.listen(3000, () => {
    -console.log("Server started on port 3000");
  })
);

app.get("/", async (req, res) => {
  try {
    // Query the database to retrieve a random set of 50 products
    const products = await Products.aggregate([{ $sample: { size: 50 } }]);
    // Send the retrieved data as a response
    res.json(products);
  } catch (err) {
    // Handle any errors that may occur
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Define route for adding a product
app.post("/products", async (req, res) => {
  try {
    // Create a new product object with data from request body
    const newProduct = new Products(req.body);
    // Save the new product to the database
    await newProduct.save();
    // Send success response
    res.status(201).json({ message: "Product added successfully" });
  } catch (err) {
    // Handle any errors that may occur
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});
