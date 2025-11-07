import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function ProjectDetails() {
  const navigate = useNavigate();

  const project = {
    name: "Dream Villa Construction",
    startDate: "Jan 2024",
    endDate: "Nov 2025 (Expected)",
    status: "In Progress",
    estimatedCost: 1500000,
    actualCost: 1200000,
    progress: 75,
    photos: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      "https://images.unsplash.com/photo-1581091215367-59ab6b80e3a0",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    ],
  };

  const data = [
    { name: "Estimated", cost: project.estimatedCost / 100000 },
    { name: "Actual", cost: project.actualCost / 100000 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-blue-700 text-white">
      <Navbar />

      {/* Header */}
      <div className="flex justify-between items-center px-6 mt-6">
        <h1 className="text-3xl font-bold text-blue-400">{project.name}</h1>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Timeline */}
      <div className="p-6">
        <h2 className="text-2xl text-blue-300 font-semibold mb-4">📅 Project Timeline</h2>
        <div className="flex flex-col md:flex-row justify-between bg-black/50 rounded-lg p-4 border border-blue-500">
          <p>🟢 <span className="font-bold text-blue-300">Start:</span> {project.startDate}</p>
          <p>🔵 <span className="font-bold text-blue-300">Status:</span> {project.status}</p>
          <p>⚫ <span className="font-bold text-blue-300">End:</span> {project.endDate}</p>
        </div>
      </div>

      {/* Photos */}
      <div className="p-6">
        <h2 className="text-2xl text-blue-300 font-semibold mb-4">📸 Project Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.photos.map((url, i) => (
            <img
              key={i}
              src={url}
              alt="Project progress"
              className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      {/* Cost Graph */}
      <div className="p-6">
        <h2 className="text-2xl text-blue-300 font-semibold mb-4">💰 Cost Comparison</h2>
        <div className="bg-black/50 p-4 rounded-lg border border-blue-500">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="cost" fill="#3b82f6" barSize={60} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-gray-300 text-center mt-2 text-sm">
            (Cost shown in Lakhs ₹)
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
