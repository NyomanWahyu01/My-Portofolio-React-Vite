import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

/**
 * ChromaGrid Component
 * 
 * Grid component dengan efek spotlight interaktif menggunakan GSAP.
 * Menampilkan items dalam grid dengan animasi grayscale yang mengikuti cursor.
 * 
 * @param {Array} items - Array of items untuk ditampilkan
 * @param {string} className - Additional CSS classes
 * @param {number} radius - Radius dari spotlight effect (default: 300px)
 * @param {number} damping - Durasi animasi damping (default: 0.45)
 * @param {number} fadeOut - Durasi fade out effect (default: 0.6)
 * @param {string} ease - GSAP easing function (default: 'power3.out')
 * @param {Function} onCardClick - Callback function saat card diklik
 */
const ChromaGrid = ({ items, className = '', radius = 300, damping = 0.45, fadeOut = 0.6, ease = 'power3.out', onCardClick }) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  // Demo data fallback (jika items kosong)
  const demo = [
    {
      image: 'https://i.pravatar.cc/300?img=8',
      title: 'Alex Rivera',
      subtitle: 'Full Stack Developer',
      handle: '@alexrivera',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg,#4F46E5,#000)',
      url: 'https://github.com/'
    }
  ];

  const data = items?.length ? items : demo;

  // Initialize GSAP setters dan posisi awal
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  // Animasi spotlight mengikuti cursor
  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  // Handler saat cursor bergerak di grid
  const handleMove = e => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  // Handler saat cursor meninggalkan grid
  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true
    });
  };

  // Handler saat card diklik
  const handleCardClick = (item) => {
    if (onCardClick) {
      onCardClick(item);
    } else if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  // Handler untuk spotlight effect pada setiap card
  const handleCardMove = e => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative grid gap-8 ${className}`}
      style={{
        '--r': `${radius}px`,
        '--x': '50%',
        '--y': '50%'
      }}>
      {/* Render Cards */}
      {data.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c)}
          className="group relative flex flex-col w-full h-full rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer"
          style={{
            '--card-border': c.borderColor || 'transparent',
            background: c.gradient,
            '--spotlight-color': 'rgba(255,255,255,0.3)'
          }}>
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)'
            }} />
          {/* Image Container - Fixed Height */}
          <div className="relative z-10 p-[15px] box-border shrink-0">
            <div className="relative w-full aspect-4/3 overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-[10px]" />
              {/* Status Badge */}
              {c.status && (
                <span className={`absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-semibold flex items-center gap-1 ${
                  c.status === "Online" 
                    ? "bg-cyan-500/90 text-white backdrop-blur-sm" 
                    : "bg-gray-500/90 text-white backdrop-blur-sm"
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    c.status === "Online" ? "bg-green-300" : "bg-gray-300"
                  }`} />
                  {c.status}
                </span>
              )}
            </div>
          </div>
          {/* Card Footer - Consistent Height */}
          <footer className="relative z-10 p-3 text-white font-sans flex flex-col grow min-h-[140px]">
            {/* Title & Meta Info */}
            <div className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-1 mb-2 shrink-0">
              <h3 className="m-0 text-[1.05rem] font-semibold line-clamp-1">{c.title}</h3>
              {c.handle && <span className="text-[0.95rem] opacity-80 text-right line-clamp-1">{c.handle}</span>}
              <p className="m-0 text-[0.85rem] opacity-85 line-clamp-2 col-span-2">{c.subtitle}</p>
              {c.location && <span className="text-[0.85rem] opacity-85 text-right col-span-2">{c.location}</span>}
            </div>
            
            {/* Tools Tags */}
            {c.tools && c.tools.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-3 shrink-0">
                {c.tools.slice(0, 3).map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-[0.7rem] px-2 py-0.5 bg-white/10 rounded border border-white/20"
                  >
                    {tool}
                  </span>
                ))}
                {c.tools.length > 3 && (
                  <span className="text-[0.7rem] px-2 py-0.5 bg-white/10 rounded border border-white/20">
                    +{c.tools.length - 3}
                  </span>
                )}
              </div>
            )}
            
            {/* Action Buttons - Always at bottom */}
            <div className="flex gap-2 mt-auto shrink-0">
              {c.file && (
                <a
                  href={c.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 text-center text-[0.75rem] py-1.5 px-2 bg-white/20 hover:bg-white/30 rounded transition-colors border border-white/20"
                >
                  Lihat Full
                </a>
              )}
              {c.demo && c.demo !== "app.jsx" && (
                <a
                  href={c.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 text-center text-[0.75rem] py-1.5 px-2 bg-white/20 hover:bg-white/30 rounded transition-colors border border-white/20"
                >
                  Demo
                </a>
              )}
              {c.github && (
                <a
                  href={c.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 text-center text-[0.75rem] py-1.5 px-2 bg-white/20 hover:bg-white/30 rounded transition-colors border border-white/20"
                >
                  Github
                </a>
              )}
            </div>
          </footer>
        </article>
      ))}
      
      {/* Grayscale Overlay - Main Spotlight Effect */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: 'grayscale(1) brightness(0.78)',
          WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
          maskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)',
          WebkitMaskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)'
        }} />
      
      {/* Fade Overlay - Fade out effect saat cursor meninggalkan grid */}
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-250 z-40"
        style={{
          backdropFilter: 'grayscale(1) brightness(0.78)',
          WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
          maskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
          opacity: 1
        }} />
    </div>
  );
};

export default ChromaGrid;
