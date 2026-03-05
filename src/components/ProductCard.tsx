import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="bg-card rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow">
        <div className="aspect-square overflow-hidden bg-muted">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-4">
          <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
          <h3 className="font-semibold text-sm mb-1 text-card-foreground">{product.name}</h3>
          <p className="text-xs text-muted-foreground mb-2">{product.weight}</p>
          <div className="flex items-center gap-1 mb-3">
            <Star size={14} className="fill-primary text-primary" />
            <span className="text-xs text-muted-foreground">{product.rating}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-bold text-foreground">₹{product.price}</span>
            <button
              onClick={handleAdd}
              className="p-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <ShoppingCart size={16} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
