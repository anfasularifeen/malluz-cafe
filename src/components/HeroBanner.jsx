import React from 'react';

export const HeroBanner = () => {
  return (
    <header className="relative bg-gradient-to-b from-[#23120A] via-[#2A150C] to-[#381B0F] text-white pt-8 pb-12 sm:pb-16 px-4 md:px-8 overflow-hidden rounded-b-[36px] md:rounded-b-[56px] shadow-2xl border-b-2 border-[#D97706]/40">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative z-10">
        
        {/* Left Side: Malluz Cafe Logo + Subtitle */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-2.5">
          
          {/* Authentic Logo */}
          <div className="relative">
            <img 
              src="/malluz-cafe-logo.png" 
              alt="Malluz Cafe" 
              className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-xl"
              width="300"
              height="150"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Subtitle in Warm Gold (#F5C451) */}
          <p className="font-sans text-xs sm:text-sm font-extrabold text-[#F5C451] tracking-[0.25em] uppercase drop-shadow-sm">
            TEA • COFFEE • SNACKS • MORE
          </p>

          <p className="text-xs text-[#FFF8EE]/80 font-serif italic max-w-sm hidden sm:block pt-0.5">
            Authentic Kerala taste brewed fresh with aromatic spices and crispy hot savories.
          </p>
        </div>

        {/* Right Side: Latte Art Coffee Cup Photo */}
        <div className="relative shrink-0 flex items-center justify-center">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full p-1.5 bg-gradient-to-tr from-[#F5C451]/30 via-[#F5C451]/70 to-[#4E2412] shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#F5C451]/50 relative bg-[#23120A]">
              <img
                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80"
                alt="Malluz Cafe Fresh Hot Chaya & Coffee"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                width="200"
                height="200"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>

      </div>

    </header>
  );
};

export default HeroBanner;
