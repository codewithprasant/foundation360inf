import { useState } from "react";
import { Link } from "react-router-dom";   // ✅ ye line add karni zaruri hai

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">Foundation360</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-white hover:text-blue-500 transition duration-200">Home</Link>
        <Link to="/about" className="text-white hover:text-blue-500 transition duration-200">About</Link>
        <Link to="/login" className="text-white hover:text-blue-500 transition duration-200">Login</Link>
        <Link to="/cart" className="text-white hover:text-blue-500 transition duration-200">Cart</Link>
        <Link to="/store" className="text-white hover:text-blue-500 transition duration-200">Store</Link>
        <Link to="/cost-estimator" className="text-white hover:text-blue-500 transition duration-200">Cost Estimator</Link>


         </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-4 py-4 md:hidden border-t border-blue-500">
          <Link to="/" className="text-white hover:text-blue-500 transition duration-200">Home</Link>
          <Link to="/about" className="text-white hover:text-blue-500 transition duration-200">About</Link>
          <Link to="/login" className="text-white hover:text-blue-500 transition duration-200">Login</Link>
          <Link to="/cart" className="text-white hover:text-blue-500 transition duration-200">Cart</Link>
          <Link to="/store" className="text-white hover:text-blue-500 transition duration-200">Store</Link>
          <Link to="/cost-estimator" className="text-white hover:text-blue-500 transition duration-200">Cost Estimator</Link>
  

        </div>
      )}
    </nav>
  );
}

export default Navbar;
