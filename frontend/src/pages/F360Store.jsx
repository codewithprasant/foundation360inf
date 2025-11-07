import Navbar from "../components/Navbar";
import { useState } from "react";

function F360Store() {
  const [search, setSearch] = useState("");

  const materials = [
    {
      id: 1,
      name: "UltraTech Cement",
      price: 380,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/3/NG/NE/EG/115160164/ultratech-cement-500x500.jpeg",
    },
    {
      id: 2,
      name: "TATA TMT Steel Bar",
      price: 72000,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/2/YV/OM/OT/103666372/tata-tmt-bars-500x500.jpg",
    },
    {
      id: 3,
      name: "Red Clay Bricks",
      price: 9,
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2021/4/HI/YB/KC/122591279/product-jpeg-500x500.jpg",
    },
    {
      id: 4,
      name: "Asian Paints - 1 Litre",
      price: 450,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/1/ZU/DS/HR/42071081/asian-paints-royale-luxury-emulsion-500x500.jpg",
    },
  ];

  const filteredMaterials = materials.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
   <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-blue-700 text-white pb-20">

      <Navbar />

      {/* Header */}
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-blue-400 mb-2">🏗️ F360 Material Store</h1>
        <p className="text-gray-300">Compare and order top quality construction materials</p>
      </div>

      {/* Search Box */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search materials..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 w-[80%] max-w-lg rounded-md bg-white/10 text-white placeholder-gray-400 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Material Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
        {filteredMaterials.map((item) => (
          <div
            key={item.id}
            className="bg-black/60 border border-blue-500 rounded-xl shadow-lg hover:shadow-blue-400 transition transform hover:-translate-y-1 p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-blue-300 mb-2">{item.name}</h2>
            <p className="text-gray-300 mb-3">Price: ₹{item.price.toLocaleString()}</p>
            <div className="flex justify-between">
              <button className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md text-white font-medium transition">
                Add to Cart
              </button>
              <button className="bg-green-600 hover:bg-green-700 px-3 py-2 rounded-md text-white font-medium transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default F360Store;
