import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import About from "./pages/About.jsx";

function App() {
  const pura = useRef(null);
  const about = useRef(null);
  const home = useRef(null);
  const navigate = useNavigate();
  const scrollToPanduan = () =>
    pura.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const scrollToAbout = () =>
    about.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const scrollToHome = () =>
    home.current.scrollIntoView({ behavior: "smooth", block: "start" });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll position:", window.scrollY);

      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={home} className="">
      <div
        style={{
          backgroundImage:
            "url(https://www.rentalmobilbali.net/wp-content/uploads/2012/02/Pura-Ulun-Danu-Danau-Bedugul.jpg)",
        }}
        className="h-[600px] bg-center bg-cover bg-no-repeat"
      >
        <header
          className={`flex justify-between fixed right-0 left-0 top-0 p-4 transition-colors duration-300 ease-in-out ${
            isScrolled ? "bg-black/50" : "bg-transparent"
          }  `}
        >
          <div className="bg-slate-300 w-32 h-20">logo</div>
          <nav className="flex gap-20 text-[#FFD400] font-semibold items-center px-8">
            <div className="cursor-pointer" onClick={() => scrollToHome()}>
              Home
            </div>
            <div className="cursor-pointer" onClick={() => scrollToAbout()}>
              About Us
            </div>
            <div className="cursor-pointer" onClick={() => scrollToPanduan()}>
              Panduan
            </div>
          </nav>
        </header>
      </div>
      <About about={about} />
      <section ref={pura} id="panduan" className="mt-10">
        <h1 className="text-2xl text-center mb-6">
          Panduan Mengunjungi Pura di Bali
        </h1>
        <div className="grid grid-cols-3 gap-4 ">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col items-center justify-center ">
              <div
                onClick={() => navigate(`/panduan/${i}`)}
                className="size-56 bg-slate-200 cursor-pointer"
              ></div>
              <span className="font-bold capitalize">pura agung besakih</span>
              <span>Denpasar, Bali</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-6">
          <button
            onClick={() => navigate("/panduan")}
            className="rounded-xl font-semibold bg-[#FFD400] px-4 py-2 "
          >
            Tampilkan Lebih Banyak >
          </button>
        </div>
      </section>
      <footer className="h-12 bg-[#FFF0A4] flex items-center justify-center">
        Copyright © 2024 Bali Paradise
      </footer>
    </div>
  );
}

export default App;
