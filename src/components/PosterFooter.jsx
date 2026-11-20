import React from 'react';
import { MapPin } from 'lucide-react';

export const PosterFooter = () => {
  return (
    <footer className="mt-8 bg-gradient-to-b from-[#23120A] to-[#170C06] text-white border-t-2 border-[#D97706] shadow-2xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-8">
        
        {/* Refined Centered Heading: "Visit Our Outlets" */}
        <div className="text-center mb-6">
          <div className="max-w-xs sm:max-w-sm mx-auto flex items-center justify-center gap-3">
            <span className="h-px bg-gradient-to-r from-transparent via-[#E09F1F] to-[#E09F1F] flex-1 opacity-70" />
            <h3 className="font-serif font-bold text-base sm:text-lg text-[#FFF8EE] tracking-wider uppercase">
              Visit Our Outlets
            </h3>
            <span className="h-px bg-gradient-to-l from-transparent via-[#E09F1F] to-[#E09F1F] flex-1 opacity-70" />
          </div>
          <p className="text-[11px] text-[#D8C3A5]/80 font-sans tracking-widest uppercase mt-1">
            Mangaluru, Karnataka
          </p>
        </div>

        {/* 3 Outlets Row (Horizontal on Desktop, stacked/neat on mobile) */}
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 pb-8 text-[#FFF8EE]">
          
          {/* Outlet 1: Jeppu */}
          <div className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-full bg-[#3B190B] border border-[#E09F1F]/40 flex items-center justify-center shrink-0 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#E09F1F]" />
            </div>
            <span className="font-sans font-bold text-sm sm:text-base tracking-wide text-[#FFF8EE] group-hover:text-[#F5C451] transition-colors">
              Jeppu
            </span>
          </div>

          {/* Divider */}
          <span className="hidden sm:inline-block text-[#D8C3A5]/40 font-light select-none text-base">
            |
          </span>

          {/* Outlet 2: Attavar */}
          <div className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-full bg-[#3B190B] border border-[#E09F1F]/40 flex items-center justify-center shrink-0 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#E09F1F]" />
            </div>
            <span className="font-sans font-bold text-sm sm:text-base tracking-wide text-[#FFF8EE] group-hover:text-[#F5C451] transition-colors">
              Attavar
            </span>
          </div>

          {/* Divider */}
          <span className="hidden sm:inline-block text-[#D8C3A5]/40 font-light select-none text-base">
            |
          </span>

          {/* Outlet 3: Morgans Gate */}
          <div className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-full bg-[#3B190B] border border-[#E09F1F]/40 flex items-center justify-center shrink-0 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#E09F1F]" />
            </div>
            <span className="font-sans font-bold text-sm sm:text-base tracking-wide text-[#FFF8EE] group-hover:text-[#F5C451] transition-colors">
              Morgans Gate
            </span>
          </div>

        </div>

        {/* Thin subtle divider at the very bottom */}
        <div className="border-t border-[#3B190B]/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#D8C3A5]">
          <p>© Malluz Cafe. All rights reserved.</p>
          <p>
            <span>Crafted by </span>
            <a
              href="https://cooktheweb.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFF8EE] font-semibold hover:text-[#F5C451] transition-colors underline-offset-2 hover:underline"
            >
              CookTheWeb.in
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default PosterFooter;
