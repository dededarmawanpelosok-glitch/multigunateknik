import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { name: "Beranda", href: "/" },
  { name: "Layanan", href: "/layanan" },
  { name: "Booking", href: "/booking" },
  { name: "Tentang Kami", href: "/tentang" },
];

const services = [
  "Cuci AC", "Isi Freon", "Perbaikan AC", "Pemasangan AC",
  "Service Mesin Cuci", "Service Kulkas", "Kelistrikan", "Pasang CCTV",
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-lg leading-none">MULTI GUNA</span>
                <span className="block text-xs text-background/60 tracking-widest">TEKNIK</span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Jasa service AC panggilan profesional di Bandung.
              Teknisi bersertifikasi, respon cepat, bergaransi sejak 2017.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/layanan" className="text-sm text-background/70 hover:text-primary transition-colors">
                    {s}
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
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-background/70">
                  Jl. Gempol Sari No. 177, RT. 01/RW. 01, Gempolsari, Bandung Kulon, Bandung 40215
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+6282312290199" className="text-sm text-background/70 hover:text-primary transition-colors">
                  0823-1229-0199
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-background/70">Senin–Jumat, 08.00–17.00 WIB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="section-container py-6 text-center">
          <p className="text-sm text-background/50">
            © 2026 MULTI GUNA TEKNIK. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
