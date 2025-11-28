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
          <ProfileCard
           name="Nyoman"
           title="Full Stack Devolover"
           handle=""
           status="Online"
           contactText="My Contact"
           avatarUrl="/public/assets/profile-about.png"
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
        <div className="project-box mt-14">
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
                url: proyek.demo || proyek.github || '',
                // Data tambahan untuk ditampilkan
                status: proyek.status,
                tools: proyek.tools,
                kantor: proyek.kantor,
                github: proyek.github,
                demo: proyek.demo,
                // Data original untuk modal
                originalData: proyek
              };
            })}
            className="min-h-[500px] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
            radius={400}
            damping={0.45}
            fadeOut={0.6}
            onCardClick={(item) => setSelectedProject(item)}
          />
          {listProyek.length > 6 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowMoreProject(!showMoreProject)}
                className="flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-lg transition-colors border border-zinc-700"
              >
                {showMoreProject ? (
                  <>
                    <i className="ri-arrow-up-line"></i>
                    Lihat Lebih Sedikit
                  </>
                ) : (
                  <>
                    Lihat Lebih Banyak
                    <i className="ri-arrow-down-line"></i>
                  </>
                )}
              </button>
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
        <h1 className="text-center text-4xl font-bold mb-4">My - Design</h1>
        <p className="text-base/loose text-center mb-10 opacity-50">Kumpulan hasil Grahfip Design, UI/UX,  Poster, Banner, dan Karya vsisual lainnya.</p>
        <div className="project-box mt-14">
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
                handle: design.tools ? design.tools.join(', ') : '',
                location: '',
                borderColor: colorScheme.borderColor,
                gradient: colorScheme.gradient,
                url: design.file || '',
                // Data tambahan untuk ditampilkan
                tools: design.tools,
                file: design.file,
                // Data original untuk modal
                originalData: design
              };
            })}
            className="min-h-[500px] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
            radius={400}
            damping={0.45}
            fadeOut={0.6}
            onCardClick={(item) => setSelectedDesign(item)}
          />
          {listDesign.length > 8 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowMoreDesign(!showMoreDesign)}
                className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg transition-colors border border-zinc-700"
              >
                {showMoreDesign ? (
                  <>
                    <i className="ri-arrow-up-line"></i>
                    Lihat Lebih Sedikit
                  </>
                ) : (
                  <>
                    Lihat Lebih Banyak
                    <i className="ri-arrow-down-line"></i>
                  </>
                )}
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
      <div id="contact" className="Contact mt-32 p-4 sm:p-10" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Contact</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Jika berminat Silahkan Hubungi saya</p>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          {/* Email Card */}
          <a
            href="mailto:inyomanwahyu123@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30 rounded-2xl p-6 hover:border-red-500/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center group-hover:bg-red-500/30 transition-colors duration-300">
                <i className="ri-mail-fill text-3xl text-red-400 group-hover:text-red-300 transition-colors duration-300"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Email</h3>
                <p className="text-sm text-gray-400">Kirim pesan via email</p>
              </div>
            </div>
            <p className="text-red-300 font-medium break-all">inyomanwahyu123@gmail.com</p>
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-600/0 group-hover:from-red-500/10 group-hover:to-red-600/5 rounded-2xl transition-all duration-300"></div>
          </a>

          {/* Instagram Card */}
          <a
            href="https://www.instagram.com/inyoman_wahyu1/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-pink-500/20 to-purple-600/10 border border-pink-500/30 rounded-2xl p-6 hover:border-pink-500/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-pink-500/20 rounded-xl flex items-center justify-center group-hover:bg-pink-500/30 transition-colors duration-300">
                <i className="ri-instagram-fill text-3xl text-pink-400 group-hover:text-pink-300 transition-colors duration-300"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Instagram</h3>
                <p className="text-sm text-gray-400">Follow & DM saya</p>
              </div>
            </div>
            <p className="text-pink-300 font-medium">@inyoman_wahyu1</p>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-purple-600/0 group-hover:from-pink-500/10 group-hover:to-purple-600/5 rounded-2xl transition-all duration-300"></div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/i-nyoman-wahyu"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-2xl p-6 hover:border-blue-500/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                <i className="ri-linkedin-fill text-3xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">LinkedIn</h3>
                <p className="text-sm text-gray-400">Connect dengan saya</p>
              </div>
            </div>
            <p className="text-blue-300 font-medium">I Nyoman Wahyu</p>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/10 group-hover:to-blue-600/5 rounded-2xl transition-all duration-300"></div>
          </a>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20untuk%20berkolaborasi"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-2xl p-6 hover:border-green-500/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                <i className="ri-whatsapp-fill text-3xl text-green-400 group-hover:text-green-300 transition-colors duration-300"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">WhatsApp</h3>
                <p className="text-sm text-gray-400">Chat langsung</p>
              </div>
            </div>
            <p className="text-green-300 font-medium">Klik untuk chat</p>
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-600/0 group-hover:from-green-500/10 group-hover:to-green-600/5 rounded-2xl transition-all duration-300"></div>
          </a>
        </div>
      </div>
      {/* END CONTACT */}
    </>


  );
}

export default App;
