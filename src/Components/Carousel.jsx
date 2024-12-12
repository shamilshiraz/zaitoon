import React from 'react';

const LogoCarousel = () => {
  // Add your image URLs to this array
  const imageUrls = [
    "./apple.png",
    "./asus.png",
    "./huawei.jpeg",
    "./sony.jpg",
    "./samsung.png",
    "./moto.png"
  ];

  // Create logo components from the image URLs
  const logos = imageUrls.map((url, i) => (
    <div key={i} className="relative flex flex-shrink-0 w-auto transition-all h-12 md:h-16 mr-20">
      <img 
        src={url}
        alt={`Logo ${i + 1}`}
        className="h-full transition-all duration-300 grayscale invert"
      />
    </div>
  ));

  return (
    <div className="flex overflow-hidden w-full" 
         style={{
           WebkitMask: 'linear-gradient(90deg, transparent, white 5% 95%, transparent)',
           mask: 'linear-gradient(90deg, transparent, white 5% 95%, transparent)'
         }}>
      <div 
        className="flex flex-wrap items-center w-full justify-center gap-20 animate-scroll"
        style={{
          minWidth: 'max-content',
          animation: 'scroll 20s linear infinite'
        }}
      >
        {logos}
        {logos}  {/* Duplicate for seamless loop */}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          will-change: transform;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;