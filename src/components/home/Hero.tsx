import { motion } from "framer-motion";
import { Search, MapPin, Calendar, ChevronDown, Shield, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-camping.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Camping di Dieng Plateau"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm">
              <Clock className="w-4 h-4 text-accent" />
              Rental Same-Day
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm">
              <Truck className="w-4 h-4 text-accent" />
              Free Pickup Banjarnegara
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm">
              <Shield className="w-4 h-4 text-accent" />
              Asuransi Tersedia
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-6 text-shadow-hero"
          >
            Sewa Alat Outdoor
            <br />
            <span className="text-gradient-accent bg-gradient-to-r from-accent to-rust-dark bg-clip-text text-transparent">
              Premium di Dieng
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Peralatan camping & hiking berkualitas dengan log kondisi transparan,
            foto inspeksi, dan jaminan kebersihan untuk petualangan Anda di Dieng Plateau.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass rounded-2xl p-4 md:p-6 max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Location */}
              <div className="relative">
                <label className="block text-xs font-medium text-foreground/70 mb-2 text-left">
                  Lokasi Pickup
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <select className="input-glass pl-10 pr-8 appearance-none cursor-pointer">
                    <option>Banjarnegara</option>
                    <option>Dieng Plateau</option>
                    <option>Wonosobo</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Date picker */}
              <div className="relative">
                <label className="block text-xs font-medium text-foreground/70 mb-2 text-left">
                  Tanggal Sewa
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="date"
                    className="input-glass pl-10"
                    defaultValue={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              {/* Category */}
              <div className="relative">
                <label className="block text-xs font-medium text-foreground/70 mb-2 text-left">
                  Kategori Gear
                </label>
                <div className="relative">
                  <select className="input-glass appearance-none cursor-pointer pr-8">
                    <option>Semua Kategori</option>
                    <option>Tenda</option>
                    <option>Sleeping Bag</option>
                    <option>Carrier & Tas</option>
                    <option>Cooking Set</option>
                    <option>Aksesoris</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Search button */}
              <div className="flex items-end">
                <Button className="w-full h-[50px] bg-gradient-accent text-accent-foreground font-semibold shadow-glow hover:shadow-lg transition-all btn-accent-glow">
                  <Search className="w-5 h-5 mr-2" />
                  Cari Gear
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12"
          >
            {[
              { value: "500+", label: "Alat Tersedia" },
              { value: "2000+", label: "Pelanggan Puas" },
              { value: "5★", label: "Rating Google" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
}
