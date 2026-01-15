import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Star, 
  ShoppingBag,
  SlidersHorizontal,
  X,
  ChevronDown 
} from "lucide-react";

// Sample product data
const allProducts = [
  {
    id: 1,
    name: "Tenda Dome Kapasitas 4 Orang",
    category: "Tenda",
    pricePerDay: 75000,
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
    rating: 4.9,
    reviews: 156,
    condition: "Excellent",
    stock: 12,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
  },
  {
    id: 4,
    name: "Kompor Portable + Gas",
    category: "Cooking Set",
    pricePerDay: 25000,
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
    rating: 4.6,
    reviews: 43,
    condition: "Very Good",
    stock: 25,
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=600&q=80",
  },
  {
    id: 6,
    name: "Tenda Dome 2 Orang Ultralight",
    category: "Tenda",
    pricePerDay: 50000,
    rating: 4.8,
    reviews: 98,
    condition: "Excellent",
    stock: 6,
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=600&q=80",
  },
  {
    id: 7,
    name: "Headlamp LED 500 Lumens",
    category: "Penerangan",
    pricePerDay: 15000,
    rating: 4.7,
    reviews: 52,
    condition: "Very Good",
    stock: 30,
    image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=600&q=80",
  },
  {
    id: 8,
    name: "Trekking Pole Carbon Pair",
    category: "Pendakian",
    pricePerDay: 35000,
    rating: 4.9,
    reviews: 76,
    condition: "Excellent",
    stock: 10,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
  },
  {
    id: 9,
    name: "Nesting Set Aluminium",
    category: "Cooking Set",
    pricePerDay: 20000,
    rating: 4.5,
    reviews: 38,
    condition: "Good",
    stock: 18,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    id: 10,
    name: "Jaket Windbreaker Waterproof",
    category: "Pakaian",
    pricePerDay: 40000,
    rating: 4.8,
    reviews: 64,
    condition: "Excellent",
    stock: 8,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
  },
  {
    id: 11,
    name: "Sleeping Bag -15°C Extreme",
    category: "Sleeping Bag",
    pricePerDay: 65000,
    rating: 4.9,
    reviews: 45,
    condition: "Excellent",
    stock: 5,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=600&q=80",
  },
  {
    id: 12,
    name: "Carrier 40L Daypack",
    category: "Carrier & Tas",
    pricePerDay: 35000,
    rating: 4.6,
    reviews: 82,
    condition: "Very Good",
    stock: 15,
    image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=600&q=80",
  },
];

const categories = ["Semua", "Tenda", "Sleeping Bag", "Carrier & Tas", "Cooking Set", "Penerangan", "Pendakian", "Pakaian", "Alas Tidur"];

function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

export default function Katalog() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("popular");

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Semua" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.pricePerDay - b.pricePerDay;
      case "price-high":
        return b.pricePerDay - a.pricePerDay;
      case "rating":
        return b.rating - a.rating;
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="section-container">
          {/* Page header */}
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-display font-bold text-foreground"
            >
              Katalog Gear
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mt-2"
            >
              {sortedProducts.length} item tersedia untuk disewa
            </motion.p>
          </div>

          {/* Filters bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col lg:flex-row gap-4 mb-8"
          >
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari gear..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-glass pl-12 w-full"
              />
            </div>

            {/* Category pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              {categories.slice(0, 5).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filter
              </button>
            </div>

            {/* View toggle & Sort */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="input-glass pr-10 appearance-none cursor-pointer text-sm"
                >
                  <option value="popular">Terpopuler</option>
                  <option value="price-low">Harga Terendah</option>
                  <option value="price-high">Harga Tertinggi</option>
                  <option value="rating">Rating Tertinggi</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
              <div className="flex items-center border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2.5 ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "bg-card hover:bg-secondary"}`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2.5 ${viewMode === "list" ? "bg-primary text-primary-foreground" : "bg-card hover:bg-secondary"}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Extended filters panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Filter Lanjutan</h3>
                <button onClick={() => setShowFilters(false)} className="p-1 hover:bg-secondary rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Products grid */}
          <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}>
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`card-elevated overflow-hidden ${viewMode === "list" ? "flex" : ""}`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${viewMode === "list" ? "w-48 flex-shrink-0" : "h-48"}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 badge-popular">
                      {product.badge}
                    </span>
                  )}
                  {product.stock < 10 && (
                    <span className="absolute top-3 right-3 badge-urgent">
                      Sisa {product.stock}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-semibold text-foreground mt-1 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                    <span className="badge-stock ml-auto">{product.condition}</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-lg font-bold text-primary">
                        {formatPrice(product.pricePerDay)}
                        <span className="text-sm font-normal text-muted-foreground">/hari</span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-accent text-accent-foreground"
                      asChild
                    >
                      <a
                        href={`https://wa.me/6281947223925?text=Halo%2C%20saya%20ingin%20menyewa%20${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ShoppingBag className="w-4 h-4 mr-1" />
                        Sewa
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty state */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <Search className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tidak ada hasil</h3>
              <p className="text-muted-foreground">
                Coba ubah filter atau kata kunci pencarian Anda
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
