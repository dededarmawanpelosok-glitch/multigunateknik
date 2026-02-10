import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  "Bandung", "Bandung Barat", "Cimahi", "Sumedang",
  "Garut", "Tasikmalaya", "Ciamis", "Banjar",
];

export function FeaturedGear() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold"
          >
            Jangkauan Layanan Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-primary-foreground/80 mt-3 max-w-xl mx-auto"
          >
            Melayani service AC dan peralatan rumah tangga di seluruh wilayah berikut
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20"
            >
              <MapPin className="w-5 h-5 text-primary-foreground/70 flex-shrink-0" />
              <span className="font-medium">{area}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
