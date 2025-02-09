import { Carrot, Fish, Fruit } from "./icons";
import starterImg from "@/public/images/menu/starters-img.jpeg";
import mainsIng from "@/public/images/menu/mains-img.png";
import drinksImg from "@/public/images/menu/drinks-img.png";

export const menuData = [
  {
    id: 1,
    name: "Deep Sea Snow White Cod Fillet",
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    category: "main",
  },
  {
    id: 2,
    name: "Steak With Rosemary Butter",
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    category: "main",
  },
  {
    id: 3,
    name: "Cucumber Salad",
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    category: "starters",
  },
  {
    id: 4,
    name: "Natural Wine Pairing",
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    category: "drinks",
  },
  {
    id: 5,
    name: "Grilled Okra and Tomatoes ",
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    category: "starters",
  },
  {
    id: 6,
    name: " Basil Pancakes",
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    category: "starters",
  },
  {
    id: 7,
    name: "Steaks with Grilled Kimchi",
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    category: "main",
  },
  {
    id: 8,
    name: "Wine Pairing",
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    category: "drinks",
  },
  {
    id: 9,
    name: "Whisky Flyer",
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    category: "drinks",
  },
  {
    id: 10,
    name: "Braised Sliced Abalone,Fish Maw with Premium Seafood",
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    category: "pastries",
  },
  {
    id: 11,
    name: "Pan Fried Live Prawn with Superior Soy Sauce",
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    category: "dinner",
  },
  {
    id: 12,
    name: "Best pumpkin for pumpkin soup",
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    category: "fruits",
  },
];

export const featuresData = [
  {
    title: "Premium Quality",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu",
    icon: <Fish />,
  },
  {
    title: "Seasonal Vegetables",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu",
    icon: <Carrot />,
  },
  {
    title: "Fresh Fruit",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu",
    icon: <Fruit />,
  },
];

export const categoryData = [
  {
    category: "starters",
    img: starterImg,
    title: "Starters",
    description: "This is a section of your menu. Give your section a brief description",
  },
  {
    category: "main",
    img: mainsIng,
    title: "Mains",
    description: "This is a section of your menu. Give your section a brief description",
  },
  {
    category: "drinks",
    img: drinksImg,
    title: "Pastries & Drinks",
    description: "This is a section of your menu. Give your section a brief description",
  },
];
