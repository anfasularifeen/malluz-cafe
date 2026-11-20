import React from 'react';

export const SectionHeading = () => {
  return (
    <div className="pt-8 pb-4 px-4 text-center">
      <div className="max-w-md mx-auto flex items-center justify-center gap-4">
        <span className="h-[1.5px] bg-gradient-to-r from-transparent via-cafe-bar to-cafe-bar flex-1 opacity-60" />
        <h2 className="font-script text-3xl sm:text-4xl text-cafe-title tracking-wide shrink-0">
          Our Menu
        </h2>
        <span className="h-[1.5px] bg-gradient-to-l from-transparent via-cafe-bar to-cafe-bar flex-1 opacity-60" />
      </div>
      <p className="text-xs text-cafe-muted font-sans font-medium mt-1 tracking-wider uppercase">
        Traditional Taste & Quality
      </p>
    </div>
  );
};

export default SectionHeading;

