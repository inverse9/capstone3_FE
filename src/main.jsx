import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Panduan from "./pages/Panduan.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <div className="bg-[#FFF8D4]">
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/panduan/:id" element={<Panduan />} />
          <Route path="/panduan" element={<Panduan />} />
        </Routes>
      </div>
    </Router>
  </StrictMode>
);
