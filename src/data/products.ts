export type Category = "Milk" | "Paneer" | "Butter" | "Cheese" | "Ghee" | "Yogurt";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  rating: number;
  description: string;
  weight: string;
}

export const categories: { name: Category; image: string; description: string }[] = [
  { name: "Milk", image: "/image/product/cow-milk.jpg", description: "Farm-fresh milk delivered daily to your doorstep." },
  { name: "Paneer", image: "/image/product/paneer.jpg", description: "Soft and fresh cottage cheese made from pure milk." },
  { name: "Butter", image: "/image/product/butter.jpg", description: "Creamy and smooth butter churned from fresh cream." },
  { name: "Cheese", image: "/image/product/cheese.jpg", description: "Rich and flavorful cheese for every occasion." },
  { name: "Ghee", image: "/image/product/ghee.jpg", description: "Pure desi ghee made from traditional methods." },
  { name: "Yogurt", image: "/image/product/yogurt.jpg", description: "Thick and creamy yogurt packed with probiotics." },
];

export const products: Product[] = [
  { id: "1", name: "Farm Fresh Cow Milk", price: 60, category: "Milk", image: "/image/product/cow-milk.jpg", rating: 4.5, description: "Pure and fresh cow milk sourced directly from our organic farms. Rich in calcium and essential nutrients. Delivered fresh every morning.", weight: "1 Litre" },
  { id: "2", name: "Premium Buffalo Milk", price: 80, category: "Milk", image: "/image/product/buffalo-milk.jpg", rating: 4.3, description: "Thick and creamy buffalo milk with high fat content. Perfect for making sweets, curd, and paneer at home.", weight: "1 Litre" },
  { id: "3", name: "Fresh Paneer", price: 120, category: "Paneer", image: "/image/product/paneer.jpg", rating: 4.7, description: "Soft and fresh cottage cheese made from pure cow milk. Perfect for curries, tikkas, and snacks.", weight: "200g" },
  { id: "4", name: "Malai Paneer", price: 150, category: "Paneer", image: "/image/product/paneer.jpg", rating: 4.6, description: "Extra creamy paneer with rich malai texture. Ideal for special dishes and celebrations.", weight: "250g" },
  { id: "5", name: "Farm Fresh Butter", price: 90, category: "Butter", image: "/image/product/butter.jpg", rating: 4.8, description: "Hand-churned butter from fresh cream. Smooth, creamy, and full of natural flavor.", weight: "100g" },
  { id: "6", name: "Salted Butter", price: 95, category: "Butter", image: "/image/product/butter.jpg", rating: 4.4, description: "Lightly salted butter perfect for spreading on toast and bread. Made from premium quality cream.", weight: "100g" },
  { id: "7", name: "Cheddar Cheese", price: 180, category: "Cheese", image: "/image/product/cheese.jpg", rating: 4.5, description: "Aged cheddar cheese with sharp and tangy flavor. Perfect for sandwiches, burgers, and pasta.", weight: "200g" },
  { id: "8", name: "Mozzarella Cheese", price: 200, category: "Cheese", image: "/image/product/cheese.jpg", rating: 4.6, description: "Stretchy mozzarella cheese perfect for pizzas and Italian dishes. Made from fresh buffalo milk.", weight: "200g" },
  { id: "9", name: "Pure Desi Ghee", price: 350, category: "Ghee", image: "/image/product/ghee.jpg", rating: 4.9, description: "Traditional bilona method pure desi ghee. Rich aroma, golden color, and authentic taste.", weight: "500g" },
  { id: "10", name: "Organic Ghee", price: 450, category: "Ghee", image: "/image/product/ghee.jpg", rating: 4.8, description: "Certified organic ghee from grass-fed cows. Premium quality for health-conscious families.", weight: "500g" },
  { id: "11", name: "Natural Yogurt", price: 40, category: "Yogurt", image: "/image/product/yogurt.jpg", rating: 4.4, description: "Thick and creamy set yogurt made from whole milk. Rich in probiotics for gut health.", weight: "400g" },
  { id: "12", name: "Greek Yogurt", price: 70, category: "Yogurt", image: "/image/product/yogurt.jpg", rating: 4.6, description: "High-protein Greek yogurt with smooth and creamy texture. Perfect for smoothies and breakfast.", weight: "200g" },
];
