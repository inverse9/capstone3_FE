import { useNavigate } from "react-router-dom";
import usePura from "../api/usePura";

const Panduan = () => {
  const IMAGE_URL = "http://localhost:3000/uploads";

  const { data, loading } = usePura();
  const navigate = useNavigate();

  if (loading) return <>Loading</>;
  return (
    <div>
      <header className="flex justify-between p-4">
        <div className="bg-slate-300 w-32 h-20">logo</div>
        <nav className="flex gap-20 font-semibold px-8">
          <div onClick={() => navigate("/")}>
            <button className="rounded-xl  bg-[#FFD400] px-4 py-2 ">
              Kembali
            </button>
          </div>
        </nav>
      </header>
      <h1 className="font-bold text-xl my-8 text-center">
        Panduan Mengunjungi Pura di Bali
      </h1>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 ">
        {data.map((v, _) => (
          <div
            key={v.id}
            className="flex flex-col items-center justify-center "
          >
            <div
              onClick={() => navigate(`/pura/${v.id}`)}
              className="h-56 w-72 aspect-video cursor-pointer"
            >
              <img src={`${IMAGE_URL}/${v.foto}`} className="size-full" />
            </div>
            <span className="font-bold capitalize">{v.nama}</span>
            <span>{v.lokasi}</span>
            <button
              onClick={() => navigate(`/panduan/${v.id}`)}
              className="rounded-md  bg-[#FFD400] px-2 py-0.5 font-semibold mt-2"
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
