// Import required modules
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

// Set up server
const app = express();
const server = createServer();
const io = new Server(server, {cors: {origin: '*'}});
app.use(cors());

// Set up initial bid price
let currentBid = 0;

// Listen for incoming socket connections
io.on("connection", (socket) => {
  // Send current bid price to new client
  socket.emit("currentBid", currentBid);

  // Listen for new bid from clients
  socket.on("newBid", (bid) => {
    // Check if bid is higher than current bid
    if (bid > currentBid) {
      // Update current bid and broadcast to all clients
      currentBid = bid;
      io.emit("currentBid", currentBid);
    }
  });
});

// Start server
server.listen(3000, () => {
  console.log("Server started on port 3000");
});
