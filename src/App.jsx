import { DataImage, listToolsCoding, listToolsDesign, listProyek, listDesign } from "./data";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import SplitText from './components/SplitText';
import TextType from "./components/TextType";
import AnimatedList from "./components/AnimatedList";
import LogoLoop from "./components/LogoLoop";
import ProfileCard from "./components/ProfileCard";
import ChromaGrid from "./components/ChromaGrid";
import DetailProjectModal from "./components/DetailProjectModal";
import DetailDesignModal from "./components/DetailDesignModal";
import Contact from "./components/Contact";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [showMoreProject, setShowMoreProject] = useState(false);
  const [showMoreDesign, setShowMoreDesign] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    
    <>
    {/* Hero */}
      <div id="home" className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
        <div className="flex items-center gap-2 mb-6 w-fit p-4 rounded-2xl relative">
            <div className="absolute inset-0 bg-zinc-800 rounded-2xl overflow-hidden"></div>
            <img src={DataImage.profileSlogan} 
            alt="Hero Image" 
            className="w-15 h-16 object-cover rounded-2xl relative z-10" 
            loading="lazy"
             />

             <div className="relative z-10">
            <TextType 
            text={["Programming: Mengubah ide menjadi realitas digital sesuai dengan keinginan anda✅"]}
            className="animate__animated animate__fadeInUp animate__delay-1s overflow-hidden"
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
  
    <p className="text-base/loose mb-6 opacity-70">
  Spesialis dalam membangun website responsif dengan struktur kode yang rapi dan desain modern. Berorientasi pada hasil dan ketepatan waktu, saya menjadikan setiap proyek sebagai sarana untuk meningkatkan keahlian dan kualitas kerja📊.
</p>
          {/* Button Download CV dan Lihat Project */}
          <div className="flex items-center sm:gap-5 gap-2 mb-8 md:mb-0" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <a
              href="https://drive.google.com/drive/folders/1CV1RdSf5p0lBML3RB_ewfTXhdUk8Qiuz?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn bg-red-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/50 p-4 rounded-2xl font-semibold">
             Download CV 
             <i className="ri-download-fill ri-lg"></i>
            </a>
            <a
              href="#project"
              className="hero-btn bg-blue-900 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 hover:shadow-lg hover:shadow-blue-500/50 p-4 rounded-2xl font-semibold">
              Project Me 
              <i className="ri-arrow-down-double-line ri-lg"></i>
            </a>
          </div>
        </div>
        {/* Image Profile */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <ProfileCard
           name="Nyoman"
           title="Full Stack Developer"
           handle=""
           status="Online"
           contactText="My Contact"
           showUserInfo={true}
           enableTilt={true}
           enableMobileTilt={false}
            onContactClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>
      </div>
      
      {/* End Hero */}
    


      {/* ABOUT */} 
      <div id="about" className="about mt-32">  
        <div className="xl:w-4/5 lg:w-5/6 w-full mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Card About */}
          <div className="flex-1 p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-center text-4xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">About</h1>
          <p className="text-base/loose mb-3">
  Hi! Saya I Nyoman Wahyu, seorang Web Developer yang berdedikasi untuk menciptakan solusi digital yang sederhana, rapi, dan mudah digunakan.
</p>

<p className="text-base/loose mb-3">
  Dunia teknologi selalu memberikan hal baru yang menarik untuk dieksplorasi. Saya senang berdiskusi dan berkontribusi dalam membangun sesuatu yang bermanfaat, sembari terus mengasah kemampuan diri.
</p>

<p className="text-base/loose mb-3">
  Fokus utama saya adalah menghadirkan kualitas terbaik melalui detail yang presisi dan pengalaman pengguna yang nyaman.
</p>

          {/* End About */}

            {/* Foto About */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
              <img 
                src={DataImage.profileBg} 
                alt="Image" 
                className="w-full 
                           max-w-[200px] 
                           sm:max-w-[250px] 
                           md:max-w-[200px] 
                           lg:max-w-[110px] 
                           h-auto object-cover 
                           rounded-2xl" 
                loading="lazy"
                data-aos="fade-right"
                data-aos-duration="800"
              />

              <div className="flex items-center justify-center gap-8">
                <div 
                  className="transform transition-all duration-1000 ease-out translate-y-0 opacity-100"
                >
                  <h1 className="text-5xl mb-1 font-bold">
                    10<span className="text-red-500">+</span>
                  </h1>
                  <p className="opacity-50">Project Selesai</p>
                </div>
                <div 
                  className="transform transition-all duration-1000 ease-out translate-y-0 opacity-100"
                 
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
          <div className="w-full lg:w-auto lg:shrink-0 bg-zinc-800 rounded-lg">
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
        <p className="text-base/loose text-center opacity-50 mb-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"> Dibawah ini merupakan beberapa Tools yang biasa digunakan untuk membuat Coding dan Design</p>
        
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
        <h1 className="text-center text-4xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">My - Project</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Beberapa Project yang telah saya bangun dan kembangkan untuk berbagai kebutuhan digital.</p>
        <div className="project-box mt-14 animate__animated animate__fadeInUp animate__delay-5s">
          <style>{`
            @keyframes floatIn {
              from {
                opacity: 0;
                transform: translateY(30px) scale(0.95);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }

            .project-box {
              animation: floatIn 0.8s ease-out forwards;
            }
            
            .stagger-item {
              animation: floatIn 0.6s ease-out backwards;
            }
            
            .stagger-item:nth-child(1) { animation-delay: 0.1s; }
            .stagger-item:nth-child(2) { animation-delay: 0.15s; }
            .stagger-item:nth-child(3) { animation-delay: 0.2s; }
            .stagger-item:nth-child(4) { animation-delay: 0.25s; }
            .stagger-item:nth-child(5) { animation-delay: 0.3s; }
            .stagger-item:nth-child(6) { animation-delay: 0.35s; }
            .stagger-item:nth-child(7) { animation-delay: 0.4s; }
            .stagger-item:nth-child(8) { animation-delay: 0.45s; }
            .stagger-item:nth-child(n+9) { animation-delay: 0.5s; }
          `}</style>
          <ChromaGrid
            items={(showMoreProject ? listProyek : listProyek.slice(0, 6)).map((proyek, idx) => {
              // Array of gradient colors untuk variasi (tanpa background hitam)
              const gradients = [
                { borderColor: '#4F46E5', gradient: 'linear-gradient(145deg,#4F46E5,#1a1a2e)' },
                { borderColor: '#10B981', gradient: 'linear-gradient(210deg,#10B981,#1a2e1a)' },
                { borderColor: '#F59E0B', gradient: 'linear-gradient(165deg,#F59E0B,#2e1a1a)' },
                { borderColor: '#EF4444', gradient: 'linear-gradient(195deg,#EF4444,#2e1a1a)' },
                { borderColor: '#8B5CF6', gradient: 'linear-gradient(225deg,#8B5CF6,#1a1a2e)' },
                { borderColor: '#06B6D4', gradient: 'linear-gradient(135deg,#06B6D4,#1a2e2e)' }
              ];
              const colorScheme = gradients[idx % gradients.length];
              
              return {
                image: proyek.gambar,
                title: proyek.nama,
                subtitle: proyek.desk,
                handle: proyek.type,
                location: proyek.tahun,
                borderColor: colorScheme.borderColor,
                gradient: colorScheme.gradient,
                // url: proyek.demo || proyek.github || '',
                className: 'stagger-item',
                // Data tambahan untuk ditampilkan
                status: proyek.status,
                tools: proyek.tools,
                kantor: proyek.kantor,
                // github: proyek.github,
                // demo: proyek.demo,
                // Data original untuk modal
                // originalData: proyek
              };
            })}
            className="min-h-[500px] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
            radius={400}
            damping={0.45}
            fadeOut={0.6}
            onCardClick={(item) => setSelectedProject(item)}
          />
          {listProyek.length > 6 && (
         <div className="flex justify-center mt-8" data-aos="fade-up" data-aos-duration="1000">
         <button
           onClick={() => setShowMoreProject(!showMoreProject)}
           className="group relative flex items-center gap-2 px-6 py-3 bg-blue-900 hover:bg-zinc-800 text-white font-semibold rounded-lg transition-all duration-300 border border-zinc-700 hover:border-zinc-600 overflow-hidden active:scale-95 transform hover:scale-105 hover:shadow-xl"
         >
           {/* Shine effect */}
           <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
           
           {/* Ripple effect saat klik */}
           <span className="absolute inset-0 rounded-lg opacity-0 group-active:opacity-100 group-active:animate-ripple bg-white/20"></span>
           
           <span className="relative flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
             {showMoreProject ? (
               <>
                 <i className="ri-arrow-up-line text-red-500 transition-transform duration-300 group-hover:-translate-y-1 group-active:scale-90"></i>
                 Lihat Lebih Sedikit
               </>
             ) : (
               <>
                 Lihat Lebih Banyak
                 <i className="ri-arrow-down-line text-green-500 transition-transform duration-300 group-hover:translate-y-1 group-active:scale-90"></i>
               </>
             )}
           </span>
         </button>
         
         <style>{`
           @keyframes ripple {
             0% {
               transform: scale(0);
               opacity: 1;
             }
             100% {
               transform: scale(2);
               opacity: 0;
             }
           }
           
           .animate-ripple {
             animation: ripple 0.6s ease-out;
           }
         `}</style>
       </div>
          )}
        </div>
      </div>
      {/* END PROJECT */}
      
      {/* Project Detail Modal */}
      <DetailProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        data={selectedProject}
      />


      {/* MY DESIGN */}
      <div id="design" className="Design mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">My - Design</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Galeri karya visual saya yang mencakup Design UI/UX, Graphic Design, poster, banner, dan berbagai desain kreatif lainnya.</p>
        <div className="design-box mt-14">
  <style>{`
    @keyframes smoothFloatIn {
      0% {
        opacity: 0;
        transform: translateY(40px) scale(0.92);
        filter: blur(4px);
      }
      50% {
        opacity: 0.6;
        transform: translateY(15px) scale(0.97);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0);
      }
    }

    .design-box {
      animation: smoothFloatIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    
    .design-stagger-item {
      opacity: 0;
      animation: smoothFloatIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    
    .design-stagger-item:nth-child(1) { animation-delay: 0.05s; }
    .design-stagger-item:nth-child(2) { animation-delay: 0.1s; }
    .design-stagger-item:nth-child(3) { animation-delay: 0.15s; }
    .design-stagger-item:nth-child(4) { animation-delay: 0.2s; }
    .design-stagger-item:nth-child(5) { animation-delay: 0.25s; }
    .design-stagger-item:nth-child(6) { animation-delay: 0.3s; }
    .design-stagger-item:nth-child(7) { animation-delay: 0.35s; }
    .design-stagger-item:nth-child(8) { animation-delay: 0.4s; }
    .design-stagger-item:nth-child(n+9) { animation-delay: 0.45s; }
  `}</style>

  <ChromaGrid
    items={(showMoreDesign ? listDesign : listDesign.slice(0, 8)).map((design, idx) => {
      // Array of gradient colors untuk variasi design (tanpa background hitam)
      const gradients = [
        { borderColor: '#EC4899', gradient: 'linear-gradient(145deg,#EC4899,#2e1a2e)' },
        { borderColor: '#8B5CF6', gradient: 'linear-gradient(210deg,#8B5CF6,#1a1a2e)' },
        { borderColor: '#F59E0B', gradient: 'linear-gradient(165deg,#F59E0B,#2e2a1a)' },
        { borderColor: '#10B981', gradient: 'linear-gradient(195deg,#10B981,#1a2e1a)' },
        { borderColor: '#3B82F6', gradient: 'linear-gradient(225deg,#3B82F6,#1a1a2e)' },
        { borderColor: '#EF4444', gradient: 'linear-gradient(135deg,#EF4444,#2e1a1a)' },
        { borderColor: '#06B6D4', gradient: 'linear-gradient(150deg,#06B6D4,#1a2e2e)' },
        { borderColor: '#F97316', gradient: 'linear-gradient(180deg,#F97316,#2e1a1a)' }
      ];
      const colorScheme = gradients[idx % gradients.length];
      
      return {
        image: design.gambar,
        title: design.nama,
        subtitle: design.desk,
        handle: design.type || '',
        location: design.tahun || '',
        borderColor: colorScheme.borderColor,
        gradient: colorScheme.gradient,
        url: design.file || '',
        // Data tambahan untuk ditampilkan
        tools: design.tools,
        status: design.status,
        kantor: design.kantor,
        tahun: design.tahun,
        type: design.type,
        file: design.file,
        // Data original untuk modal
        originalData: design,
        className: 'design-stagger-item'
      };
    })}
    className="min-h-[500px] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
    radius={400}
    damping={0.35}
    fadeOut={0.8}
    ease="power2.out"
    onCardClick={(item) => setSelectedDesign(item)}
  />
  {listDesign.length > 8 && (
    <div className="flex justify-center mt-8" data-aos="fade-up" data-aos-duration="1000">
      <button
        onClick={() => setShowMoreDesign(!showMoreDesign)}
        className="group relative flex items-center gap-2 px-6 py-3 bg-blue-900 hover:bg-zinc-700 text-white font-semibold rounded-lg transition-all duration-300 border border-zinc-700 hover:border-zinc-600 overflow-hidden active:scale-95 transform hover:scale-105 hover:shadow-xl"
      >
        <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
        <span className="relative flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
          {showMoreDesign ? (
            <>
              <i className="ri-arrow-up-line text-red-500 transition-transform duration-300 group-hover:-translate-y-1"></i>
              Lihat Lebih Sedikit
            </>
          ) : (
            <>
              Lihat Lebih Banyak
              <i className="ri-arrow-down-line text-green-500 transition-transform duration-300 group-hover:translate-y-1"></i>
            </>
          )}
        </span>
      </button>
    </div>
  )}
        </div>
      </div>
      {/* END MY DESIGN */}
      
      {/* Design Detail Modal */}
      <DetailDesignModal
        isOpen={!!selectedDesign}
        onClose={() => setSelectedDesign(null)}
        data={selectedDesign}
      />


      {/* CONTACT */}
    <div id="contact" className="Contact mt-32 p-10 sm:p-10">
      <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Contact</h1>
      <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">“Peluang kerja sama atau pertanyaan lebih lanjut, saya dapat dihubungi melalui kontak berikut.”</p>

       {/* Contact Cards */}
       <div className="mb-0">
        <Contact />
      </div>

    </div>      
      {/* END CONTACT */}
    </>
  );
}

export default App;
