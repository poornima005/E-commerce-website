import React, { useContext, useState } from "react";
import Contact from "../components/Contact";
import { FaAngleLeft } from "react-icons/fa6";
import { starRating } from "../functionality/rating";
import { BiHeart } from "react-icons/bi";
import Product from "../components/Product";
import { useLocation } from "react-router-dom";
import { CartCounterContext } from "../common/Context/CartContext";
import product1 from '../images/product1.png';
import product2 from '../images/product2.png';
import product3 from '../images/product3.png';
import product4 from '../images/product4.png';

const ProductDetailsLayout = () => {
  const location = useLocation();

  // Safely destructuring with fallback if location.state or fromHome is undefined
  const { fromHome } = location.state || {};
  const data = fromHome?.data;

  const [quantity, setQuantity] = useState(1);
  const { handleAddCart } = useContext(CartCounterContext);

  // Handle missing data
  if (!data) {
    return (
      <div className="px-10 lg:px-40">
        <p>Product data not found. Please go back to the homepage and try again.</p>
      </div>
    );
  }

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <div>
      <section className="px-10 lg:px-40">
        <div>
          <p className="flex items-center gap-4">
            Home <FaAngleLeft /> Shop <FaAngleLeft /> Living Room <FaAngleLeft /> Product
          </p>
          <div className="w-full flex my-8">
            <div className="w-[50%] flex flex-wrap gap-4">
              <img src={product1} alt="product img" className="w-[200px] h-[250px]" />
              <img src={product2} alt="product img" className="w-[200px] h-[250px]" />
              <img src={product3} alt="product img" className="w-[200px] h-[250px]" />
              <img src={product4} alt="product img" className="w-[200px] h-[250px]" />
            </div>
            <div className="w-[50%] lg:px-10">
              <div key={data.id}>
                <span className="flex items-center gap-1">
                  {data.rating ? starRating(data.rating) : "No rating available"} <p>31 reviews</p>
                </span>
                <p className="text-[40px] font-[500]">{data.title || "Product Title"}</p>
                <p>{data.description || "No description available"}</p>
                <span className="flex gap-4">
                  <p>${data.price}</p>
                  <p className="line-through">${data.price}</p>
                </span>
                <div>
                  <p>Measurements</p>
                  <span className="flex items-center gap-2">
                    <p>{data?.measurements?.width || "N/A"}/</p>
                    <p>{data?.measurements?.height || "N/A"}/</p>
                    <p>{data?.measurements?.depth || "N/A"}/</p>
                  </span>
                  <p>Choose Colors</p>
                  <p>Black</p>
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <button className="w-full flex items-center gap-2 border border-black rounded-md px-4 p-1">
                      <BiHeart /> Wishlist
                    </button>
                  </div>
                  <button
                    className="w-full bg-black text-white rounded-md p-2 my-4"
                    onClick={() => handleAddCart(data.id, { ...data, quantity })}
                  >
                    Add To Cart
                  </button>
                </div>
                <div>
                  <span className="flex items-center justify-between">
                    <p>SKU</p>
                    <p>{data.sku || "N/A"}</p>
                  </span>
                  <span className="flex items-center justify-between">
                    <p>Category</p>
                    <p>{data.category || "N/A"}</p>
                  </span>
                </div>
                <div className="my-8">
                  <p className="text-[22px]">Additional Info</p>
                  <div className="my-2">
                    <p className="font-semibold">Details</p>
                    <p>{data?.additional_info?.details || "No additional details"}</p>
                  </div>
                  <div className="my-2">
                    <p className="font-semibold">Packaging</p>
                    <p>{data?.additional_info?.packaging || "No packaging information"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Product />
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default ProductDetailsLayout;
