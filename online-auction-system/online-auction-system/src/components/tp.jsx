import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000"); // replace with your own server URL

function Auction() {
  const [bidPrice, setBidPrice] = useState(null);

  useEffect(() => {
    // listen for updates to the bid price
    socket.on("bidPriceUpdate", (newBidPrice) => {
      setBidPrice(newBidPrice);
    });

    // cleanup function to unsubscribe when component unmounts
    return () => {
      socket.off("bidPriceUpdate");
    };
  }, []);

  const handleBid = (newBidPrice) => {
    // send the new bid price to the server
    socket.emit("newBid", newBidPrice);
  };

  return (
    <div>
      <h1>Auction</h1>
      {bidPrice ? (
        <p>The current bid price is {bidPrice}</p>
      ) : (
        <p>No bids have been made yet</p>
      )}
      <button onClick={() => handleBid(bidPrice + 1)}>Bid +1</button>
    </div>
  );
}

export default Auction;
