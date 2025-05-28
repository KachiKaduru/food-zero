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
  // {
  //   id: "1a2b3c4d-5678-9101-1121-314151617181",
  //   title: "The Art of Cooking with Truffle Oil",
  //   content: {
  //     sections: [
  //       {
  //         introduction:
  //           "Truffle oil is a luxurious ingredient that can elevate simple dishes to gourmet status. But cooking with it requires a delicate touch. This guide will help you understand how to make the most of this aromatic oil in your kitchen.",
  //       },
  //       {
  //         heading: "Understanding Truffle Oil",
  //         content:
  //           "Truffle oil is typically infused with either white or black truffles, each offering unique flavors. White truffle oil is more garlicky and delicate, while black truffle oil has an earthier, more robust taste.",
  //       },
  //       {
  //         heading: "Best Uses for Truffle Oil",
  //         list: [
  //           "Drizzling Over Dishes: Use truffle oil as a finishing touch on pasta, risotto, or pizza.",
  //           "Elevating Simple Ingredients: Try it over scrambled eggs, mashed potatoes, or popcorn for a gourmet twist.",
  //           "Salads and Dressings: A few drops can enhance vinaigrettes and salads.",
  //         ],
  //       },
  //       {
  //         heading: "Common Mistakes to Avoid",
  //         list: [
  //           "Cooking with Truffle Oil: Heat destroys the delicate truffle aroma, so always add it at the end.",
  //           "Overusing It: A little goes a long way—start with a few drops and adjust to taste.",
  //         ],
  //       },
  //       {
  //         conclusion:
  //           "By using truffle oil wisely, you can transform everyday meals into sophisticated culinary experiences.",
  //       },
  //     ],
  //   },
  //   image:
  //     "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   author_id: "user-123",
  //   author_name: "John Doe",
  //   created_at: "2025-02-20T12:00:00.000Z",
  //   likes: 15,
  //   category: "Food",
  //   tags: ["Gourmet", "Truffle", "Cooking"],
  // },
  {
    id: "1a2b3c4d-5678-9101-1121-314151617181",
    title: "The Art of Cooking with Truffle Oil",
    content: "Truffle oil adds a rich and luxurious flavor to any dish...",
    image:
      "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author_id: "user-123",
    author_name: "John Doe",
    created_at: "2025-02-20T12:00:00.000Z",
    likes: 15,
    comments: 2,
    category: "Food",
    tags: ["Gourmet", "Truffle", "Cooking"],
  },
  {
    id: "5e6f7g8h-9101-1121-3141-516171819202",
    title: "How to Make the Perfect Espresso",
    content: "A great espresso is all about precision...",
    image:
      "https://images.unsplash.com/photo-1540420828642-fca2c5c18abe?q=80&w=1582&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author_id: "user-456",
    author_name: "Jane Smith",
    created_at: "2025-02-19T10:30:00.000Z",
    likes: 27,
    comments: 3,
    category: "Drinks",
    tags: ["Coffee", "Barista", "Espresso"],
  },
  {
    id: "9i0j1k2l-3141-5161-7181-920212223242",
    title: "The Science Behind Sourdough Bread",
    content: "Sourdough bread is made using a natural fermentation process...",
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author_id: "user-789",
    author_name: "Alice Baker",
    created_at: "2025-02-18T08:45:00.000Z",
    likes: 12,
    comments: 0,
    category: "Baking",
    tags: ["Bread", "Fermentation", "Baking"],
  },
];
