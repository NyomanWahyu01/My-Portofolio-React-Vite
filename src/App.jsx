import DataImage from "./data";
import { listToolsCoding, listToolsDesign, listProyek } from "./data";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <div id="home" className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl -mt-10">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
            <q>"Programming: Mengubah ide menjadi realitas digital 🌠🚀"</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6 ">Hi, Saya I Nyoman Wahyu Trisna Winda</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya memiliki passion dalam Programming dan Design, dengan fokus pada pengembangan
            Website responsif dan kreasi visual seperti Poster, Pamflet, dan Banner. Pengalaman
            saya di kedua bidang ini telah berkembang selama lebih dari 3 tahun, di mana saya terus
            mengasah kemampuan teknis dan memperdalam pemahaman UI/UX Design untuk menciptakan karya
             yang estetik dan fungsional.
          </p>
          <div className="flex items-center sm:gap-5 gap-2">
            <a
              href="https://drive.google.com/file/d/1dtsnEkmGVh8uDE_XmcCOMxtkBqEiT_t4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-700 p-4 rounded-2xl hover:bg-red-600"
            >
              Download CV <i className="ri-download-fill ri-lg"></i>
            </a>
            <a
              href="#project"
              className="bg-blue-700 p-4 rounded-2xl hover:bg-blue-600"
            >
              Lihat Project <i className="ri-arrow-down-double-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-130 h-130 md:ml-auto animate__animated animate__fadeInUp animate__delay-4s 
        object-cover rounded-2xl -mt-20" loading="lazy"/>
      </div>

      {/* ABOUT */}
      <div id="about" className="about mt-32">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
          <img src={DataImage.HeroImage} alt="ImageHero" className="w-12 rounded-md md-10 sm:hidden" loading="lazy" />
          <p className="text-base/loose mb-10 ">
            Hi, perkenalkan saya I Nyoman Wahyu, Seorang Full Stack Devoloper dan Designer untuk UI/UX Design maupun Project Digital,
            Saya dipercayakan bahwa design dan fungsional harus berjalan beriringan, sehingga proyek yang saya kembangkan tidak hanya
            terlihat menarik tetapi juga memberikan pengalaman pengguna yang optimal.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  10<span className="text-red-500">+</span>
                </h1>
                <p>Project Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  3<span className="text-red-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TOOLS */}
      <div id="tools" className="tools mt-32">
        <h1 className="text-center text-4xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Tools & Framework Coding</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"> Dibawah ini merupakan beberapa Tools yang biasa diguakan untuk membuat Coding dan Design</p>
        <div className="tools-box mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listToolsCoding.map((tool, idx) => (
            <div
              className="flex items-center gap-2 p-4 border border-zinc-600 rounded-md hover:bg-zinc-800"
              key={tool.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={tool.dad || idx * 100}
            >
              <img src={tool.gambar} alt={tool.nama} className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>

        <h1 className="text-center text-2xl font-bold mb-4 mt-5">Tools Graphic Design - Designer IU/UX</h1>
        <div className="tools-box mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listToolsDesign.map((tool, idx) => (
            <div
              className="flex items-center gap-2 p-4 border border-zinc-600 rounded-md hover:bg-zinc-800"
              key={tool.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={tool.dad || idx * 100}
            >
              <img src={tool.gambar} alt={tool.nama} className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT */}
      <div id="project" className="Project mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-4">My - Project</h1>
        <p className="text-base/loose text-center mb-10 opacity-50">Beberapa ini merupakan Project yang sudah pernah saya Buat</p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek, idx) => (
            <div
              key={proyek.id}
              className="flex flex-col bg-zinc-800 rounded-md py-4 h-full"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad || idx * 100}
            >
              <img src={proyek.gambar} alt="Proyek Gambar" loading="lazy" />
              <div className="flex-1 flex flex-col">
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-amber-500 bg-amber-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  {proyek.demo ? (
                    <a
                      href={proyek.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-red-700 p-3 rounded-lg text-center font-semibold border-zinc-600 hover:bg-red-600 transition"
                    >
                      Lihat Website
                    </a>
                  ) : (
                    <span className="flex-1 bg-red-400 p-3 rounded-lg text-center font-semibold border-zinc-600 opacity-50 cursor-not-allowed">
                      Lihat Website
                    </span>
                  )}
                  <a
                    href={proyek.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-700 p-3 rounded-lg text-center font-semibold border-zinc-600 hover:bg-slate-800 transition"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* END PROJECT */}

      {/* CONTACT */}
    <div id="contact" className="Contact mt-32 p-4 sm:p-10" data-aos="fade-up" data-aos-duration="1000">
      <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Contact</h1>
      <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Jika berminat Silahkan Hubungi saya</p>
      <form
        action="https://formsubmit.co/2098e39a4924096cbac533341acf4454"
        method="POST"
        className="bg-zinc-800 p-4 sm:p-10 w-full max-w-md mx-auto rounded-md"
        autoComplete="off"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <label className="font-semibold">Nama Lengkap</label>
            <input type="text" name="nama" placeholder="Masukkan Nama Anda" className="border border-zinc-500 p-2 rounded-md w-full" required/>
          </div>
          <div className="flex flex-col gap-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <label className="font-semibold">Email</label>
            <input type="email" name="email" placeholder="Masukkan Email Anda" className="border border-zinc-500 p-2 rounded-md w-full" required />
          </div>
          <div className="flex flex-col gap-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <label htmlFor="pesan" className="font-semibold">Pesan</label>
            <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan Yang Ingin DiSampaikan" className="border border-zinc-500 p-2 rounded-md w-full" required></textarea>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
            <button type="submit" className="bg-sky-600 p-3 rounded-lg w-full cursor-pointer border-zinc-600 hover:bg-sky-700">KIRIM</button>
          </div>
        </div>
      </form>
    </div>      
      {/* END CONTACT */}
    </>
  );
}

export default App;
