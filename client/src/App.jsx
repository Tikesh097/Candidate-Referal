import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReferralForm from "./components/ReferralForm";
import Dashboard from "./components/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Candidate Referral System</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/refer" element={<ReferralForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;