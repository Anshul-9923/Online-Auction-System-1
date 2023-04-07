import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import data from "../data"
import ProductCard from "./ProductCard"

const Homepage = () => {
  let navigate = useNavigate();
  useEffect(() => {
    document.title = "DealSteal";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((item, index) => {
              return <ProductCard
                id={item.id}
                name={item.name}
                src={item.src}
                alt={item.alt}
                key={index}
              />
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
