import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  // Sample items (temporary data, later connect with store)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "UltraTech Cement", price: 380, quantity: 2 },
    { id: 2, name: "TATA TMT Steel Bar", price: 72000, quantity: 1 },
  ]);

  // Calculate total
  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Handle quantity changes
  const handleQuantityChange = (id, amount) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + amount) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
   <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-blue-700 text-white pb-20">

      <Navbar />

      {/* Header */}
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-blue-400 mb-2">🛒 My Cart</h1>
        <p className="text-gray-300">
          Review your selected items and proceed to payment
        </p>
      </div>

      {/* Cart Items Section */}
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-300 col-span-2">
            Your cart is empty 😔
          </p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-black/60 p-6 rounded-xl border border-blue-500 shadow-md hover:shadow-blue-400 transition"
            >
              <h2 className="text-xl font-semibold text-blue-300 mb-2">
                {item.name}
              </h2>
              <p className="text-gray-300 mb-3">Price: ₹{item.price}</p>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white"
                  >
                    +
                  </button>
                </div>
                <p className="text-gray-300 font-medium">
                  Total: ₹{item.price * item.quantity}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Payment Summary Section */}
      {cartItems.length > 0 && (
        <div className="p-6 bg-black/60 mx-6 md:mx-20 rounded-xl border border-blue-500 text-center">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            💳 Payment Summary
          </h2>
          <p className="text-lg mb-4">
            Total Amount:{" "}
            <span className="text-blue-300 font-semibold">
              ₹{getTotal().toLocaleString()}
            </span>
          </p>
          <button
            onClick={() => navigate("/payment")}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-medium text-lg transition"
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
