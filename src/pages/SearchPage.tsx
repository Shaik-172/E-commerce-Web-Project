import { useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Search as SearchIcon } from "lucide-react";

const SearchPage = () => {
  const [params] = useSearchParams();
  const initialQuery = params.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-6">Search Products</h1>
      <div className="relative max-w-lg mb-8">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for dairy products..."
          className="w-full px-4 py-3 pl-12 rounded-full border bg-card focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <SearchIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
      </div>
      {query.trim() && (
        <p className="text-sm text-muted-foreground mb-4">{results.length} result{results.length !== 1 ? "s" : ""} for "{query}"</p>
      )}
      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {results.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      ) : query.trim() ? (
        <p className="text-center text-muted-foreground py-12">No products found.</p>
      ) : null}
    </div>
  );
};

export default SearchPage;
