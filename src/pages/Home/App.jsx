import { useRef } from "react";

import About from "./About.jsx";
import Header from "../../Header.jsx";
import Footer from "../../Footer.jsx";
import Panduan from "./Panduan.jsx";

function Home() {
  const pura = useRef(null);
  const about = useRef(null);
  const home = useRef(null);

  return (
    <div ref={home}>
      <Header aboutRef={about} homeRef={home} puraRef={pura} />
      <About aboutRef={about} />
      <Panduan puraRef={pura} />
      <Footer />
    </div>
  );
}

export default Home;
