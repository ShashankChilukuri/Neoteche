import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NeotecheLanding from "./NeotecheLanding.jsx";
import BlogPost from "./components/BlogPost.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NeotecheLanding />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        {/* We can add more routes here for individual blog posts if needed later */}
      </Routes>
    </Router>
  );
}

export default App;
