import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Pura = () => {
  const IMAGE_URL = "http://localhost:3000/uploads";
  const navigate = useNavigate();

  const { id } = useParams();
  const [pura, setPura] = useState();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const getPura = () => {
      const URL = "http://localhost:3000/api/pura";

      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(`${URL}/${id}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const result = await response.json();
          setPura(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    };
    getPura(id);
  }, []);

  if (isLoading) return <>loading</>;
  return (
    <div className="">
      <header className="flex justify-between p-4">
        <div className="bg-slate-300 w-32 h-20">logo</div>
        <nav className="flex gap-20 font-semibold px-8">
          <div onClick={() => navigate("/panduan")}>
            <button className="rounded-xl  bg-[#FFD400] px-4 py-2 ">
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
          backgroundImage: `url(${IMAGE_URL}/${pura.foto})`,
        }}
        className="h-[600px] bg-center bg-cover bg-no-repeat"
      ></div>
      <section>
        <div className="text-center my-8 font-bold text-xl">{pura.nama}</div>
        <div className="px-10 text-justify">
          <div dangerouslySetInnerHTML={{ __html: pura.deskripsi }} />
        </div>
      </section>
    </div>
  );
};

export default Pura;
