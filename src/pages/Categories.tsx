import { useSearchParams, Link } from "react-router-dom";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Categories = () => {
  const [params] = useSearchParams();
  const selectedCat = params.get("cat");

  if (selectedCat) {
    const catProducts = products.filter(p => p.category === selectedCat);
    const catInfo = categories.find(c => c.name === selectedCat);
    return (
      <div className="container mx-auto px-4 py-8">
        <Link to="/categories" className="text-sm text-primary hover:underline mb-4 inline-block">← All Categories</Link>
        <h1 className="text-3xl font-serif font-bold mb-2">{selectedCat}</h1>
        <p className="text-muted-foreground mb-8">{catInfo?.description}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {catProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-8">Shop by Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(cat => (
          <Link key={cat.name} to={`/categories?cat=${cat.name}`} className="group bg-card rounded-xl border overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video overflow-hidden">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-serif font-bold mb-1">{cat.name}</h2>
              <p className="text-sm text-muted-foreground">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
