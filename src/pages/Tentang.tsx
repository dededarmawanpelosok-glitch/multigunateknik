import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation,
  MessageCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Tentang() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-accent font-semibold text-sm uppercase tracking-wider"
              >
                Tentang Kami
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6"
              >
                Petarangan Outdoors Gear
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Kami adalah penyedia rental peralatan outdoor premium di Banjarnegara, 
                melayani kebutuhan camping, hiking, dan eksplorasi alam di kawasan Dieng Plateau 
                dan sekitarnya. Dengan komitmen pada kualitas gear dan pelayanan terbaik, 
                kami hadir untuk mendukung setiap petualangan Anda.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Cerita Kami
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Berawal dari kecintaan terhadap alam dan kegiatan outdoor, Petarangan Outdoors Gear 
                    didirikan untuk menjembatani kebutuhan para petualang akan peralatan berkualitas 
                    tanpa harus membeli dengan harga mahal.
                  </p>
                  <p>
                    Berlokasi strategis di Banjarnegara, kami menyediakan akses mudah menuju 
                    destinasi outdoor populer seperti Dieng Plateau, Gunung Prau, Sikunir, 
                    dan Telaga Warna.
                  </p>
                  <p>
                    Setiap gear yang kami sewakan melewati proses inspeksi ketat, 
                    pembersihan menyeluruh, dan dokumentasi kondisi yang transparan. 
                    Kami percaya bahwa pengalaman outdoor yang aman dan nyaman 
                    dimulai dari peralatan yang berkualitas.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-strong"
              >
                <img
                  src="https://images.unsplash.com/photo-1496545672447-f699b503d270?w=800&q=80"
                  alt="Camping di Dieng"
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-secondary/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground">
                Mengapa Memilih Kami?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Gear Berkualitas",
                  description: "Semua peralatan merek premium, terawat dengan baik, dan diinspeksi sebelum setiap rental.",
                  icon: "🎒"
                },
                {
                  title: "Harga Terjangkau",
                  description: "Harga kompetitif dengan paket bundle hemat dan diskon untuk rental jangka panjang.",
                  icon: "💰"
                },
                {
                  title: "Transparansi Kondisi",
                  description: "Dokumentasi foto kondisi gear sebelum dan sesudah rental untuk ketenangan bersama.",
                  icon: "📸"
                },
                {
                  title: "Lokasi Strategis",
                  description: "Dekat dengan akses ke Dieng Plateau, Gunung Prau, dan destinasi outdoor lainnya.",
                  icon: "📍"
                },
                {
                  title: "Support 24/7",
                  description: "Tim siap membantu via WhatsApp kapanpun Anda butuhkan, termasuk saat di lapangan.",
                  icon: "💬"
                },
                {
                  title: "Asuransi Tersedia",
                  description: "Opsi asuransi 5% untuk proteksi kerusakan, rental dengan ketenangan pikiran.",
                  icon: "🛡️"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-card border border-border hover:shadow-strong transition-shadow text-center"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Location */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Hubungi Kami
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Alamat</h4>
                      <p className="text-muted-foreground">
                        Jl. Poncol Wetan, Sumberejo I, Sumberejo, Kec. Batur, 
                        Kab. Banjarnegara, Jawa Tengah 53456
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">WhatsApp</h4>
                      <a href="tel:+6281947223925" className="text-accent hover:underline">
                        081947223925
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-forest-light/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-forest-light" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href="mailto:info@petarangan.id" className="text-accent hover:underline">
                        info@petarangan.id
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Jam Operasional</h4>
                      <p className="text-muted-foreground">
                        Setiap hari, 07:00 - 22:00 WIB
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <Button className="bg-gradient-accent text-accent-foreground" asChild>
                    <a
                      href="https://wa.me/6281947223925"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" className="border-primary text-primary" asChild>
                    <a
                      href="https://maps.google.com/?q=-7.2167,109.9167"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="w-5 h-5 mr-2" />
                      Buka di Maps
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-strong h-[400px] bg-secondary"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.98!2d109.8!3d-7.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa1!2sBanjarnegara!5e0!3m2!1sen!2sid!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Petarangan Outdoors Gear"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
