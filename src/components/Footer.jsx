const Footer = () => {
  return (
    <footer data-aos="fade-up" data-aos-duration="1000">
      <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Portofolio</h1>
        <div className="flex gap-7" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          <a href="https://github.com/NyomanWahyu01" target="_blank" rel="noopener noreferrer">
            <i className="ri-github-fill ri-2x"></i>
          </a>
          <a href="https://www.instagram.com/inyoman_wahyu1/" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-fill ri-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/i-nyoman-wahyu" target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-fill ri-2x"></i>
          </a>
          <a href="mailto:inyomanwahyu123@gmail.com">
            <i className="ri-mail-fill ri-2x"></i>
          </a>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer