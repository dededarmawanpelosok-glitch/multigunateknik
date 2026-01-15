import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { 
  Search, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  FileText,
  CreditCard,
  Truck,
  Shield,
  MessageCircle,
  Camera,
  ClipboardCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Pilih Gear",
    description: "Browse katalog kami dan pilih peralatan yang sesuai kebutuhan petualangan Anda.",
    details: [
      "Cek ketersediaan real-time",
      "Lihat kondisi dan foto alat",
      "Bandingkan spesifikasi",
      "Pilih ukuran/variant yang tepat"
    ],
    icon: Search,
    color: "bg-primary",
  },
  {
    number: "02",
    title: "Tentukan Tanggal",
    description: "Pilih tanggal mulai dan akhir sewa sesuai jadwal petualangan Anda.",
    details: [
      "Minimal sewa 1 hari",
      "Diskon untuk sewa mingguan",
      "Weekend surcharge berlaku",
      "Perpanjangan fleksibel"
    ],
    icon: Calendar,
    color: "bg-accent",
  },
  {
    number: "03",
    title: "Booking & Pembayaran",
    description: "Konfirmasi pesanan via WhatsApp dan lakukan pembayaran deposit.",
    details: [
      "Deposit 50% di muka",
      "Transfer Bank / E-wallet",
      "Invoice digital",
      "Konfirmasi instant"
    ],
    icon: CreditCard,
    color: "bg-forest-light",
  },
  {
    number: "04",
    title: "Pickup Gear",
    description: "Ambil gear di lokasi pickup atau gunakan layanan antar.",
    details: [
      "Inspeksi bersama sebelum sewa",
      "Foto dokumentasi kondisi",
      "Brief penggunaan alat",
      "Tanda tangan digital"
    ],
    icon: MapPin,
    color: "bg-rust-dark",
  },
  {
    number: "05",
    title: "Petualangan!",
    description: "Nikmati perjalanan Anda dengan gear berkualitas.",
    details: [
      "Support 24/7 via WhatsApp",
      "Tips penggunaan alat",
      "Emergency contact tersedia",
      "Asuransi opsional aktif"
    ],
    icon: Shield,
    color: "bg-primary",
  },
  {
    number: "06",
    title: "Return & Selesai",
    description: "Kembalikan gear tepat waktu, inspeksi akhir, deposit kembali.",
    details: [
      "Kembalikan bersih & kering",
      "Inspeksi akhir bersama",
      "Deposit refund instant",
      "Review & feedback"
    ],
    icon: CheckCircle2,
    color: "bg-accent",
  },
];

const faqs = [
  {
    question: "Berapa deposit yang harus dibayar?",
    answer: "Deposit sebesar 50% dari total harga sewa dibayarkan saat booking. Deposit akan dikembalikan sepenuhnya jika alat dikembalikan dalam kondisi baik."
  },
  {
    question: "Bagaimana jika alat rusak saat disewa?",
    answer: "Kerusakan ringan akibat pemakaian normal tidak dikenakan biaya. Untuk kerusakan berat, akan dikurangi dari deposit sesuai estimasi perbaikan. Kami sarankan mengambil asuransi opsional 5% untuk proteksi penuh."
  },
  {
    question: "Bisa perpanjang masa sewa?",
    answer: "Tentu! Hubungi kami via WhatsApp minimal H-1 sebelum jadwal return. Perpanjangan tergantung ketersediaan alat dan akan dikenakan biaya tambahan sesuai durasi."
  },
  {
    question: "Apakah ada layanan antar jemput?",
    answer: "Ya, kami menyediakan layanan antar dalam kota Banjarnegara gratis. Untuk area Dieng dan sekitarnya, dikenakan biaya tambahan sesuai jarak."
  },
  {
    question: "Bagaimana cara membatalkan pesanan?",
    answer: "Pembatalan H-3 sebelum tanggal sewa: deposit kembali 100%. H-2 s/d H-1: deposit kembali 50%. Hari H: deposit hangus."
  },
];

export default function CaraSewa() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="section-container text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent font-semibold text-sm uppercase tracking-wider"
            >
              Panduan Lengkap
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4"
            >
              Cara Sewa Gear
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
            >
              Proses rental yang simpel, transparan, dan aman dari booking hingga return
            </motion.p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-6 mb-12 last:mb-0"
                >
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center shadow-medium z-10`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-border mt-4" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-12">
                    <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-strong transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-bold text-accent">{step.number}</span>
                        <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing info */}
        <section className="py-16 bg-secondary/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground">
                Skema Harga & Kebijakan
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">50%</div>
                <h3 className="font-semibold mb-2">Deposit</h3>
                <p className="text-sm text-muted-foreground">
                  Dibayar di muka, refundable 100% jika alat dikembalikan utuh
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="text-4xl font-bold text-accent mb-2">5%</div>
                <h3 className="font-semibold mb-2">Asuransi Opsional</h3>
                <p className="text-sm text-muted-foreground">
                  Proteksi kerusakan penuh, ketenangan pikiran saat berpetualang
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="text-4xl font-bold text-forest-light mb-2">3x</div>
                <h3 className="font-semibold mb-2">Harga Mingguan</h3>
                <p className="text-sm text-muted-foreground">
                  Sewa mingguan hanya 3x harga harian, hemat lebih banyak!
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground">
                Pertanyaan Umum
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.details
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 rounded-2xl bg-card border border-border cursor-pointer"
                >
                  <summary className="font-semibold text-foreground flex items-center justify-between list-none">
                    {faq.question}
                    <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground">{faq.answer}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="section-container text-center">
            <h2 className="text-3xl font-display font-bold text-primary-foreground mb-4">
              Siap Mulai Petualangan?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Hubungi kami sekarang untuk booking atau konsultasi gear yang tepat untuk trip Anda
            </p>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow"
              asChild
            >
              <a
                href="https://wa.me/6281947223925?text=Halo%20Petarangan%2C%20saya%20ingin%20booking%20gear%20untuk%20camping"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat WhatsApp Sekarang
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
