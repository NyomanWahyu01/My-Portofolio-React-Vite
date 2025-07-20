import DataImage from "./data";
import { listToolsCoding, listToolsDesign } from "./data";
function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl -mt-10">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
            <q>"Programming: Mengubah ide menjadi realitas digital 🌠🚀"</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6 ">Hi, Saya I Nyoman Wahyu Trisna Winda</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya memiliki passion dalam Programming dan Design, dengan fokus pada pengembangan Website responsif dan kreasi visual seperti Poster, Pamflet, dan Banner. Pengalaman saya di kedua bidang ini telah berkembang selama lebih dari 4 tahun, di mana saya terus mengasah kemampuan teknis dan memperdalam pemahaman UI/UX Design untuk menciptakan karya yang estetik dan fungsional.
          </p>
          <div className="flex items-center sm:gap-5 gap-2">
            <a href="#" className="bg-red-700 p-4 rounded-2xl hover:bg-red-600">
              Download CV <i className="ri-download-fill ri-lg"></i>
            </a>
            <a href="#" className="bg-blue-700 p-4 rounded-2xl hover:bg-blue-600">
              Lihat Project <i className="ri-arrow-down-double-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-130 h-130 md:ml-auto object-cover rounded-2xl -mt-20" />
      </div>

      {/* ABOUT */}
      <div className="about mt-32">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img src={DataImage.HeroImage} alt="ImageHero" className="w-12 rounded-md md-10 sm:hidden" />
          <p className="text-base/loose mb-10 ">
            Hi, perkenalkan saya I Nyoman Wahyu, Seorang Full Stack Devoloper dan Designer untuk UI/UX Design maupun Project Digital,
            Saya dipercayakan bahwa design dan fungsional harus berjalan beriringan, sehingga proyek yang saya kembangkan tidak hanya
            terlihat menarik tetapi juga memberikan pengalaman pengguna yang optimal.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45<span className="text-red-500">+</span>
                </h1>
                <p>Project Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  4<span className="text-red-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TOOLS */}
      <div className="tools mt-32">
        <h1 className="text-center text-4xl font-bold mb-4">Tools & Framework Coding</h1>
        <p className="text-base/loose text-center opacity-50"> Dibawah ini merupakan beberapa Tools yang biasa diguakan untuk membuat Coding dan Design</p>
        <div className="tools-box mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listToolsCoding.map((tool) => (
            <div className="flex items-center gap-2 p-4 border border-zinc-600 rounded-md hover:bg-zinc-800" key={tool.id}>
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
          {listToolsDesign.map((tool) => (
            <div className="flex items-center gap-2 p-4 border border-zinc-600 rounded-md hover:bg-zinc-800" key={tool.id}>
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
      <div className="Project mt-32">
        <h1 className="text-center text-4xl font-bold mb-4">My - Project</h1>
        <p className="text-base/loose text-center opacity-50">Beberapa ini merupakan Project yang sudah pernah saya Buat</p>
      </div>
      {/* END PROJECT */}
    </>
  );
}

export default App;
