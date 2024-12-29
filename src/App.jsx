import React from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="h-screen">
      <header className="flex justify-between sticky top-0 p-4">
        <div className="bg-slate-300 w-32 h-20">logo</div>
        <nav className="flex gap-20 text-yellow-400 font-semibold items-center px-8">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            Home
          </div>
          <div className="cursor-pointer" onClick={() => navigate("/about")}>
            About Us
          </div>
          <div className="cursor-pointer" onClick={() => navigate("/panduan")}>
            Panduan
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
