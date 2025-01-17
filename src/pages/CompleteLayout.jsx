import React from "react";

const CompleteLayout = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center w-[600px]">
        <p className="text-[40px] mb-4">Check Out</p>

        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col items-center">
            <p className="p-2 px-4 rounded-2xl bg-gray-300 text-black">1</p>
            <p>Shopping cart</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="p-2  px-4 rounded-2xl bg-black text-white">2</p>
            <p>Checkout details</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="p-2  px-4 rounded-2xl bg-gray-300 text-black">3</p>
            <p>Order complete</p>
          </div>
        </div>
      </div>
      <div className="px-20 py-10 shadow-lg m-10 w-[600px]">
        <div className="text-center flex items-center justify-between flex-col">
          <p className="text-[28px]">Thank You 🎉</p>
          <p className="text-[40px]">Your order has been received</p>

          <div>
            <img src="Item.png" alt="" />
          </div>

          <table className="my-8 text-start">
            <tbody>
              <tr>
                <td className="pr-4">Order code:</td>{" "}
                <td>#0123_45678</td>
              </tr>
              <tr>
                <td className="pr-8">Date:</td>
                <td>October 19, 2023</td>
              </tr>
              <tr>
                <td className="pr-8">Total:</td>
                <td>#0123_45678</td>
              </tr>
              <tr>
                <td className="pr-8">Order code:</td>
                <td>$1,345.00</td>
              </tr>
              <tr>
                <td className="pr-8">Payment method:</td>
                <td>Credit Card</td>
              </tr>
            </tbody>
          </table>

          <button className="bg-black text-white p-2 rounded-md">
            Purchase history
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompleteLayout;
