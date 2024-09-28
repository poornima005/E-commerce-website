import React, { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { products } from "../data";
import { starRating } from "../functionality/rating";
import { CartCounterContext } from "../common/Context/CartContext";
import { Link } from "react-router-dom";
import slide1 from '../images/slide1.png'
const Product = () => {
  // Use context with a fallback to prevent undefined destructuring
  const { handleAddCart } = useContext(CartCounterContext) || {};

  if (!handleAddCart) {
    console.error("handleAddCart is undefined. Ensure the CartCounterContext.Provider is correctly wrapping the component tree.");
  }

  return (
    <div className="flex flex-wrap items-center justify-evenly">
      {products &&
        products.map((item) => (
          <div
            className="relative flex flex-col items-start mb-8"
            key={item.id}
          >
            <div className="relative group flex items-center justify-center">
              <img src={slide1} alt="product img" className="" />
              <p className="absolute left-4 top-2 bg-white rounded px-[12px] text-[14px]">
                New
              </p>
              <p className="absolute left-4 top-10 bg-[#38CB89] rounded px-[12px] text-[14px]">
                -50%
              </p>
              <p className="absolute top-4 right-4 bg-white p-1 rounded-lg text-xl">
                <CiHeart />
              </p>
              <button
                className="hidden group-hover:flex p-2 text-center absolute rounded-md bg-[#141718] text-white bottom-10 w-[90%]"
                onClick={() => handleAddCart && handleAddCart(item.id, item)} // Only call if handleAddCart exists
              >
                Add to cart
              </button>
            </div>
            <Link to="/product" state={{ fromHome: { data: item } }}>
              <div className="mt-4">
                <p className="flex text-black">{starRating(item.rating)}</p>
                <p>{item.title}</p>
                <span className="flex items-center gap-2">
                  <p>${item.price}</p>
                  <p className="line-through">$400.00</p>
                </span>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Product;
