import React from 'react';
import { Coffee, CupSoda, Droplets, UtensilsCrossed, Cookie, Sandwich } from 'lucide-react';
import { POSTER_MENU } from '../data/menuData';

// Solid rich dark brown category header bar (#4E2412) with crisp white text and white icons
const HeaderBar = ({ title, icon: Icon }) => (
  <header className="bg-[#4E2412] text-white rounded-full px-4 py-2 flex items-center justify-center gap-2 shadow-md border border-[#3B190B] mb-3">
    {Icon && <Icon className="w-4 h-4 text-[#F5C451]" aria-hidden="true" />}
    <h3 className="font-sans font-extrabold text-xs sm:text-sm tracking-wider uppercase text-white">
      {title}
    </h3>
  </header>
);

// High-contrast item row with right-aligned price and accessible label
const MenuItemRow = ({ name, price, unit }) => (
  <li className="flex items-baseline justify-between py-1.5 px-1 border-b border-[#E8DFC8] last:border-b-0 hover:bg-[#F3EAD8]/60 rounded transition-colors group">
    <span className="text-xs sm:text-[13px] font-semibold text-[#23120A] tracking-tight group-hover:text-[#4E2412]">
      {name}
    </span>
    <div className="flex items-baseline gap-0.5 shrink-0 pl-2" aria-label={`${price} Rupees ${unit || ''}`}>
      <span className="font-sans font-bold text-xs sm:text-[13px] text-[#23120A]">
        ₹{price}
      </span>
      {unit && (
        <span className="text-[10px] text-[#6E5C4E] font-medium">
          {unit}
        </span>
      )}
    </div>
  </li>
);

export const MenuPosterGrid = () => {
  const hotDrinks = POSTER_MENU.hotBeverages.items;
  const juices = POSTER_MENU.juicesAndCoolers.items;
  const water = POSTER_MENU.waterAndEssentials.items;
  const breakfast = POSTER_MENU.breakfastAndMeals.items;
  const snacksCol1 = POSTER_MENU.snacksAndFritters.col1;
  const snacksCol2 = POSTER_MENU.snacksAndFritters.col2;
  const burgersCol1 = POSTER_MENU.burgersRollsSpecials.col1;
  const burgersCol2 = POSTER_MENU.burgersRollsSpecials.col2;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        
        {/* ======================= LEFT COLUMN ======================= */}
        <div className="space-y-6">
          
          {/* 1. Hot Beverages (10 items) */}
          <section aria-labelledby="heading-hot-beverages" className="bg-[#FFFDF9] rounded-2xl p-4 sm:p-5 border border-[#D8C7B0] shadow-sm">
            <HeaderBar title="HOT BEVERAGES" icon={Coffee} />
            <ul className="space-y-0.5" id="heading-hot-beverages">
              {hotDrinks.map((item, idx) => (
                <MenuItemRow key={idx} name={item.name} price={item.price} />
              ))}
            </ul>
          </section>

          {/* 2. Juices & Coolers (8 items) */}
          <section aria-labelledby="heading-juices" className="bg-[#FFFDF9] rounded-2xl p-4 sm:p-5 border border-[#D8C7B0] shadow-sm">
            <HeaderBar title="JUICES & COOLERS" icon={CupSoda} />
            <ul className="space-y-0.5" id="heading-juices">
              {juices.map((item, idx) => (
                <MenuItemRow key={idx} name={item.name} price={item.price} />
              ))}
            </ul>
          </section>

          {/* 3. Water & Essentials (2 items) */}
          <section aria-labelledby="heading-water" className="bg-[#FFFDF9] rounded-2xl p-4 sm:p-5 border border-[#D8C7B0] shadow-sm">
            <HeaderBar title="WATER & ESSENTIALS" icon={Droplets} />
            <ul className="space-y-0.5" id="heading-water">
              {water.map((item, idx) => (
                <MenuItemRow key={idx} name={item.name} price={item.price} />
              ))}
            </ul>
          </section>

          {/* 4. Bottom-Left Visual Accent: Fresh Fruit Juice Photo */}
          <div className="rounded-2xl overflow-hidden border border-[#D8C7B0] shadow-md bg-gradient-to-br from-amber-50 to-[#F5E6D3] p-2">
            <div className="h-44 sm:h-52 rounded-xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80"
                alt="Fresh Kerala Fruit Juices & Coolers"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                width="600"
                height="300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

        </div>


        {/* ======================= RIGHT COLUMN ======================= */}
        <div className="space-y-6">

          {/* 1. Breakfast & Meals (3 items paired with authentic South Indian breakfast photo) */}
          <section aria-labelledby="heading-breakfast" className="bg-[#FFFDF9] rounded-2xl p-4 sm:p-5 border border-[#D8C7B0] shadow-sm">
            <HeaderBar title="BREAKFAST & MEALS" icon={UtensilsCrossed} />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              {/* Left side: Items */}
              <ul className="space-y-1" id="heading-breakfast">
                {breakfast.map((item, idx) => (
                  <MenuItemRow key={idx} name={item.name} price={item.price} />
                ))}
              </ul>

              {/* Right side: Kerala Breakfast Photo */}
              <div className="rounded-xl overflow-hidden border border-[#D8C7B0] shadow-sm h-32 sm:h-36 relative bg-gradient-to-br from-amber-50 to-[#F5E6D3]">
                <img
                  src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
                  alt="Authentic Kerala Puttu & Kadala Curry Breakfast"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="250"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </section>

          {/* 2. Snacks & Fritters (21 items: Two sub-columns with vertical divider) */}
          <section aria-labelledby="heading-snacks" className="bg-[#FFFDF9] rounded-2xl p-4 sm:p-5 border border-[#D8C7B0] shadow-sm">
            <HeaderBar title="SNACKS & FRITTERS" icon={Cookie} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E8DFC8]">
              {/* Sub-column 1 (11 items) */}
              <ul className="space-y-0.5 pb-2 sm:pb-0 sm:pr-2" id="heading-snacks">
                {snacksCol1.map((item, idx) => (
                  <MenuItemRow key={idx} name={item.name} price={item.price} />
                ))}
              </ul>

              {/* Sub-column 2 (10 items) */}
              <ul className="space-y-0.5 pt-2 sm:pt-0 sm:pl-3">
                {snacksCol2.map((item, idx) => (
                  <MenuItemRow key={idx} name={item.name} price={item.price} unit={item.unit} />
                ))}
              </ul>
            </div>
          </section>

          {/* 3. Burgers, Rolls & Specials (7 items: Two sub-columns + Burger photo on right) */}
          <section aria-labelledby="heading-burgers" className="bg-[#FFFDF9] rounded-2xl p-4 sm:p-5 border border-[#D8C7B0] shadow-sm">
            <HeaderBar title="BURGERS, ROLLS & SPECIALS" icon={Sandwich} />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
              {/* 2 Sub-columns of Items */}
              <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E8DFC8]">
                {/* Sub-list 1 (4 items) */}
                <ul className="space-y-0.5 pb-1 sm:pb-0 sm:pr-2" id="heading-burgers">
                  {burgersCol1.map((item, idx) => (
                    <MenuItemRow key={idx} name={item.name} price={item.price} />
                  ))}
                </ul>

                {/* Sub-list 2 (3 items) */}
                <ul className="space-y-0.5 pt-1 sm:pt-0 sm:pl-2">
                  {burgersCol2.map((item, idx) => (
                    <MenuItemRow key={idx} name={item.name} price={item.price} />
                  ))}
                </ul>
              </div>

              {/* Right side: Crispy Chicken Burger Photo Frame */}
              <div className="rounded-xl overflow-hidden border border-[#D8C7B0] shadow-sm h-28 sm:h-36 relative bg-gradient-to-br from-amber-50 to-[#F5E6D3]">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
                  alt="Crispy Malabar Chicken Burger"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="200"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};

export default MenuPosterGrid;
