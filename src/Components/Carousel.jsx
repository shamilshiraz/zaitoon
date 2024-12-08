import React from 'react';
import { Globe } from 'lucide-react';

const RibbonLogos = () => {
  const rows = [
    ["Stripe", "Shopify", "Google", "Amazon", "Meta", "Apple", "Microsoft", "Twitch", "Tesla", "IBM"],
    ["Netflix", "Adobe", "Slack", "Zoom", "Twitter", "LinkedIn", "Spotify", "Disney", "PayPal", "Unity"],
    ["Uber", "Airbnb", "Pinterest", "Reddit", "Oracle", "Intel", "Samsung", "Sony", "Nvidia", "Dell"]
  ];

  const LogoBox = ({ name }) => (
    <div className="flex items-center justify-center px-8 py-4 bg-white backdrop-blur-sm rounded-lg min-w-[200px]">
      <Globe className="w-5 h-5 mr-3 text-black" />
      <span className="text-sm font-medium text-white/70">{name}</span>
    </div>
  );

  const CarouselRow = ({ items, reverse = false }) => {
    const repeatedItems = [...items, ...items, ...items, ...items];
    
    return (
      <div 
        className="flex animate-scroll gap-4"
        style={{
          animationDirection: reverse ? 'reverse' : 'normal',
          width: 'max-content'
        }}
      >
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <LogoBox name={item} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full  flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-6xl space-y-8">
        <div className="w-full overflow-hidden">
          <CarouselRow items={rows[0]} />
        </div>
        <div className="w-full overflow-hidden">
          <CarouselRow items={rows[1]} reverse={true} />
        </div>
        {/* <div className="w-full overflow-hidden">
          <CarouselRow items={rows[2]} />
        </div> */}
      </div>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RibbonLogos;