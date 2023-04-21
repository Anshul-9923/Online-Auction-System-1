// Import required modules
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import "dotenv/config";
import multer from "multer";
import { connectDB, Users, Products, conn } from "./db.js";
import mongoose from "mongoose";


// Set up server
const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

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


// Handle file uploads using multer middleware
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({ storage });



// Start server
connectDB(() =>
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  })
);

app.get("/", async (req, res) => {
  console.log("accessed")
  try {
    // random set of 50 products
    const products = await Products.aggregate([{ $sample: { size: 50 } }]);
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/product/:id", async (req, res) => {
  const id = req.params.id;
  console.log(`accessed product/${id}`);
  try {
    const product = await Products.findById(id);
    res.json(product);
  } catch (err) {
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

// Upload endpoint
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const fileUrl = req.protocol + '://' + req.get('host') + '/' + req.file.path;

    // Save the file URL to the database
    const product = new Products({
      name: req.body.name,
      description: req.body.description,
      startingBidPrice: req.body.startingBidPrice,
      productImageUrl: fileUrl,
    });
    await product.save();

    res.json({ imageUrl: fileUrl });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
});