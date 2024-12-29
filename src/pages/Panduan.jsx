import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Panduan = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  if (id)
    return (
      <div>
        <header className="flex justify-between p-4">
          <div className="bg-slate-300 w-32 h-20">logo</div>
          <nav className="flex gap-20 font-semibold px-8">
            <div onClick={() => navigate("/panduan")}>
              <button className="rounded-xl bg-yellow-400 px-4 py-2 ">
                Kembali
              </button>
            </div>
          </nav>
        </header>
        <h1 className="font-bold text-xl my-8 text-center">
          Panduan Mengunjungi Pura di Bali
        </h1>
        <div
          style={{
            backgroundImage:
              "url(https://www.rentalmobilbali.net/wp-content/uploads/2012/02/Pura-Ulun-Danu-Danau-Bedugul.jpg)",
          }}
          className="h-[300px] bg-center bg-cover bg-no-repeat"
        ></div>
        <section>
          <div className="text-center my-8 font-bold text-xl">Pura {id}</div>
          <div className="px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio
            ad enim labore quasi. Tempore magni error aperiam veritatis, non aut
            vel voluptatum quod cum, ipsam rerum optio ad deleniti. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Cumque odio ad enim
            labore quasi. Tempore magni error aperiam veritatis, non aut vel
            voluptatum quod cum, ipsam rerum optio ad deleniti. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Cumque odio ad enim
            labore quasi. Tempore magni error aperiam veritatis, non aut vel
            voluptatum quod cum, ipsam rerum optio ad deleniti. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Cumque odio ad enim
            labore quasi. Tempore magni error aperiam veritatis, non aut vel
            voluptatum quod cum, ipsam rerum optio ad deleniti.
          </div>
        </section>
      </div>
    );
  else
    return (
      <div>
        <header className="flex justify-between p-4">
          <div className="bg-slate-300 w-32 h-20">logo</div>
          <nav className="flex gap-20 font-semibold px-8">
            <div onClick={() => navigate("/")}>
              <button className="rounded-xl bg-yellow-400 px-4 py-2 ">
                Kembali
              </button>
            </div>
          </nav>
        </header>
        <h1 className="font-bold text-xl my-8 text-center">
          Panduan Mengunjungi Pura di Bali
        </h1>
        <div className="grid grid-cols-3 grid-rows-3 gap-4 ">
          {[...Array(9)].map((_, i) => (
            <div
              onClick={() => navigate(`/panduan/${i}`)}
              key={i}
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="size-56 bg-slate-200"></div>
              <span className="font-bold capitalize">pura agung besakih</span>
              <span>Denpasar, Bali</span>
              <button
                onClick={() => navigate(`/panduan/${i + 1}`)}
                className="rounded-md bg-yellow-400 px-2 py-0.5 font-semibold mt-2"
              >
                Selengkapnya
              </button>{" "}
            </div>
          ))}
        </div>
      </div>
    );
};

export default Panduan;
