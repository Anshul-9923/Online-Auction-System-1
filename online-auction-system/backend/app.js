// Import required modules
import fs from 'fs';
import admin from 'firebase-admin';
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import "dotenv/config";
import multer from "multer";
import { connectDB, Users, Products, conn } from "./db.js";
import bodyParser from "body-parser";

// Set up server
const credentials=JSON.parse(
  fs.readFileSync('./credentials.json')
);
admin.initializeApp({
  credential: admin.credential.cert(credentials),
})
async function createUserWithEmailAndPassword(auth, email, password) {
  try {
    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
    });

    console.log('User created successfully:', userRecord.uid);
    return userRecord;
  } catch (error) {
    console.error('Error creating new user:', error);
    throw error;
  }
}
const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true,}));

// Start server
connectDB(() =>
  server.listen(3000, () => {
    console.log("Server started on port 3000");
  })
);

// Handle file uploads using multer middleware
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({ storage });

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
app.post("/products", upload.single('img'), async (req, res) => {
  console.log("first")
  try {
    // Create a new product object with data from request body
    console.log("Accessed:", req.body);
    const newProduct = new Products(req.body);
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/signup", async (req, res) => {
  console.log("accessed some signup");
  const { email, password, name } = req.body;
  try {
    console.log("accessed signup", req.body);
    const userRecord = await createUserWithEmailAndPassword(admin.auth(), email, password);
    const id = userRecord.uid;

    // Create a new user object with data from request body
    const newUser = new Users({ id, email, name, password });

    // Save the new user to the database
    await newUser.save();

    res.json({ message: "User added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});


// Start server


// Set up initial bid price
let currentBid = 0;

// Listen for incoming socket connections
io.on("connection", (socket) => {
  console.log("on connection");
  socket.emit("currentBid", currentBid); // Send current bid price to new client

  socket.on("newBid", (bid) => {
    console.log(`new bid done: ${bid}`)
    // Listen for new bid from clients
    if (bid > currentBid) {
      currentBid = bid;
      console.log(`new bid set to ${currentBid}`);
      io.emit("currentBid", currentBid);
    }
  });
});