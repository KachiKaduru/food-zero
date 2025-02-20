import { Carrot, Fish, Fruit } from "./icons";
import starterImg from "@/public/images/menu/starters-img.jpeg";
import mainsImg from "@/public/images/menu/mains-img.png";
import drinksImg from "@/public/images/menu/drinks-img.png";

export const menuData = [
  {
    id: 1,
    name: "Deep Sea Snow White Cod Fillet",
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    category: "main",
    filter: "starters",
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
    category: "Starter",
    filter: "starters",
    img: starterImg,
    title: "Starters",
    description: "This is a section of your menu. Give your section a brief description",
  },
  {
    category: "Lunch",
    filter: "lunch",
    img: mainsImg,
    title: "Mains",
    description: "This is a section of your menu. Give your section a brief description",
  },
  {
    category: "Drinks",
    filter: "drinks",
    img: drinksImg,
    title: "Pastries & Drinks",
    description: "This is a section of your menu. Give your section a brief description",
  },
];

export const mealsFilter = [
  { title: "All", type: "all" },
  { title: "Starter", type: "starters" },
  { title: "Lunch", type: "lunch" },
  { title: "Dinner", type: "dinner" },
  { title: "Sweets", type: "sweets" },
  { title: "Drinks", type: "drinks" },
  { title: "Fruits", type: "fruits" },
];

export const blogsData = [
  {
    id: "1a2b3c4d-5678-9101-1121-314151617181",
    title: "The Art of Cooking with Truffle Oil",
    content: "Truffle oil adds a rich and luxurious flavor to any dish...",
    image:
      "https://unsplash.com/photos/person-slicing-green-vegetable-in-front-of-round-ceramic-plates-with-assorted-sliced-vegetables-during-daytime-EzH46XCDQRY",
    author_id: "user-123",
    author_name: "John Doe",
    created_at: "2025-02-20T12:00:00.000Z",
    likes: 15,
    category: "Food",
    tags: ["Gourmet", "Truffle", "Cooking"],
  },
  {
    id: "5e6f7g8h-9101-1121-3141-516171819202",
    title: "How to Make the Perfect Espresso",
    content: "A great espresso is all about precision...",
    image: "https://unsplash.com/photos/assorted-condiment-lot--bLkT8wGV0I",
    author_id: "user-456",
    author_name: "Jane Smith",
    created_at: "2025-02-19T10:30:00.000Z",
    likes: 27,
    category: "Drinks",
    tags: ["Coffee", "Barista", "Espresso"],
  },
  {
    id: "9i0j1k2l-3141-5161-7181-920212223242",
    title: "The Science Behind Sourdough Bread",
    content: "Sourdough bread is made using a natural fermentation process...",
    image: "https://unsplash.com/photos/sandwich-with-boiled-egg-fdlZBWIP0aM",
    author_id: "user-789",
    author_name: "Alice Baker",
    created_at: "2025-02-18T08:45:00.000Z",
    likes: 12,
    category: "Baking",
    tags: ["Bread", "Fermentation", "Baking"],
  },
];
