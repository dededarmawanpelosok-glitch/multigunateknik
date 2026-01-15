import { motion } from "framer-motion";
import { Check, ArrowRight, Users, Tent, Mountain, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    id: 1,
    name: "Paket Solo Backpacker",
    tagline: "Untuk petualang minimalis",
    icon: Mountain,
    pricePerDay: 85000,
    pricePerWeek: 280000,
    savings: "Hemat Rp35.000",
    items: [
      "Tenda 2 orang",
      "Sleeping bag -5°C",
      "Matras foam",
      "Carrier 40L",
      "Headlamp LED",
    ],
    popular: false,
    color: "border-primary/30 hover:border-primary",
  },
  {
    id: 2,
    name: "Paket Family Camp",
    tagline: "Camping seru bersama keluarga",
    icon: Users,
    pricePerDay: 180000,
    pricePerWeek: 550000,
    savings: "Hemat Rp90.000",
    items: [
      "Tenda dome 6 orang",
      "4x Sleeping bag",
      "4x Matras foam",
      "Meja lipat camping",
      "Kompor + nesting set",
      "Lampu tenda LED",
      "Terpal groundsheet",
    ],
    popular: true,
    color: "border-accent ring-2 ring-accent/20",
  },
  {
    id: 3,
    name: "Paket Alpine Setup",
    tagline: "Untuk kondisi ekstrem",
    icon: Snowflake,
    pricePerDay: 250000,
    pricePerWeek: 750000,
    savings: "Hemat Rp120.000",
    items: [
      "Tenda ultralight waterproof",
      "Sleeping bag -15°C",
      "Matras self-inflate",
      "Carrier 60L premium",
      "Trekking pole (pair)",
      "Headlamp 500 lumens",
      "Emergency kit",
      "Rain cover carrier",
    ],
    popular: false,
    color: "border-forest-light/30 hover:border-forest-light",
  },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

export function RentalPackages() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold text-sm uppercase tracking-wider"
          >
            Paket Hemat
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2"
          >
            Rental Bundling Lebih Hemat
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-3 max-w-2xl mx-auto"
          >
            Pilih paket sesuai kebutuhan trip Anda dan nikmati harga spesial
          </motion.p>
        </div>

        {/* Packages grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-6 rounded-2xl bg-card border-2 ${pkg.color} transition-all duration-300 hover:shadow-strong flex flex-col`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="badge-popular">
                    Paling Populer
                  </span>
                </div>
              )}

              {/* Icon & Title */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${pkg.popular ? 'bg-gradient-accent' : 'bg-primary/10'} flex items-center justify-center`}>
                  <pkg.icon className={`w-8 h-8 ${pkg.popular ? 'text-white' : 'text-primary'}`} />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  {pkg.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {pkg.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-foreground">
                  {formatPrice(pkg.pricePerDay)}
                  <span className="text-base font-normal text-muted-foreground">/hari</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {formatPrice(pkg.pricePerWeek)}/minggu
                </div>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {pkg.savings}
                </span>
              </div>

              {/* Items list */}
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full ${pkg.popular ? 'bg-gradient-accent text-accent-foreground shadow-glow' : 'bg-primary text-primary-foreground'}`}
                asChild
              >
                <a
                  href={`https://wa.me/6281947223925?text=Halo%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(pkg.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book via WhatsApp
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Custom bundle CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Butuh kombinasi gear yang berbeda?
          </p>
          <Button variant="outline" size="lg" className="border-primary text-primary" asChild>
            <a href="/paket">
              Buat Paket Custom
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
