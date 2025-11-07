import Navbar from "../components/Navbar";
import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function AICostEstimator() {
  const [area, setArea] = useState("");
  const [type, setType] = useState("standard");
  const [city, setCity] = useState("");
  const [estimatedCost, setEstimatedCost] = useState(null);

  const handleEstimate = () => {
    if (!area || !city) {
      alert("Please enter area and city first!");
      return;
    }

    const baseRates = { standard: 1500, premium: 2000, luxury: 2500 };
    const cityFactor = {
      bhubaneswar: 1.0,
      cuttack: 0.95,
      kolkata: 1.1,
      delhi: 1.25,
      mumbai: 1.3,
      default: 1.0,
    };

    const rate = baseRates[type] * (cityFactor[city.toLowerCase()] || cityFactor.default);
    const total = rate * parseFloat(area);

    const breakdown = {
      materials: total * 0.6,
      labor: total * 0.25,
      other: total * 0.15,
    };

    setEstimatedCost({
      total,
      rate,
      breakdown,
    });
  };

  return (
   <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-blue-700 text-white pb-20">

      <Navbar />

      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-blue-400 mb-2">🤖 AI Cost Estimator</h1>
        <p className="text-gray-300">
          Estimate your home construction cost instantly with AI-powered insights.
        </p>
      </div>

      {/* Input Form */}
      <div className="max-w-xl mx-auto bg-black/60 p-8 rounded-xl border border-blue-500 mt-10">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">🏠 Built-up Area (sqft)</label>
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="Enter total area in sqft"
            className="w-full p-3 rounded-md bg-white/10 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">🏗️ Construction Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-3 rounded-md bg-white/10 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="standard">Standard (₹1500/sqft)</option>
            <option value="premium">Premium (₹2000/sqft)</option>
            <option value="luxury">Luxury (₹2500/sqft)</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">📍 City / Location</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city name"
            className="w-full p-3 rounded-md bg-white/10 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          onClick={handleEstimate}
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-md text-white font-semibold transition"
        >
          Estimate Cost
        </button>
      </div>

      {/* Result Display */}
      {estimatedCost && (
        <div className="max-w-3xl mx-auto bg-black/70 p-8 rounded-xl border border-green-500 mt-10 mb-10 text-center">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Estimated Cost: ₹{estimatedCost.total.toLocaleString()}
          </h2>
          <p className="text-gray-300 mb-2">
            Cost per sqft: ₹{estimatedCost.rate.toLocaleString()}
          </p>

          {/* Breakdown */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Pie Chart */}
            <div className="bg-blue-950/40 p-4 rounded-xl">
              <Pie
                data={{
                  labels: ["Materials", "Labor", "Other Expenses"],
                  datasets: [
                    {
                      data: [
                        estimatedCost.breakdown.materials,
                        estimatedCost.breakdown.labor,
                        estimatedCost.breakdown.other,
                      ],
                      backgroundColor: ["#3b82f6", "#10b981", "#facc15"],
                      borderColor: "#000",
                      borderWidth: 2,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      labels: {
                        color: "#fff",
                        font: { size: 14 },
                      },
                    },
                  },
                }}
              />
            </div>

            {/* Text Breakdown */}
            <div className="text-left">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">Breakdown:</h3>
              <ul className="text-gray-300 space-y-2">
                <li>🧱 Materials: ₹{estimatedCost.breakdown.materials.toLocaleString()}</li>
                <li>👷‍♂️ Labor: ₹{estimatedCost.breakdown.labor.toLocaleString()}</li>
                <li>🧾 Other Expenses: ₹{estimatedCost.breakdown.other.toLocaleString()}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AICostEstimator;
