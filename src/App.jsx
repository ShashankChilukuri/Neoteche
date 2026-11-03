import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NeotecheLanding from "./NeotecheLanding.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NeotecheLanding />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
