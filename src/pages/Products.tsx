import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import type { Category } from "@/data/products";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [maxPrice, setMaxPrice] = useState(500);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products.filter(p => {
      if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
      if (p.price > maxPrice) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [selectedCategory, maxPrice, search]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-8">All Products</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters */}
        <div className="w-full md:w-64 shrink-0 space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Search</label>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full px-3 py-2 rounded-lg bg-muted border focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Category</label>
            <div className="space-y-1">
              {["All", ...categories.map(c => c.name)].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat as Category | "All")}
                  className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${selectedCategory === cat ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Max Price: ₹{maxPrice}</label>
            <input
              type="range"
              min={20}
              max={500}
              value={maxPrice}
              onChange={e => setMaxPrice(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">No products found.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
