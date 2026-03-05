import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalAmount } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingBag size={48} className="mx-auto text-muted-foreground mb-4" />
        <h1 className="text-2xl font-serif font-bold mb-2">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-6">Add some fresh dairy products to your cart!</p>
        <Link to="/products" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <div key={item.product.id} className="flex gap-4 bg-card p-4 rounded-xl border">
              <img src={item.product.image} alt={item.product.name} className="w-20 h-20 rounded-lg object-cover" />
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{item.product.name}</h3>
                <p className="text-xs text-muted-foreground">{item.product.weight}</p>
                <p className="font-bold mt-1">₹{item.product.price}</p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <button onClick={() => removeFromCart(item.product.id)} className="text-destructive hover:opacity-80">
                  <Trash2 size={16} />
                </button>
                <div className="flex items-center border rounded-lg">
                  <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-1 hover:bg-muted"><Minus size={14} /></button>
                  <span className="px-3 text-sm font-semibold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-1 hover:bg-muted"><Plus size={14} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-card p-6 rounded-xl border h-fit">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm mb-4">
            {items.map(item => (
              <div key={item.product.id} className="flex justify-between">
                <span className="text-muted-foreground">{item.product.name} × {item.quantity}</span>
                <span>₹{item.product.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-3 flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span>₹{totalAmount}</span>
          </div>
          <Link to="/checkout" className="block text-center bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
