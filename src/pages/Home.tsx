import { Link } from "react-router-dom";
import { Truck, Leaf, Droplets, Star } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const Home = () => {
  const featured = products.filter(p => p.rating >= 4.6).slice(0, 4);
  const latest = products.slice(-4);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[400px] flex items-center" style={{ backgroundImage: "url('/image/hero-banner.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-background font-bold leading-tight mb-4">
              Farm Fresh Dairy,<br />Delivered Daily
            </h1>
            <p className="text-background/80 text-lg mb-6">
              Pure, organic dairy products straight from our farms to your table.
            </p>
            <Link to="/products" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Droplets, title: "100% Fresh Milk", desc: "Sourced directly from healthy, well-fed cows" },
              { icon: Leaf, title: "Organic Products", desc: "No preservatives, no chemicals, purely natural" },
              { icon: Truck, title: "Fast Delivery", desc: "Fresh products delivered within hours" },
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-card rounded-xl border">
                <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                  <b.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-10">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-10">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map(cat => (
              <Link key={cat.name} to={`/categories?cat=${cat.name}`} className="group text-center p-4 bg-card rounded-xl border hover:shadow-md transition-shadow">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-3">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-semibold text-sm">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-10">Latest Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {latest.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* About Our Store */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-6">About Fresh Dairy Store</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fresh Dairy Store is your trusted source for pure, organic dairy products delivered straight from our family farm to your doorstep. We are committed to quality, freshness, and the traditional taste that your family deserves.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              From farm-fresh cow and buffalo milk to hand-churned butter, soft paneer, rich ghee, artisan cheese, and creamy yogurt — every product is made with care, free from preservatives and chemicals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We deliver within hours to ensure maximum freshness. Join thousands of happy families who trust Fresh Dairy Store for their daily dairy needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
