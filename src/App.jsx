import { DataImage, listToolsCoding, listToolsDesign, listProyek, listDesign } from "./data";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SplitText from './components/SplitText';
import TextType from "./components/TextType";
import AnimatedList from "./components/AnimatedList";
import LogoLoop from "./components/LogoLoop";
function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    
    <>
    {/* Hero */}
      <div id="home" className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
        <div className="flex items-center gap-2 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.profileSlogan} 
            alt="Hero Image" 
            className="w-15 h-16 object-cover rounded-2xl" 
            loading="lazy"
             />
            
          <div className="overflow-hidden">
            <TextType 
            text={["Programming: Mengubah ide menjadi realitas digital Sesuai dengan keinginan Anda✅"]}
            className="animate__animated animate__fadeInUp animate__delay-1s"
            typingSpeed={90}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
          </div>
      </div>
    <div className="items-center">
      <SplitText
      />
    </div>
  
      <p className="text-base/loose mb-6 opacity-50">
        Saya berfokus pada pengembangan Website yang responsif, memiliki coding yang Clean, ontime pada Deadline, serta tampilan yang Menarik dan Modern. Pengalaman membuatsaya terus berkembang melalui setiap project yang saya kerjakan.📊
      </p>
          {/* Button Download CV dan Lihat Project */}
          <div className="flex items-center sm:gap-5 gap-2 mb-8 md:mb-0">
            <a
              href="https://drive.google.com/file/d/1dtsnEkmGVh8uDE_XmcCOMxtkBqEiT_t4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn bg-red-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-800 p-4 rounded-4xl">
             Download CV 
             <i className="ri-download-fill ri-lg"></i>
            </a>
            <a
              href="#project"
              className="hero-btn bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 p-4 rounded-4xl">
              Project Me 
              <i className="ri-arrow-down-double-line ri-lg"></i>
            </a>
          </div>
        </div>
        {/* Image Profile */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <img src={DataImage.profileAbout} 
          alt="Profile About" 
          className="profile-hero-img w-full 
                      max-w-full
                      sm:max-w-[400px]
                      md:max-w-[450px] 
                      lg:max-w-[500px]
                      h-auto
                      min-h-[400px]
                      sm:min-h-[450px]
                      md:min-h-[500px]
                      md:h-[555px]
                      object-cover 
                      rounded-3xl 
                      mx-auto
                      md:mx-0
                      md:ml-auto 
                      animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"/>
        </div>
      </div>
      
      {/* End Hero */}
    


      {/* ABOUT */} 
      <div id="about" className="about mt-32">  
        <div className="xl:w-4/5 lg:w-5/6 w-full mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Card About */}
          <div className="flex-1 p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
            <p className="text-base/loose mb-10 ">
              Hi, perkenalkan saya I Nyoman Wahyu, Seorang Full Stack Devoloper dan Designer untuk UI/UX Design maupun Project Digital,
              Saya dipercayakan bahwa design dan fungsional harus berjalan beriringan, sehingga proyek yang saya kembangkan tidak hanya
              terlihat menarik tetapi juga memberikan pengalaman pengguna yang optimal.
            </p>
            {/* Foto About */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
              <img 
                src={DataImage.profileBg} 
                alt="Image" 
                className="w-full 
                           max-w-[200px] 
                           sm:max-w-[250px] 
                           md:max-w-[200px] 
                           lg:max-w-[100px] 
                           h-auto object-cover 
                           rounded-2xl" 
                loading="lazy"
                data-aos="fade-right"
                data-aos-duration="800"
              />

              <div className="flex items-center justify-center gap-8">
                <div 
                  className="fade-up fade-up-delay-2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <h1 className="text-5xl mb-1 font-bold">
                    10<span className="text-red-500">+</span>
                  </h1>
                  <p className="opacity-50">Project Selesai</p>
                </div>
                <div 
                  className="fade-up fade-up-delay-3"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <h1 className="text-5xl mb-1 font-bold">
                    3<span className="text-red-500">+</span>
                  </h1>
                  <p className="opacity-50">Tahun Pengalaman</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* AnimatedList - Right Side */}
          <div className="w-full lg:w-auto lg:shrink-0  bg-zinc-700 rounded-lg">
            <AnimatedList 
              className="w-full lg:w-[350px]"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            />
          </div>
        </div>
      </div>

      {/* TOOLS */}
      <div id="tools" className="tools mt-32">
        <h1 className="text-center text-4xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Tools & Framework Coding</h1>
        <p className="text-base/loose text-center opacity-50 mb-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"> Dibawah ini merupakan beberapa Tools yang biasa diguakan untuk membuat Coding dan Design</p>
        
        {/* LogoLoop Section */}
        <div className="mb-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <LogoLoop
            logos={[...listToolsCoding, ...listToolsDesign].map(tool => ({
              src: tool.gambar,
              alt: tool.nama,
              title: tool.nama
            }))}
            speed={60}
            direction="left"
            logoHeight={60}
            gap={48}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            ariaLabel="Technology tools and frameworks"
            className="py-4"
          />
        </div>        
      </div>
      {/* END TOOLS */}

      {/* PROJECT */}
      <div id="project" className="Project mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-4">My - Project</h1>
        <p className="text-base/loose text-center mb-10 opacity-50">Beberapa ini merupakan Project yang sudah pernah saya Buat</p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek, idx) => (
            <div
              key={proyek.id}
              className="flex flex-col bg-zinc-800 rounded-md py-4 h-full relative"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad || idx * 100}
            >
              <div className="relative">
                <img src={proyek.gambar} alt="Proyek Gambar" loading="lazy" />
                <span className={`absolute top-2 right-2 px-2 py-1 rounded-md text-xs font-semibold flex items-center gap-1 ${
                  proyek.status === "Online" 
                    ? "bg-cyan-500/80 text-white" 
                    : "bg-gray-500/80 text-white"
                }`}>
                  <i className={`ri-${proyek.status === "Online" ? "global" : "global-line"}-fill`}></i>
                  {proyek.status}
                </span>
              </div>
              <div className="flex-1 flex flex-col">
                <h1 className="text-lg font-bold mb-1 truncate text-center mt-1">{proyek.nama}</h1>
                <div className="flex items-center justify-center gap-6 mt-2 mb-1">
                  <span className="px-2 py-1 rounded-md text-xs opacity-70 bg-zinc-700">{proyek.type}</span>
                  <span className="px-2 py-1 rounded-md text-xs opacity-70 bg-zinc-700">{proyek.tahun}</span>
                </div>                
                <p className="text-sm opacity-80 mb-2 text-center line-clamp-2 mt-3">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2 mb-4 mt-3 justify-center">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-amber-500 bg-amber-600 rounded-md font-semibold text-center"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2 mt-2 mb-1">
                  <span className="px-2 py-1 rounded-md text-xs opacity-70 bg-zinc-700">{proyek.kantor}</span>
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

      {/* MY DESIGN */}
      <div id="design" className="Design mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-4">My - Design</h1>
        <p className="text-base/loose text-center mb-10 opacity-50">Kumpulan hasil Grahfip Design, UI/UX,  Poster, Banner, dan Karya vsisual lainnya.</p>
        <div className="design-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {listDesign.map((item, idx) => (
            <div key={item.id} className="bg-zinc-800 rounded-md overflow-hidden shadow-lg flex flex-col h-full" data-aos="fade-up" data-aos-duration="2000" data-aos-delay={item.dad || idx * 100}>
              <img src={item.gambar} alt={item.nama} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-lg font-bold mb-1 truncate text-center">{item.nama}</h2>
                <p className="text-sm opacity-80 mb-2 text-center line-clamp-2 mt-3">{item.desk}</p>
                <div className="mt-auto w-full">
                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {item.tools && item.tools.map((tool, idx2) => (
                      <p key={idx2} className="py-1 px-3 border border-amber-500 bg-amber-600 rounded-md font-semibold text-center mt-3">{tool}</p>
                    ))}
                  </div>
                  <a href={item.file} target="_blank" rel="noopener noreferrer" className="flex-1 bg-red-700 p-2 rounded text-center font-semibold hover:bg-red-800 transition block">Lihat Full</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* END MY DESIGN */}

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
