import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Tent, 
  Moon, 
  Backpack, 
  Flame, 
  Flashlight, 
  Compass,
  Mountain,
  Shirt,
} from "lucide-react";

const categories = [
  {
    name: "Tenda",
    description: "Dome, tunnel, camping family",
    icon: Tent,
    count: 45,
    href: "/katalog?category=tenda",
    color: "from-primary to-forest-light",
  },
  {
    name: "Sleeping Bag",
    description: "Mummy, rectangular, ultralight",
    icon: Moon,
    count: 32,
    href: "/katalog?category=sleeping-bag",
    color: "from-accent to-rust-dark",
  },
  {
    name: "Carrier & Tas",
    description: "Daypack, carrier 40-80L",
    icon: Backpack,
    count: 28,
    href: "/katalog?category=carrier",
    color: "from-forest-light to-primary",
  },
  {
    name: "Cooking Set",
    description: "Kompor, nesting, peralatan masak",
    icon: Flame,
    count: 56,
    href: "/katalog?category=cooking",
    color: "from-rust-dark to-accent",
  },
  {
    name: "Penerangan",
    description: "Headlamp, senter, lampu tenda",
    icon: Flashlight,
    count: 24,
    href: "/katalog?category=lighting",
    color: "from-stone to-bark",
  },
  {
    name: "Navigasi",
    description: "GPS, kompas, peta",
    icon: Compass,
    count: 18,
    href: "/katalog?category=navigation",
    color: "from-primary to-sage",
  },
  {
    name: "Pendakian",
    description: "Trekking pole, crampon, harness",
    icon: Mountain,
    count: 35,
    href: "/katalog?category=hiking",
    color: "from-forest to-forest-light",
  },
  {
    name: "Pakaian",
    description: "Jaket, celana, raincoat",
    icon: Shirt,
    count: 42,
    href: "/katalog?category=clothing",
    color: "from-accent to-stone",
  },
];

export function Categories() {
  return (
    <section className="py-20">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold text-sm uppercase tracking-wider"
          >
            Eksplorasi Kategori
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2"
          >
            Temukan Gear yang Anda Butuhkan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-3 max-w-2xl mx-auto"
          >
            Dari tenda hingga peralatan masak, kami menyediakan semua kebutuhan outdoor Anda
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                to={category.href}
                className="group block p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-strong text-center"
              >
                {/* Icon */}
                <div 
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>

                {/* Name */}
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mt-1 mb-2">
                  {category.description}
                </p>

                {/* Count */}
                <span className="text-xs font-medium text-accent">
                  {category.count} item tersedia
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
