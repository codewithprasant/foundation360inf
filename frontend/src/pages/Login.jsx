import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // ✅ important


 const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("⚠️ Please enter both email and password.");
      return;
    }

    if (email === "test@f360.com" && password === "123456") {
      setSuccess("✅ Login successful!");
      setTimeout(() => navigate("/dashboard"), 1500); // ✅ redirect here
    } else {
      setError("❌ Invalid email or password.");
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-blue-700 text-white">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-[80vh] text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Login to Foundation360</h1>
        <form
          onSubmit={handleLogin}
          className="bg-black/60 p-8 rounded-2xl shadow-lg w-[90%] max-w-md"
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 rounded-md bg-white/10 text-white placeholder-gray-300 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-3 rounded-md bg-white/10 text-white placeholder-gray-300 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-400 mb-4">{error}</p>}
          {success && <p className="text-green-400 mb-4">{success}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
