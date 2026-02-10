import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wind,
  Wrench,
  Refrigerator,
  Zap,
  Droplets,
  Camera,
  ArrowUpDown,
  ThermometerSun,
} from "lucide-react";

const services = [
  {
    name: "Cuci AC",
    description: "Bersihkan filter, evaporator & drainase",
    icon: Wind,
    href: "/layanan",
  },
  {
    name: "Isi Freon",
    description: "Refrigerant R22/R410A tekanan optimal",
    icon: ThermometerSun,
    href: "/layanan",
  },
  {
    name: "Perbaikan AC",
    description: "Diagnosa & perbaikan semua masalah AC",
    icon: Wrench,
    href: "/layanan",
  },
  {
    name: "Pemasangan AC",
    description: "Instalasi AC baru & bekas, semua merek",
    icon: ArrowUpDown,
    href: "/layanan",
  },
  {
    name: "Service Mesin Cuci",
    description: "Perbaikan & perawatan mesin cuci",
    icon: Droplets,
    href: "/layanan",
  },
  {
    name: "Service Kulkas",
    description: "Perbaikan kulkas semua merek",
    icon: Refrigerator,
    href: "/layanan",
  },
  {
    name: "Kelistrikan",
    description: "Instalasi & perbaikan listrik rumah",
    icon: Zap,
    href: "/layanan",
  },
  {
    name: "Pasang CCTV",
    description: "Instalasi & konfigurasi CCTV",
    icon: Camera,
    href: "/layanan",
  },
];

export function Categories() {
  return (
    <section className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Layanan Kami
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2"
          >
            Solusi Lengkap untuk Rumah & Kantor
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-3 max-w-2xl mx-auto"
          >
            Dari service AC hingga pemasangan CCTV, semua dikerjakan oleh teknisi bersertifikasi
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                to={service.href}
                className="group block p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-strong text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
