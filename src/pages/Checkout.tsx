import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { z } from "zod";

const checkoutSchema = z.object({
  fullName: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Valid phone required").max(15),
  address: z.string().trim().min(1, "Address is required").max(300),
  city: z.string().trim().min(1, "City is required").max(100),
  pincode: z.string().trim().min(6, "Valid pincode required").max(10),
});

const Checkout = () => {
  const { items, totalAmount, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: "", phone: "", address: "", city: "", pincode: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = checkoutSchema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach(i => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    clearCart();
    toast.success("Order placed successfully!");
    navigate("/order-confirmation");
  };

  const update = (key: string, val: string) => setForm(f => ({ ...f, [key]: val }));

  const fields = [
    { key: "fullName", label: "Full Name", type: "text" },
    { key: "phone", label: "Phone Number", type: "tel" },
    { key: "address", label: "Address", type: "text" },
    { key: "city", label: "City", type: "text" },
    { key: "pincode", label: "Pincode", type: "text" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map(f => (
            <div key={f.key}>
              <label className="block text-sm font-semibold mb-1">{f.label}</label>
              <input
                type={f.type}
                value={(form as any)[f.key]}
                onChange={e => update(f.key, e.target.value)}
                className="w-full px-3 py-2 rounded-lg border bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
              />
              {errors[f.key] && <p className="text-destructive text-xs mt-1">{errors[f.key]}</p>}
            </div>
          ))}
          <div>
            <label className="block text-sm font-semibold mb-1">Payment Method</label>
            <div className="px-3 py-2 rounded-lg border bg-muted text-sm text-muted-foreground">Cash on Delivery</div>
          </div>
          <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:opacity-90 transition-opacity mt-4">
            Place Order
          </button>
        </form>
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
          <div className="border-t pt-3 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{totalAmount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
