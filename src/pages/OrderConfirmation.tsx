import { Link } from "react-router-dom";
import { CheckCircle, Package } from "lucide-react";

const OrderConfirmation = () => {
  const orderNumber = `FD${Date.now().toString().slice(-8)}`;

  return (
    <div className="container mx-auto px-4 py-16 text-center max-w-lg">
      <div className="bg-card p-10 rounded-xl border">
        <CheckCircle size={64} className="mx-auto text-success mb-4" />
        <h1 className="text-3xl font-serif font-bold mb-2">Thank You!</h1>
        <p className="text-muted-foreground mb-6">Your order has been placed successfully.</p>
        
        <div className="bg-muted rounded-lg p-4 mb-6 text-left space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Order Number</span>
            <span className="font-semibold">{orderNumber}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Status</span>
            <span className="text-success font-semibold flex items-center gap-1"><Package size={14} /> Confirmed</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Delivery</span>
            <span className="font-semibold">Within 2-3 hours</span>
          </div>
        </div>

        <Link to="/" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
