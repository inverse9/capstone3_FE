import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Panduan from "./pages/Panduan.jsx";
import Home from "./pages/Home/App.jsx";
import Pura from "./pages/Pura.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <div className="bg-[#FFF8D4]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pura/:id" element={<Pura />} />
          <Route path="/panduan" element={<Panduan />} />
        </Routes>
      </div>
    </Router>
  </StrictMode>
);
