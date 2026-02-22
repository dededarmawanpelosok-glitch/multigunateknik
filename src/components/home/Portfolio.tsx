import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

import p1 from "@/assets/portfolio/portfolio-1.jpg";
import p2 from "@/assets/portfolio/portfolio-2.jpg";
import p3 from "@/assets/portfolio/portfolio-3.jpg";
import p4 from "@/assets/portfolio/portfolio-4.jpg";
import p5 from "@/assets/portfolio/portfolio-5.jpg";
import p6 from "@/assets/portfolio/portfolio-6.jpg";
import p7 from "@/assets/portfolio/portfolio-7.jpg";
import p8 from "@/assets/portfolio/portfolio-8.jpg";
import p9 from "@/assets/portfolio/portfolio-9.jpg";
import p10 from "@/assets/portfolio/portfolio-10.jpg";

const portfolio = [
  { src: p1, alt: "Isi freon unit outdoor Daikin", label: "Isi Freon" },
  { src: p2, alt: "Service AC ruang kelas", label: "Service AC" },
  { src: p3, alt: "Maintenance unit rooftop", label: "Maintenance" },
  { src: p4, alt: "Pemasangan CCTV outdoor", label: "Pasang CCTV" },
  { src: p5, alt: "Service AC unit outdoor malam", label: "Perbaikan AC" },
  { src: p6, alt: "Pemasangan AC split rumah", label: "Pemasangan AC" },
  { src: p7, alt: "Instalasi AC ceiling kantor", label: "Instalasi AC" },
  { src: p8, alt: "Cuci AC split dalam ruangan", label: "Cuci AC" },
  { src: p9, alt: "Training teknisi Panasonic", label: "Sertifikasi" },
  { src: p10, alt: "Service AC outdoor apartemen", label: "Service AC" },
];

export function Portfolio() {
  const [selected, setSelected] = useState<number | null>(null);

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
            Galeri Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2"
          >
            Hasil Kerja Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-3 max-w-2xl mx-auto"
          >
            Dokumentasi pekerjaan teknisi MULTI GUNA TEKNIK di berbagai lokasi
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {portfolio.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer rounded-2xl overflow-hidden aspect-square"
              onClick={() => setSelected(index)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <ZoomIn className="w-6 h-6 text-background mx-auto mb-1" />
                  <span className="text-background text-xs font-semibold">{item.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors"
              onClick={() => setSelected(null)}
            >
              <X className="w-6 h-6 text-background" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={portfolio[selected].src}
              alt={portfolio[selected].alt}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 text-background text-sm font-medium">
              {portfolio[selected].label} — {portfolio[selected].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
