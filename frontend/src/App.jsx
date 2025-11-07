import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProjectDetails from "./pages/ProjectDetails";
import F360Store from "./pages/F360Store";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import AICostEstimator from "./pages/AICostEstimator";
import ProjectTracker from "./pages/ProjectTracker";
import MobileTabBar from "./components/MobileTabBar";
import ContractorPanel from "./pages/ContractorPanel";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/store" element={<F360Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cost-estimator" element={<AICostEstimator />} />
        <Route path="/project-tracker" element={<ProjectTracker />} />
        <Route path="/contractor" element={<ContractorPanel />} />

      </Routes>
      <MobileTabBar />

    </Router>
  );
}

export default App;
