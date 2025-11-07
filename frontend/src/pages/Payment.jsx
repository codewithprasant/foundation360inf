import Navbar from "../components/Navbar";
import { useState } from "react";

function Payment() {
  const [method, setMethod] = useState("wallet"); // user ka selected payment method
  const totalAmount = 72400; // abhi ke liye dummy total price

  return (
   <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-blue-700 text-white pb-20">

      <Navbar />

      {/* Title */}
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-blue-400 mb-2">💳 Payment Gateway</h1>
        <p className="text-gray-300">Choose your preferred payment method</p>
      </div>

      {/* Buttons for Wallet / UPI / Card */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => setMethod("wallet")}
          className={`px-5 py-2 rounded-md font-medium ${
            method === "wallet"
              ? "bg-blue-600"
              : "bg-black/50 border border-blue-500 hover:bg-blue-600"
          }`}
        >
          💰 Wallet
        </button>
        <button
          onClick={() => setMethod("upi")}
          className={`px-5 py-2 rounded-md font-medium ${
            method === "upi"
              ? "bg-blue-600"
              : "bg-black/50 border border-blue-500 hover:bg-blue-600"
          }`}
        >
          📱 UPI
        </button>
        <button
          onClick={() => setMethod("card")}
          className={`px-5 py-2 rounded-md font-medium ${
            method === "card"
              ? "bg-blue-600"
              : "bg-black/50 border border-blue-500 hover:bg-blue-600"
          }`}
        >
          💳 Card
        </button>
      </div>

      {/* Payment form area */}
      <div className="max-w-lg mx-auto bg-black/60 mt-10 p-8 rounded-xl border border-blue-500 shadow-lg">
        {method === "wallet" && (
          <div>
            <h2 className="text-2xl text-blue-300 font-semibold mb-4">💰 Pay with Wallet</h2>
            <p className="text-gray-300 mb-4">Wallet Balance: ₹1,00,000</p>
            <button className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-md font-semibold text-white">
              Pay ₹{totalAmount.toLocaleString()}
            </button>
          </div>
        )}

        {method === "upi" && (
          <div>
            <h2 className="text-2xl text-blue-300 font-semibold mb-4">📱 Pay using UPI</h2>
            <input
              type="text"
              placeholder="Enter your UPI ID (e.g., name@upi)"
              className="w-full p-3 rounded-md bg-white/10 text-white border border-blue-500 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-md font-semibold text-white">
              Pay ₹{totalAmount.toLocaleString()}
            </button>
          </div>
        )}

        {method === "card" && (
          <div>
            <h2 className="text-2xl text-blue-300 font-semibold mb-4">💳 Pay via Debit/Credit Card</h2>
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-3 rounded-md bg-white/10 text-white border border-blue-500 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="flex space-x-3 mb-3">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 p-3 rounded-md bg-white/10 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 p-3 rounded-md bg-white/10 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full p-3 rounded-md bg-white/10 text-white border border-blue-500 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-md font-semibold text-white">
              Pay ₹{totalAmount.toLocaleString()}
            </button>
          </div>
        )}
      </div>

      <div className="text-center text-gray-400 text-sm mt-8 mb-4">
        🔒 Secure Payment | Foundation360 Infratech
      </div>
    </div>
  );
}

export default Payment;
