import { motion } from "framer-motion";
import { Star, Quote, CheckCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Anonymous",
    date: "Mar 2025",
    rating: 5,
    text: "Teknisi datang tepat waktu, bekerja dengan baik, sopan, dan selalu mengutamakan aspek safety.",
    service: "Service AC",
    verified: true,
  },
  {
    id: 2,
    name: "Faizal",
    date: "Okt 2024",
    rating: 5,
    text: "Teknisinya ramah dan sangat menguasai pekerjaannya. AC kembali dingin seperti baru!",
    service: "Cuci AC + Isi Freon",
    verified: true,
  },
  {
    id: 3,
    name: "Ibu Sari",
    date: "Jan 2025",
    rating: 5,
    text: "Respon cepat, teknisi profesional. Langsung datang hari yang sama saat saya hubungi. Sangat recommended!",
    service: "Perbaikan AC",
    verified: true,
  },
  {
    id: 4,
    name: "Pak Dedi",
    date: "Feb 2025",
    rating: 5,
    text: "Sudah 3x pakai jasa MULTI GUNA TEKNIK. Selalu puas dengan hasilnya. Kerja bersih dan rapi.",
    service: "Pemasangan AC",
    verified: true,
  },
];

export function Testimonials() {
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
            Testimoni
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2"
          >
            Apa Kata Pelanggan Kami?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-3"
          >
            Rating 4.9/5 dari 91 ulasan terverifikasi
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl bg-card border border-border hover:shadow-strong transition-shadow"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-lg">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-foreground">{t.name}</h4>
                    {t.verified && <CheckCircle className="w-4 h-4 text-primary" />}
                  </div>
                  <span className="text-sm text-muted-foreground">{t.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>

              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                🔧 {t.service}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
