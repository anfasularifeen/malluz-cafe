import React from 'react';
import HeroBanner from './components/HeroBanner';
import SectionHeading from './components/SectionHeading';
import MenuPosterGrid from './components/MenuPosterGrid';
import PosterFooter from './components/PosterFooter';

export function App() {
  return (
    <div className="min-h-screen bg-cafe-bg text-cafe-charcoal flex flex-col justify-between selection:bg-cafe-gold selection:text-white">
      <div>
        {/* 1. Curved Dark Hero Header + Logo + 3 Outlets + Latte Art Photo */}
        <HeroBanner />

        {/* 2. "— Our Menu —" Section Heading */}
        <SectionHeading />

        {/* 3. Pure Uninterrupted Two-Column Poster Menu (All 51 Items) */}
        <main>
          <MenuPosterGrid />
        </main>
      </div>

      {/* 4. Minimal Footer Highlighting 3 Outlets & CookTheWeb */}
      <PosterFooter />
    </div>
  );
}

export default App;
