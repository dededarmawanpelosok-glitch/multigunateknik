import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { MapPin, Phone, Clock, Navigation, MessageCircle, Shield, Zap, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_URL = "https://wa.me/6282312290199?text=" + encodeURIComponent("Halo MULTI GUNA TEKNIK, saya ingin bertanya tentang layanan service.");

export default function Tentang() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="section-container max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
            >
              Tentang MULTI GUNA TEKNIK
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Kami adalah penyedia jasa service AC panggilan profesional di Bandung yang beroperasi sejak 2017.
              Dengan tenaga teknisi bersertifikasi dan berpengalaman, kami melayani pemasangan, perawatan,
              dan perbaikan AC serta peralatan rumah tangga lainnya.
            </motion.p>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground">Mengapa Memilih Kami?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Zap, title: "Respon Cepat", desc: "Rata-rata respon 4 jam. Kami prioritaskan kecepatan agar AC Anda segera kembali dingin." },
                { icon: Award, title: "Teknisi Bersertifikasi", desc: "Tim teknisi kami terlatih dan bersertifikasi untuk semua merek AC populer." },
                { icon: Shield, title: "Garansi Layanan", desc: "Setiap pekerjaan bergaransi hingga 1 bulan. Jika ada masalah, kami datang lagi gratis." },
                { icon: Users, title: "270+ Pekerjaan", desc: "Dipercaya oleh ratusan pelanggan di Bandung dan sekitarnya sejak 2017." },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-card border border-border hover:shadow-strong transition-shadow text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Map */}
        <section className="py-16 bg-muted/30">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">Hubungi Kami</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Alamat</h4>
                      <p className="text-muted-foreground">
                        Jl. Gempol Sari No. 177, RT. 01/RW. 01, Gempolsari,
                        Kec. Bandung Kulon, Kota Bandung, Jawa Barat 40215
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">WhatsApp / Telepon</h4>
                      <a href="tel:+6282312290199" className="text-primary hover:underline">0823-1229-0199</a>
                      <br />
                      <a href="tel:+6281324642834" className="text-primary hover:underline">0813-2464-2834</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Jam Operasional</h4>
                      <p className="text-muted-foreground">Senin–Jumat, 08.00–17.00 WIB</p>
                      <p className="text-muted-foreground">Minggu Tutup</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button className="h-[52px] btn-primary-gradient" asChild>
                    <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" className="h-[52px] border-primary text-primary" asChild>
                    <a
                      href="https://maps.google.com/?q=Jl.+Gempol+Sari+No.+177+Bandung"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="w-5 h-5 mr-2" />
                      Buka di Maps
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-strong h-[400px] bg-muted"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9!2d107.57!3d-6.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJl.+Gempol+Sari+No.177+Bandung!5e0!3m2!1sid!2sid!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi MULTI GUNA TEKNIK"
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
