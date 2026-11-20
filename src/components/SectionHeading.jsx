import React from 'react';

export const SectionHeading = () => {
  return (
    <div className="pt-8 pb-4 px-4 text-center">
      <div className="max-w-md mx-auto flex items-center justify-center gap-4">
        <span className="h-px bg-[#4E2412]/50 flex-1" />
        <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#2B160E] tracking-wider uppercase shrink-0">
          Our Menu
        </h2>
        <span className="h-px bg-[#4E2412]/50 flex-1" />
      </div>
      <p className="text-xs text-[#6E5C4E] font-sans font-semibold mt-1 tracking-widest uppercase">
        Traditional Malabar Taste & Quality
      </p>
    </div>
  );
};

export default SectionHeading;
