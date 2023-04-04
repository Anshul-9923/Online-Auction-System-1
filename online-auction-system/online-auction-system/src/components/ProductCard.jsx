import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <Link to={`/product/${props.id}`}>
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <img
          // src="https://media.istockphoto.com/id/1279902517/es/foto/s%C3%A9-tan-fuerte-como-naciste-para-ser.jpg?s=612x612&w=0&k=20&c=RPVx_e9KazhmSqjyJN2v_APIUk18qKkmfMSVH7YnJnU="
          // alt="Product Image"
          src={props.src}
          alt={props.alt}
          className="w-full"
        />
        <div className="p-4">
          <h3 className="mb-2 text-lg font-bold">{props.name}</h3>
          <p className="font-bold leading-tight text-gray-700">
            Current Bid - Rs. 9,999
          </p>
          <p className="mt-2 text-sm text-gray-600">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eget semper mi. Duis eu tellus risus. */}
            {props.caption}
          </p>
          <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700" onClick>
            Bid Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;