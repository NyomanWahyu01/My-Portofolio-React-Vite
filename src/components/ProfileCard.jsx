import { useRef, useState, useEffect } from 'react';

const ProfileCard = ({
  name = "Nyoman",
  title = "Full Stack Developer",
  handle = "",
  status = "Online",
  contactText = "My Contact",
  avatarUrl,
  showUserInfo = true,
  enableTilt = true,
  enableMobileTilt = false,
  onContactClick
}) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Force re-render when tilt settings change
    if (cardRef.current && enableTilt) {
      cardRef.current.style.willChange = 'transform';
    }
  }, [enableTilt, enableMobileTilt, isMobile]);

  const handleMouseMove = (e) => {
    if (!enableTilt) return;
    if (!enableMobileTilt && isMobile) return;
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const shouldTilt = enableTilt && (enableMobileTilt || !isMobile);

  return (
    <div
      ref={cardRef}
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
                  mx-auto
                  md:mx-0
                  md:ml-auto
                  relative
                  cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transform: shouldTilt
          ? `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${isHovered ? 1.03 : 1})`
          : 'none',
        transition: isHovered && shouldTilt ? 'none' : 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        transformStyle: 'preserve-3d',
        willChange: shouldTilt ? 'transform' : 'auto'
      }}
    >
      <div 
        className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
        style={{
          transform: shouldTilt ? 'translateZ(50px)' : 'none',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Avatar Image */}
        <img
          src={avatarUrl}
          alt={name}
          className="w-full h-full object-cover"
          style={{
            transform: shouldTilt ? 'translateZ(20px)' : 'none',
            transition: 'transform 0.3s ease-out'
          }}
          loading="lazy"
        />

        {/* Overlay Gradient */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2), transparent)'
          }}
        />

        {/* User Info */}
        {showUserInfo && (
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            {/* Status Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`w-3 h-3 rounded-full ${
                  status === "Online" ? "bg-green-500" : "bg-gray-500"
                } animate-pulse`}
              />
              <span className="text-sm opacity-90">{status}</span>
            </div>

            {/* Name */}
            <h2 className="text-2xl font-bold mb-1">{name}</h2>

            {/* Title */}
            {title && <p className="text-sm opacity-80 mb-4">{title}</p>}

            {/* Handle */}
            {handle && (
              <p className="text-xs opacity-60 mb-4">@{handle}</p>
            )}

            {/* Contact Button */}
            {contactText && (
              <button
                onClick={onContactClick}
                className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                {contactText}
              </button>
            )}
          </div>
        )}

        {/* Glow Effect on Hover */}
        {isHovered && shouldTilt && (
          <div 
            className="absolute inset-0 transition-opacity duration-300 pointer-events-none rounded-3xl"
            style={{ 
              opacity: isHovered ? 0.6 : 0,
              background: 'linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))'
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileCard;

