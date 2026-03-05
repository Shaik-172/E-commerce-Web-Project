import { useParams, Link } from "react-router-dom";
import { Star, Minus, Plus, ShoppingCart } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { toast } from "sonner";
import ProductCard from "@/components/ProductCard";

const ProductView = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-serif font-bold mb-4">Product Not Found</h1>
        <Link to="/products" className="text-primary hover:underline">Back to Products</Link>
      </div>
    );
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    toast.success(`${qty}x ${product.name} added to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="aspect-square rounded-xl overflow-hidden bg-muted">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
          <h1 className="text-3xl font-serif font-bold mb-2">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className={i < Math.floor(product.rating) ? "fill-primary" : "fill-muted text-muted"} />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.rating})</span>
          </div>
          <p className="text-3xl font-bold text-primary mb-4">₹{product.price}</p>
          <p className="text-sm text-muted-foreground mb-1">Weight: {product.weight}</p>
          <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-lg">
              <button onClick={() => setQty(q => Math.max(1, q - 1))} className="p-2 hover:bg-muted transition-colors"><Minus size={16} /></button>
              <span className="px-4 font-semibold">{qty}</span>
              <button onClick={() => setQty(q => q + 1)} className="p-2 hover:bg-muted transition-colors"><Plus size={16} /></button>
            </div>
            <button onClick={handleAdd} className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
              <ShoppingCart size={18} /> Add to Cart
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div>
          <h2 className="text-2xl font-serif font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductView;
