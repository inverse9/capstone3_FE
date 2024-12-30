import { useNavigate } from "react-router-dom";
import usePura from "../../api/usePura";

// eslint-disable-next-line react/prop-types
const Panduan = ({ puraRef }) => {
  const IMAGE_URL = "http://localhost:3000/uploads";

  const { data, loading } = usePura();
  const navigate = useNavigate();

  if (loading) return <>Loading</>;
  return (
    <section ref={puraRef} className="mt-10">
      <h1 className="text-2xl text-center mb-6">
        Panduan Mengunjungi Pura di Bali
      </h1>
      <div className="grid grid-cols-3 gap-4 ">
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
          </div>
        ))}
      </div>
      <div className="flex justify-center my-6">
        <button
          onClick={() => navigate("/panduan")}
          className="rounded-xl font-semibold bg-[#FFD400] px-4 py-2 "
        >
          Tampilkan Lebih Banyak &gt;
        </button>
      </div>
    </section>
  );
};

export default Panduan;
