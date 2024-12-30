// eslint-disable-next-line react/prop-types
const About = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} className="px-20">
      <h1 className="text-2xl text-center py-4">About Us</h1>
      <div className="text-justify">
        Selamat datang di Bali Paradise, panduan bagi para wisatawan yang ingin
        mengeksplorasi keindahan dan kekayaan budaya tempat suci di Bali. Kami
        percaya bahwa setiap perjalanan tidak hanya tentang melihat tempat baru,
        tetapi juga memahami cerita, nilai, dan tradisi yang ada di baliknya.
        Website ini dirancang untuk memberikan informasi tentang berbagai tempat
        suci di Bali yang terkenal menjadi tempat wisata, mulai dari lokasi,
        tata cara kunjungan, hingga etika yang perlu diperhatikan. Dengan
        begitu, Anda dapat menjelajahi tempat-tempat ini dengan rasa hormat dan
        pengalaman yang lebih bermakna.
        <ul className="list-disc">
          Tujuan kami:
          <li className="ml-10">
            Memberikan panduan yang mudah dipahami untuk mempersiapkan kunjungan
            ke tempat suci.
          </li>
          <li className="ml-10">
            Membantu wisatawan lokal dan internasional memahami dan menghormati
            tradisi Bali.
          </li>
          <li className="ml-10">
            Mendukung pelestarian budaya Bali melalui edukasi kepada para
            wisatawan.
          </li>
        </ul>
        Kami percaya bahwa dengan informasi yang tepat, setiap kunjungan ke
        tempat suci dapat menjadi pengalaman spiritual dan budaya yang tak
        terlupakan.
      </div>
    </section>
  );
};

export default About;
