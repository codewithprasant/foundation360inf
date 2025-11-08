import Navbar from "../components/Navbar";
import { useState } from "react";

function ProjectTracker() {
  // Stage-wise data (demo)
  const initialStages = [
    { id: 1, name: "Planning & Approval", date: "Jan 10, 2025", status: "done" },
    { id: 2, name: "Foundation",        date: "Mar 02, 2025", status: "done" },
    { id: 3, name: "Structure",         date: "Aug 15, 2025", status: "current" },
    { id: 4, name: "Finishing",         date: "—",            status: "pending" },
    { id: 5, name: "Handover",          date: "—",            status: "pending" },
  ];

  const [stages, setStages] = useState(initialStages);
  const [progress, setProgress] = useState(62); // overall %

  const nextStage = () => {
    // mark current → done, and next pending → current
    const idx = stages.findIndex(s => s.status === "current");
    const updated = stages.map((s, i) => {
      if (i === idx) return { ...s, status: "done", date: s.date === "—" ? new Date().toDateString() : s.date };
      if (i === idx + 1) return { ...s, status: "current", date: s.date === "—" ? new Date().toDateString() : s.date };
      return s;
    });
    setStages(updated);
    setProgress(p => Math.min(100, p + 10));
  };

  const addProgress = (delta) => {
    setProgress(p => Math.min(100, Math.max(0, p + delta)));
  };

  // helpers
  const colorFor = (status) => {
    if (status === "done") return "bg-green-500 border-green-400";
    if (status === "current") return "bg-blue-500 border-blue-400 animate-pulse";
    return "bg-gray-600 border-gray-500";
  };
  const lineFor = (leftStatus, rightStatus) => {
    const active = leftStatus === "done" || rightStatus === "done";
    return active ? "bg-green-500" : "bg-gray-700";
  };

 return (
  <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-black via-blue-900 to-blue-700 text-white pb-2">


      <Navbar />

      {/* Header */}
      <div className="px-6 mt-8 text-center">
        <h1 className="text-4xl font-extrabold text-blue-400">🏗️ Project Progress Tracker</h1>
        <p className="text-gray-300 mt-2">
          Stage timeline, live percentage, and important milestones
        </p>
      </div>

      {/* Overall Progress */}
      <div className="mx-6 md:mx-20 mt-8 bg-black/60 border border-blue-500 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-semibold text-blue-300">Overall Progress</h2>
          <span className="text-2xl font-bold">{progress}%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
          <div
            className="h-3 bg-blue-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <button
            onClick={() => addProgress(5)}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
          >
            +5%
          </button>
          <button
            onClick={() => addProgress(-5)}
            className="bg-blue-600/70 hover:bg-blue-700 px-4 py-2 rounded-md"
          >
            -5%
          </button>
          <button
            onClick={nextStage}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md"
          >
            Mark Next Stage ✔
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div className="mx-6 md:mx-20 mt-10 bg-black/60 border border-blue-500 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-blue-300 mb-6">📅 Timeline</h2>

       <div className="flex flex-wrap justify-between items-center gap-6 w-full overflow-hidden">
          {stages.map((s, i) => (
            <div key={s.id} className="flex items-center md:flex-1">
              {/* Dot */}
             <div className="flex flex-col items-center text-center min-w-[120px] flex-shrink-0">
                <div className={`w-6 h-6 rounded-full border-2 ${colorFor(s.status)}`} />
                <span className="text-xs text-gray-300 mt-2 text-center w-28">{s.date}</span>
              </div>

              {/* Label */}
              <div className="ml-3">
                <div className="font-semibold">{s.name}</div>
                <div className="text-xs text-gray-300 capitalize">{s.status}</div>
              </div>

              {/* Connector */}
              {i < stages.length - 1 && (
                <div className={`hidden md:block h-1 flex-1 mx-4 rounded ${lineFor(s.status, stages[i + 1].status)}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="mx-6 md:mx-20 mt-10 mb-12 grid md:grid-cols-3 gap-6">
        <div className="bg-black/60 border border-blue-500 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-blue-300 mb-2">Safety & Quality</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>✅ Site fencing & PPE compliance</li>
            <li>✅ Concrete testing (slump/cube)</li>
            <li>✅ Structural inspection log</li>
          </ul>
        </div>
        <div className="bg-black/60 border border-blue-500 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-blue-300 mb-2">Materials</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>🧱 Cement & steel delivery verified</li>
            <li>📦 Stock register updated</li>
            <li>🔧 Vendor bill cross-checked</li>
          </ul>
        </div>
        <div className="bg-black/60 border border-blue-500 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-blue-300 mb-2">Next Actions</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>📝 Client site visit scheduling</li>
            <li>📐 Plumbing & wiring layout check</li>
            <li>🎨 Finishing material shortlist</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectTracker;
