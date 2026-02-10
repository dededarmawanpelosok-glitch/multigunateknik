import { motion } from "framer-motion";
import { MessageCircle, Calendar, UserCheck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Hubungi Kami",
    description: "Chat via WhatsApp atau telepon, jelaskan keluhan AC / peralatan Anda.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Jadwalkan Kunjungan",
    description: "Pilih tanggal & jam yang nyaman. Teknisi datang tepat waktu.",
    icon: Calendar,
  },
  {
    number: "03",
    title: "Teknisi Datang",
    description: "Teknisi bersertifikasi diagnosa & kerjakan perbaikan dengan bersih.",
    icon: UserCheck,
  },
  {
    number: "04",
    title: "Selesai & Bergaransi",
    description: "Pekerjaan selesai, garansi 1 bulan, pembayaran fleksibel.",
    icon: CheckCircle2,
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Cara Kerja
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2"
          >
            Booking Service Semudah 1-2-3-4
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-strong">
                <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <span className="text-sm font-bold">{step.number}</span>
                </div>

                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
