import { Leaf, Droplets, Award, Star, Quote } from "lucide-react";

const About = () => (
  <div>
    <section className="relative h-[50vh] min-h-[300px] flex items-center" style={{ backgroundImage: "url('/image/about-farm.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-background mb-4">About Us</h1>
        <p className="text-background/80 text-lg max-w-xl mx-auto">From our farm to your family — delivering freshness since 2020</p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">Our Story</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Fresh Dairy Store began with a simple dream — to bring pure, unadulterated dairy products from our family farm directly to your kitchen. We believe in traditional farming methods, happy cows, and products free from preservatives and chemicals.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Today, we serve thousands of families with fresh milk, paneer, butter, ghee, cheese, and yogurt — all produced with love and care at our organic farm.
        </p>
      </div>
    </section>

    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Droplets, title: "100% Fresh Milk", desc: "Milked daily from healthy, grass-fed cows" },
            { icon: Award, title: "Farm Quality", desc: "Strict quality checks at every step" },
            { icon: Leaf, title: "Natural Products", desc: "No preservatives, no additives" },
          ].map((f, i) => (
            <div key={i} className="text-center p-6 bg-card rounded-xl border">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <f.icon size={28} />
              </div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-10">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            { name: "Meera K.", text: "Switching to Fresh Dairy was the best decision. The taste of real farm-fresh milk is incomparable." },
            { name: "Suresh B.", text: "Their ghee is pure gold! My rotis have never tasted better." },
          ].map((t, i) => (
            <div key={i} className="bg-card p-6 rounded-xl border">
              <Quote size={20} className="text-primary/30 mb-3" />
              <p className="text-sm text-muted-foreground mb-3">{t.text}</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">{t.name[0]}</div>
                <span className="text-sm font-semibold">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
