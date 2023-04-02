import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import Loginpage from "./components/Loginpage";
import MyAccount from "./components/MyAccount";
import MyProductBid from "./components/MyProductBid";
import SignUp from "./components/SignUp";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/myproductbid" element={<MyProductBid />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
