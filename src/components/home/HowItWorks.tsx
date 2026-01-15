import { motion } from "framer-motion";
import { Search, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Pilih & Cek Ketersediaan",
    description: "Browse katalog kami, pilih gear yang dibutuhkan, dan cek ketersediaan pada tanggal petualangan Anda.",
    icon: Search,
    color: "bg-primary",
  },
  {
    number: "02", 
    title: "Booking & Pembayaran",
    description: "Konfirmasi booking via WhatsApp atau online. Bayar deposit 50%, sisanya saat pengambilan.",
    icon: Calendar,
    color: "bg-accent",
  },
  {
    number: "03",
    title: "Pickup & Petualangan",
    description: "Ambil gear di lokasi pickup kami atau gunakan layanan kurir. Inspeksi bersama, lalu mulai petualangan!",
    icon: MapPin,
    color: "bg-forest-light",
  },
  {
    number: "04",
    title: "Return & Selesai",
    description: "Kembalikan gear sesuai jadwal. Inspeksi akhir, deposit kembali jika alat utuh. Mudah!",
    icon: CheckCircle2,
    color: "bg-rust-dark",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold text-sm uppercase tracking-wider"
          >
            Cara Sewa
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2"
          >
            Rental Gear Semudah 1-2-3-4
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-3 max-w-2xl mx-auto"
          >
            Proses sewa yang simpel dan transparan, dari booking hingga return
          </motion.p>
        </div>

        {/* Steps */}
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
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-strong">
                {/* Number badge */}
                <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-background border-2 border-border flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{step.number}</span>
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">50%</div>
              <p className="text-sm text-muted-foreground">Deposit di muka</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">5%</div>
              <p className="text-sm text-muted-foreground">Asuransi opsional</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <p className="text-sm text-muted-foreground">Deposit kembali jika utuh</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
