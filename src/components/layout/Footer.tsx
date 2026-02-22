import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";
import logoMgt from "@/assets/logo-mgt.png";

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
              <img src={logoMgt} alt="Logo MULTI GUNA TEKNIK" className="h-14 w-auto bg-white rounded-xl p-1" />
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
                  <Link to={link.href} className="text-sm text-background/70 hover:text-accent transition-colors">
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
                  <Link to="/layanan" className="text-sm text-background/70 hover:text-accent transition-colors">
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
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-background/70">
                  Jl. Gempol Sari No. 177, RT. 01/RW. 01, Gempolsari, Bandung Kulon, Bandung 40215
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+6282312290199" className="text-sm text-background/70 hover:text-accent transition-colors">
                  0823-1229-0199
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm text-background/70">Senin–Jumat, 08.00–17.00 WIB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-accent/20">
        <div className="section-container py-6 text-center">
          <p className="text-sm text-background/50">
            © 2026 MULTI GUNA TEKNIK. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
