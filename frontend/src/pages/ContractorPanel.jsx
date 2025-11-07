import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Navbar from "../components/Navbar";
import { db } from "../lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";




function ContractorPanel() {
  const [labours, setLabours] = useState([
    {
      id: 1,
      name: "Ramesh Yadav",
      role: "Mason",
      daysWorked: 24,
      ratePerDay: 500,
      status: "Paid",
    },
    {
      id: 2,
      name: "Suresh Das",
      role: "Electrician",
      daysWorked: 18,
      ratePerDay: 600,
      status: "Pending",
    },
  ]);

  const [newLabour, setNewLabour] = useState({
    name: "",
    role: "",
    daysWorked: "",
    ratePerDay: "",
    status: "Pending",
  });

  // ✅ Add New Labour
  const addLabour = async () => {
  if (
    !newLabour.name ||
    !newLabour.role ||
    !newLabour.daysWorked ||
    !newLabour.ratePerDay
  ) {
    alert("Please fill all fields!");
    return;
  }

  const total = newLabour.daysWorked * newLabour.ratePerDay;

  const newEntry = {
    name: newLabour.name,
    role: newLabour.role,
    daysWorked: Number(newLabour.daysWorked),
    ratePerDay: Number(newLabour.ratePerDay),
    total,
    status: "Pending",
  };

  try {
    await addDoc(collection(db, "labours"), newEntry);
    alert("✅ Labour added successfully!");
    setLabours([...labours, newEntry]);
    setNewLabour({
      name: "",
      role: "",
      daysWorked: "",
      ratePerDay: "",
      status: "Pending",
    });
  } catch (error) {
    console.error("Error adding labour:", error);
    alert("❌ Failed to add labour");
  }
};



  // ✅ Delete Labour
  const deleteLabour = (id) => {
    setLabours(labours.filter((l) => l.id !== id));
  };

  // ✅ Generate Payroll PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Foundation360 - Labour Payroll Summary", 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [["Name", "Work Type", "Days Worked", "Rate/Day (₹)", "Total (₹)", "Status"]],
      body: labours.map((l) => [
        l.name,
        l.role,
        l.daysWorked,
        l.ratePerDay,
        l.daysWorked * l.ratePerDay,
        l.status,
      ]),
      styles: { fontSize: 11, halign: "center" },
      headStyles: { fillColor: [0, 102, 255] },
    });

    doc.save("Labour_Payroll.pdf");
  };
  useEffect(() => {
  async function testFirebase() {
    const snapshot = await getDocs(collection(db, "test"));
    console.log("Connected to Firebase ✅", snapshot.size, "documents found");
  }
  testFirebase();
}, []);


  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-blue-700 text-white">
      <Navbar />

      {/* Header */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-blue-400 mb-2">
          👷‍♂️ Labour Management Dashboard
        </h1>
        <p className="text-gray-300 mb-6">
          Manage daily wage labours, their work, and payments
        </p>
      </div>

      {/* Add Labour Form */}
      <div className="max-w-4xl mx-auto bg-black/50 p-6 rounded-xl border border-blue-600 mb-10">
        <h2 className="text-2xl mb-4 font-semibold text-blue-300 text-center">
          ➕ Add New Labour
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <input
            type="text"
            placeholder="Name"
            className="p-2 rounded bg-gray-900 text-white"
            value={newLabour.name}
            onChange={(e) =>
              setNewLabour({ ...newLabour, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Work Type"
            className="p-2 rounded bg-gray-900 text-white"
            value={newLabour.role}
            onChange={(e) =>
              setNewLabour({ ...newLabour, role: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Days"
            className="p-2 rounded bg-gray-900 text-white"
            value={newLabour.daysWorked}
            onChange={(e) =>
              setNewLabour({ ...newLabour, daysWorked: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Rate/Day"
            className="p-2 rounded bg-gray-900 text-white"
            value={newLabour.ratePerDay}
            onChange={(e) =>
              setNewLabour({ ...newLabour, ratePerDay: e.target.value })
            }
          />
          <button
            onClick={addLabour}
            className="bg-green-600 hover:bg-green-700 rounded-lg px-4 py-2 font-semibold"
          >
            Add
          </button>
        </div>
      </div>

      {/* Labour Table */}
      <div className="overflow-x-auto p-10">
        <table className="w-full text-center border border-blue-600 rounded-lg bg-black/60 backdrop-blur-lg">
          <thead className="bg-blue-800/80">
            <tr>
              <th className="p-3 border border-blue-600">Name</th>
              <th className="p-3 border border-blue-600">Work Type</th>
              <th className="p-3 border border-blue-600">Days Worked</th>
              <th className="p-3 border border-blue-600">Rate/Day (₹)</th>
              <th className="p-3 border border-blue-600">Total (₹)</th>
              <th className="p-3 border border-blue-600">Status</th>
              <th className="p-3 border border-blue-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {labours.map((l) => (
              <tr key={l.id} className="hover:bg-blue-900/40 transition duration-200">
                <td className="p-3 border border-blue-600">{l.name}</td>
                <td className="p-3 border border-blue-600">{l.role}</td>
                <td className="p-3 border border-blue-600">{l.daysWorked}</td>
                <td className="p-3 border border-blue-600">{l.ratePerDay}</td>
                <td className="p-3 border border-blue-600 font-semibold text-green-400">
                  ₹{l.daysWorked * l.ratePerDay}
                </td>
                <td className="p-3 border border-blue-600">
                  {l.status === "Paid" ? (
                    <span className="text-green-400 font-semibold">Paid</span>
                  ) : (
                    <span className="text-yellow-400 font-semibold">Pending</span>
                  )}
                </td>
                <td className="p-3 border border-blue-600">
                  <button
                    onClick={() => deleteLabour(l.id)}
                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-white font-medium"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PDF Button */}
      <div className="text-center mb-10">
        <button
          onClick={generatePDF}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-semibold transition"
        >
          💾 Download Labour Payroll PDF
        </button>
      </div>
    </div>
  );
}

export default ContractorPanel;
