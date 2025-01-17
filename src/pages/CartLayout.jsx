import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartCounterContext } from "../common/Context/CartContext";

const Cart = () => {
  const {cartItems} = useContext(CartCounterContext)

  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen z-20">
        <div className="flex flex-col items-center w-[600px]">
          <p className="text-[40px] mb-4">Cart</p>

          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-center">
              <p className="p-2 px-4 rounded-2xl bg-black text-white">1</p>
              <p>Shopping cart</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="p-2  px-4 rounded-2xl bg-gray-300 text-black">2</p>
              <p>Checkout details</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="p-2  px-4 rounded-2xl bg-gray-300 text-black">3</p>
              <p>Order complete</p>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-10 justify-between py-10">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="border-b border-black">
                  <th className="px-6 py-4 text-left">Product</th>
                  <th className="px-6 py-4 text-left">Quantity</th>
                  <th className="px-6 py-4 text-left">Price</th>
                  <th className="px-6 py-4 text-left">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.img}
                          alt="Product"
                          className="h-[80px] w-[96px]"
                        />
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-gray-500">Color: {item.color}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center border rounded">
                        <button className="px-2">+</button>
                        <p className="px-4">{item.quantity}</p>
                        <button className="px-2">-</button>
                      </div>
                    </td>
                    <td className="px-6 py-4">${item.price}</td>
                    <td className="px-6 py-4">${item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border rounded-md border-black p-6 w-[350px]">
            <div className="">
              <p className="text-[20px]">Cart summary</p>
              <div className="flex items-center justify-between border border-gray-500 rounded-md p-2 my-2">
                <div className="flex items-center justify-between gap-2">
                  <input type="radio" />
                  <p>Free Shipping</p>
                </div>
                <p>$0.00</p>
              </div>
              <div className="flex items-center justify-between border border-gray-500 rounded-md p-2 my-2">
                <div className="gap-2 flex items-center justify-between">
                  <input type="radio" />
                  <p>Free Shipping</p>
                </div>
                <p>$0.00</p>
              </div>
              <div className="flex items-center justify-between border border-gray-500 rounded-md p-2 my-2">
                <div className="gap-2 flex items-center justify-between">
                  <input type="radio" />
                  <p>Free Shipping</p>
                </div>
                <p>$0.00</p>
              </div>
              <div className="gap-2 flex items-center justify-between border-b p-2 my-2">
                <p>Subtotal</p>
                <p>$1234</p>
              </div>
              <div className="gap-2 flex items-center justify-between p-2 my-2">
                <p className="font-semibold">Total</p>
                <p>$1234</p>
              </div>
              <button className="text-center bg-black text-white w-full p-2 rounded-md">Checkout</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
