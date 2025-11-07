import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      name: "Dream Villa Construction",
      progress: 75,
      estimatedCost: 1500000,
      actualCost: 1200000,
      status: "In Progress",
    },
    {
      id: 2,
      name: "Office Renovation",
      progress: 45,
      estimatedCost: 800000,
      actualCost: 500000,
      status: "In Progress",
    },
    {
      id: 3,
      name: "Bideipur House Extension",
      progress: 100,
      estimatedCost: 950000,
      actualCost: 960000,
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-blue-700 text-white pb-20">
      <Navbar />

      {/* Header */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-blue-400 mb-2">📊 My Projects</h1>
        <p className="text-gray-300">
          Track the progress and expenses of your construction projects
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-black/60 rounded-xl p-6 shadow-lg border border-blue-600 hover:shadow-blue-400 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2 text-blue-400">
              {project.name}
            </h2>
            <p className="text-sm text-gray-300 mb-2">
              Status: <span className="text-blue-300">{project.status}</span>
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-800 rounded-full h-3 mb-3">
              <div
                className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Progress:{" "}
              <span className="text-white font-semibold">
                {project.progress}%
              </span>
            </p>

            <p className="text-gray-400 text-sm mb-2">
              Estimated Cost: ₹{project.estimatedCost.toLocaleString()}
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Actual Cost: ₹{project.actualCost.toLocaleString()}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => navigate("/project-details")}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white font-medium transition"
              >
                View Details
              </button>

              <button
                onClick={() => navigate("/project-tracker")}
                className="bg-blue-500/70 hover:bg-blue-600 px-4 py-2 rounded-md text-white font-medium transition"
              >
                Track Progress
              </button>

              <button
                onClick={() => navigate("/contractor")}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white font-semibold transition"
              >
                👷 Contractor Panel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
