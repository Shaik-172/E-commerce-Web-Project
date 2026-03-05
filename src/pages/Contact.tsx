import { useState } from "react";
import { Phone, Mail, MapPin, User } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach(i => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    toast.success("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3"><Phone size={18} className="text-primary" /> +91 9182960582</div>
              <div className="flex items-center gap-3"><Mail size={18} className="text-primary" /> mr5487785@gmail.com</div>
              <div className="flex items-center gap-3"><MapPin size={18} className="text-primary" /> Suresh Nagar, Anantapur</div>
              <div className="flex items-center gap-3"><User size={18} className="text-primary" /> Shaik Mohammed Khaja Nawaz</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0!2d72.83!3d19.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzQ4LjAiTiA3MsKwNDknNDguMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              title="Location"
            />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { key: "name", label: "Name", type: "text" },
            { key: "email", label: "Email", type: "email" },
          ].map(f => (
            <div key={f.key}>
              <label className="block text-sm font-semibold mb-1">{f.label}</label>
              <input
                type={f.type}
                value={(form as any)[f.key]}
                onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                className="w-full px-3 py-2 rounded-lg border bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
              />
              {errors[f.key] && <p className="text-destructive text-xs mt-1">{errors[f.key]}</p>}
            </div>
          ))}
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              rows={5}
              value={form.message}
              onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
              className="w-full px-3 py-2 rounded-lg border bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm resize-none"
            />
            {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
          </div>
          <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
