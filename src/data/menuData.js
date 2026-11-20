export const POSTER_MENU_CATEGORIES = [
  "All",
  "Hot Beverages",
  "Breakfast & Meals",
  "Snacks & Fritters",
  "Juices & Coolers",
  "Burgers, Rolls & Specials",
  "Water & Essentials"
];

export const POSTER_MENU = {
  hotBeverages: {
    id: "hot-beverages",
    category: "Hot Beverages",
    headerTitle: "HOT BEVERAGES",
    items: [
      { name: "Tea", price: 20 },
      { name: "Coffee", price: 25 },
      { name: "Horlicks", price: 25 },
      { name: "Boost", price: 25 },
      { name: "Black Tea", price: 15 },
      { name: "Black Coffee", price: 15 },
      { name: "Mint Tea", price: 15 },
      { name: "Chukk Kaapi", price: 20 },
      { name: "Lime Tea", price: 15 },
      { name: "Milk", price: 20 },
    ]
  },
  juicesAndCoolers: {
    id: "juices-coolers",
    category: "Juices & Coolers",
    headerTitle: "JUICES & COOLERS",
    items: [
      { name: "Grape Juice", price: 50 },
      { name: "Mango Lassi", price: 50 },
      { name: "Watermeion Juice", price: 40 },
      { name: "Punarpuli Juice", price: 20 },
      { name: "Fresh Lime Juice", price: 30 },
      { name: "Lime Soda (Sweet)", price: 30 },
      { name: "Lime Soda (Salt)", price: 30 },
      { name: "Lime Soda (Salt & Sweet)", price: 30 },
    ]
  },
  waterAndEssentials: {
    id: "water-essentials",
    category: "Water & Essentials",
    headerTitle: "WATER & ESSENTIALS",
    items: [
      { name: "Water (½ Ltr)", price: 10 },
      { name: "Water (1 Ltr)", price: 20 },
    ]
  },
  breakfastAndMeals: {
    id: "breakfast-meals",
    category: "Breakfast & Meals",
    headerTitle: "BREAKFAST & MEALS",
    items: [
      { name: "Puttu", price: 40 },
      { name: "Kadala Curry", price: 40 },
      { name: "Pulau", price: 50 },
    ]
  },
  snacksAndFritters: {
    id: "snacks-fritters",
    category: "Snacks & Fritters",
    headerTitle: "SNACKS & FRITTERS",
    col1: [
      { name: "Goilbajji", price: 30 },
      { name: "Pathiri", price: 15 },
      { name: "Elayada", price: 20 },
      { name: "Kalthappam", price: 25 },
      { name: "Masala Bonda", price: 15 },
      { name: "Sugiyan", price: 15 },
      { name: "Egg Samosa", price: 20 },
      { name: "Chicken Samosa", price: 25 },
      { name: "Pazham Pori", price: 15 },
      { name: "Chickem Cutlet", price: 20 },
      { name: "Pazham Narachadh", price: 30 },
    ],
    col2: [
      { name: "Parippu Vada", price: 15 },
      { name: "Pazham Narach Poriclandn", price: 20 },
      { name: "Ulli Vada", price: 15 },
      { name: "Egg Masala", price: 20 },
      { name: "Egg Bond", price: 10, unit: "/ piece" },
      { name: "Chilly Bajji", price: 10, unit: "/ piece" },
      { name: "Kai Pola", price: 40 },
      { name: "Kanthari", price: 20 },
      { name: "Pakoda", price: 30, unit: "/ plate" },
      { name: "Sweet Potato Bajji", price: 30, unit: "/ plate" },
    ]
  },
  burgersRollsSpecials: {
    id: "burgers-rolls-specials",
    category: "Burgers, Rolls & Specials",
    headerTitle: "BURGERS, ROLLS & SPECIALS",
    col1: [
      { name: "Chicken Classic Burger", price: 35 },
      { name: "Chicken Burger", price: 30 },
      { name: "Chicken Roll", price: 30 },
      { name: "Chicken Pocket Shawarma", price: 30 },
    ],
    col2: [
      { name: "Chicken Sandwich", price: 30 },
      { name: "Chicken Chatti Pathiri", price: 40 },
      { name: "Kilikoodu", price: 30 },
    ]
  }
};
