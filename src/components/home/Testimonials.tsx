import { motion } from "framer-motion";
import { Star, Quote, MapPin, CheckCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Andi Wijaya",
    location: "Jakarta",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    text: "Alat camping sangat bersih dan terawat! Saya sewa tenda dome untuk trip ke Dieng, kondisinya seperti baru. Proses booking via WhatsApp juga cepat responsif.",
    trip: "Camping Dieng Plateau",
    verified: true,
  },
  {
    id: 2,
    name: "Sarah Putri",
    location: "Semarang",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
    text: "First time camping dan semua berjalan lancar berkat guidance dari tim Petarangan. Mereka bahkan kasih tips cara pasang tenda yang benar!",
    trip: "Family Camp Telaga Warna",
    verified: true,
  },
  {
    id: 3,
    name: "Budi Santoso",
    location: "Yogyakarta",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 5,
    text: "Harga sewa sangat terjangkau untuk kualitas gear yang ditawarkan. Sleeping bag -5°C-nya super hangat buat malam di Sikunir!",
    trip: "Sunrise Hunting Sikunir",
    verified: true,
  },
  {
    id: 4,
    name: "Maya Kusuma",
    location: "Banjarnegara",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    text: "Sebagai lokal, saya selalu rekomendasikan Petarangan ke teman-teman yang mau camping. Alat lengkap, harga bersahabat, lokasi strategis!",
    trip: "Weekend Getaway",
    verified: true,
  },
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold text-sm uppercase tracking-wider"
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
            Apa Kata Mereka?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-3 max-w-2xl mx-auto"
          >
            Cerita dari para petualang yang telah mempercayai Petarangan Outdoors Gear
          </motion.p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl bg-card border border-border hover:shadow-strong transition-shadow"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    {testimonial.verified && (
                      <CheckCircle className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                  {/* Rating */}
                  <div className="flex items-center gap-0.5 mt-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {/* Trip badge */}
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                🏕️ {testimonial.trip}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8 text-center"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t) => (
                <img
                  key={t.id}
                  src={t.avatar}
                  alt={t.name}
                  className="w-8 h-8 rounded-full border-2 border-background"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <strong className="text-foreground">2000+</strong> pelanggan puas
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <strong className="text-foreground">4.9/5</strong> rating Google
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
