import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div
        style={{
          backgroundImage:
            "url(https://www.rentalmobilbali.net/wp-content/uploads/2012/02/Pura-Ulun-Danu-Danau-Bedugul.jpg)",
        }}
        className="h-[600px] bg-center bg-cover bg-no-repeat"
      >
        <header className="flex justify-between sticky top-0 p-4">
          <div className="bg-slate-300 w-32 h-20">logo</div>
          <nav className="flex gap-20 text-yellow-400 font-semibold items-center px-8">
            <div className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </div>
            <div className="cursor-pointer" onClick={() => navigate("/about")}>
              About Us
            </div>
            <div
              className="cursor-pointer"
              onClick={() => navigate("/panduan")}
            >
              Panduan
            </div>
          </nav>
        </header>
      </div>
      <section className=" ">
        <section className="  px-20">
          <h1 className="text-2xl text-center py-4">About Us</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          officiis eum quod voluptate, commodi consequuntur nobis, assumenda
          magni rerum nemo, consectetur tempora beatae voluptatum debitis totam
          unde sequi illo explicabo!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eaque officiis eum quod voluptate, commodi
          consequuntur nobis, assumenda magni rerum nemo, consectetur tempora
          beatae voluptatum debitis totam unde sequi illo explicabo!Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Eaque officiis eum quod
          voluptate, commodi consequuntur nobis, assumenda magni rerum nemo,
          consectetur tempora beatae voluptatum debitis totam unde sequi illo
          explicabo!Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eaque officiis eum quod voluptate, commodi consequuntur nobis,
          assumenda magni rerum nemo, consectetur tempora beatae voluptatum
          debitis totam unde sequi illo explicabo!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eaque officiis eum quod voluptate,
          commodi consequuntur nobis, assumenda magni rerum nemo, consectetur
          tempora beatae voluptatum debitis totam unde sequi illo
          explicabo!Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eaque officiis eum quod voluptate, commodi consequuntur nobis,
          assumenda magni rerum nemo, consectetur tempora beatae voluptatum
          debitis totam unde sequi illo explicabo!
        </section>

        <section className="">
          <h1 className="text-2xl text-center py-4">TITLE</h1>
          <div className="grid grid-cols-3 gap-4 ">
            {[...Array(3)].map((_, i) => (
              <div
                onClick={() => navigate(`/panduan/${i}`)}
                key={i}
                className="flex flex-col items-center justify-center"
              >
                <div className="size-56 bg-slate-200"></div>
                <span className="font-bold capitalize">pura agung besakih</span>
                <span>Denpasar, Bali</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center my-6">
            <button
              onClick={() => navigate("/panduan")}
              className="rounded-xl font-semibold bg-yellow-400 px-4 py-2 "
            >
              Tampilkan Lebih Banyak >
            </button>
          </div>
        </section>
      </section>
      <footer className="h-12 bg-yellow-300 flex items-center justify-center">
        Copyright 2024 Bali Paradise
      </footer>
    </div>
  );
};

export default About;
