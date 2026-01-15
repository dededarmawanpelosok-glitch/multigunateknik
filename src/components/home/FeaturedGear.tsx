import { motion } from "framer-motion";
import { Star, ShoppingBag, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

const featuredItems = [
  {
    id: 1,
    name: "Tenda Dome Kapasitas 4 Orang",
    category: "Tenda",
    pricePerDay: 75000,
    pricePerWeek: 250000,
    rating: 4.9,
    reviews: 124,
    condition: "Excellent",
    stock: 8,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
  },
  {
    id: 2,
    name: "Sleeping Bag -5°C Ultralight",
    category: "Sleeping Bag",
    pricePerDay: 45000,
    pricePerWeek: 150000,
    rating: 4.8,
    reviews: 89,
    condition: "Very Good",
    stock: 15,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=600&q=80",
  },
  {
    id: 3,
    name: "Carrier 60L Waterproof",
    category: "Carrier & Tas",
    pricePerDay: 55000,
    pricePerWeek: 180000,
    rating: 4.9,
    reviews: 156,
    condition: "Excellent",
    stock: 12,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
  },
  {
    id: 4,
    name: "Kompor Portable + Gas",
    category: "Cooking Set",
    pricePerDay: 25000,
    pricePerWeek: 80000,
    rating: 4.7,
    reviews: 67,
    condition: "Good",
    stock: 20,
    image: "https://images.unsplash.com/photo-1571687949921-1306bfb24b72?w=600&q=80",
  },
  {
    id: 5,
    name: "Matras Foam Premium",
    category: "Alas Tidur",
    pricePerDay: 15000,
    pricePerWeek: 50000,
    rating: 4.6,
    reviews: 43,
    condition: "Very Good",
    stock: 25,
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=600&q=80",
  },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

function GearCard({ item, index }: { item: typeof featuredItems[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex-shrink-0 w-[280px] md:w-[320px]"
    >
      <div 
        className="card-elevated overflow-hidden"
        style={{
          transform: isHovered 
            ? "perspective(1000px) rotateY(-2deg) rotateX(2deg) translateY(-8px)" 
            : "perspective(1000px) rotateY(0) rotateX(0) translateY(0)",
          transition: "transform 0.4s ease-out",
        }}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Badge */}
          {item.badge && (
            <span className="absolute top-3 left-3 badge-popular">
              {item.badge}
            </span>
          )}
          {/* Stock warning */}
          {item.stock < 10 && (
            <span className="absolute top-3 right-3 badge-urgent">
              Sisa {item.stock}
            </span>
          )}
          {/* Quick actions overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-foreground/40 flex items-center justify-center gap-3"
          >
            <Button size="sm" variant="secondary" className="rounded-full">
              <Eye className="w-4 h-4 mr-1" />
              Quick View
            </Button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category */}
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            {item.category}
          </span>

          {/* Name */}
          <h3 className="font-semibold text-foreground mt-1 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {item.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="text-sm font-medium">{item.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              ({item.reviews} ulasan)
            </span>
            <span className="badge-stock ml-auto">{item.condition}</span>
          </div>

          {/* Pricing */}
          <div className="flex items-end justify-between">
            <div>
              <div className="text-xl font-bold text-primary">
                {formatPrice(item.pricePerDay)}
                <span className="text-sm font-normal text-muted-foreground">/hari</span>
              </div>
              <div className="text-sm text-muted-foreground">
                {formatPrice(item.pricePerWeek)}/minggu
              </div>
            </div>
            <Button
              size="sm"
              className="bg-gradient-accent text-accent-foreground hover:shadow-glow transition-shadow"
              asChild
            >
              <a
                href={`https://wa.me/6281947223925?text=Halo%2C%20saya%20ingin%20menyewa%20${encodeURIComponent(item.name)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShoppingBag className="w-4 h-4 mr-1" />
                Sewa
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedGear() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-semibold text-sm uppercase tracking-wider"
            >
              Gear Unggulan
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2"
            >
              Peralatan Terpopuler
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground mt-2 max-w-xl"
            >
              Pilihan gear berkualitas yang paling sering disewa oleh para petualang
            </motion.p>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-border bg-card hover:bg-secondary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-border bg-card hover:bg-secondary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        >
          {featuredItems.map((item, index) => (
            <div key={item.id} className="snap-start">
              <GearCard item={item} index={index} />
            </div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="/katalog">
              Lihat Semua Katalog
              <ChevronRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
