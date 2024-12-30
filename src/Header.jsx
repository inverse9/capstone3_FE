/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Header = ({ puraRef, homeRef, aboutRef }) => {
  const IMAGE_URL = "http://localhost:3000/uploads";
  const scrollToPanduan = () =>
    puraRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const scrollToAbout = () =>
    homeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const scrollToHome = () =>
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    <div
      style={{
        backgroundImage: `url(${IMAGE_URL}/home.jpg)`,
      }}
      className="h-[600px] bg-center bg-cover bg-no-repeat"
    >
      <header
        className={`flex justify-between fixed right-[250px] left-[250px] top-0 p-4 transition-colors duration-300 ease-in-out ${
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
  );
};

export default Header;
