import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { name: "Beranda", href: "/" },
  { name: "Katalog Gear", href: "/katalog" },
  { name: "Paket Sewa", href: "/paket" },
  { name: "Cara Sewa", href: "/cara-sewa" },
  { name: "Tentang Kami", href: "/tentang" },
];

const categories = [
  { name: "Tenda", href: "/katalog?category=tenda" },
  { name: "Sleeping Bag", href: "/katalog?category=sleeping-bag" },
  { name: "Carrier & Tas", href: "/katalog?category=carrier" },
  { name: "Cooking Set", href: "/katalog?category=cooking" },
  { name: "Aksesoris", href: "/katalog?category=aksesoris" },
];

const legal = [
  { name: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
  { name: "Kebijakan Privasi", href: "/kebijakan-privasi" },
  { name: "Kebijakan Pembatalan", href: "/kebijakan-pembatalan" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-none">
                  PETARANGAN
                </span>
                <span className="text-xs text-primary-foreground/70 tracking-widest">
                  OUTDOORS GEAR
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Penyedia rental alat outdoor premium di Banjarnegara. 
              Melayani kebutuhan camping, hiking, dan eksplorasi alam di kawasan Dieng Plateau.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors flex items-center justify-center"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors flex items-center justify-center"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Kategori</h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    to={cat.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  Jl. Poncol Wetan, Sumberejo I, Sumberejo, Kec. Batur, Kab. Banjarnegara, Jawa Tengah 53456
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+6281947223925"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  081947223925
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@petarangan.id"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  info@petarangan.id
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  Setiap hari, 07:00 - 22:00 WIB
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-10 border-t border-primary-foreground/10">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="font-semibold mb-2">Dapatkan Info Promo & Tips Camping</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Subscribe newsletter kami untuk update terbaru
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Alamat email Anda"
                className="flex-1 px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2026 Petarangan Outdoors Gear. Semua hak dilindungi.
          </p>
          <ul className="flex items-center gap-6">
            {legal.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
