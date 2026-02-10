import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import {
  Wind, Wrench, ArrowUpDown, Droplets, Refrigerator, Zap, Thermometer, Camera,
  Clock, Shield, CheckCircle, ArrowRight,
} from "lucide-react";

const WA_NUMBER = "6282312290199";

const services = [
  {
    name: "Cuci AC",
    description: "Cuci AC split/standing: bersihkan filter, evaporator, drainase, pastikan udara sejuk.",
    icon: Wind,
    price: "Mulai Rp 80.000",
    duration: "45-60 menit",
    warranty: "1 bulan",
    features: ["Cuci filter & cover", "Pembersihan evaporator", "Cek drainase", "Pengecekan performa"],
  },
  {
    name: "Isi Freon",
    description: "Isi ulang refrigerant R22/R410A: tekanan optimal, performa dingin maksimal.",
    icon: Thermometer,
    price: "Mulai Rp 150.000",
    duration: "30-45 menit",
    warranty: "1 bulan",
    features: ["Cek kebocoran", "Isi refrigerant", "Test tekanan", "Pengecekan suhu output"],
  },
  {
    name: "Perbaikan AC",
    description: "Diagnosa dan perbaikan segala kerusakan AC. PCB, kompresor, fan motor, dan lainnya.",
    icon: Wrench,
    price: "Mulai Rp 150.000",
    duration: "1-3 jam",
    warranty: "1 bulan",
    features: ["Diagnosa masalah", "Perbaikan komponen", "Ganti spare part", "Test performa"],
  },
  {
    name: "Pemasangan AC",
    description: "Instalasi AC baru & bekas, semua merek dan tipe. Pemasangan rapi dan aman.",
    icon: ArrowUpDown,
    price: "Mulai Rp 250.000",
    duration: "2-4 jam",
    warranty: "1 bulan",
    features: ["Pemasangan unit indoor", "Pemasangan unit outdoor", "Instalasi pipa & kabel", "Vacuum & isi freon"],
  },
  {
    name: "Service Mesin Cuci",
    description: "Perbaikan dan perawatan mesin cuci top loading & front loading semua merek.",
    icon: Droplets,
    price: "Mulai Rp 100.000",
    duration: "1-2 jam",
    warranty: "1 bulan",
    features: ["Diagnosa masalah", "Perbaikan motor", "Ganti bearing", "Pembersihan drain"],
  },
  {
    name: "Service Kulkas",
    description: "Perbaikan kulkas 1 pintu, 2 pintu, dan showcase. Semua merek.",
    icon: Refrigerator,
    price: "Mulai Rp 100.000",
    duration: "1-2 jam",
    warranty: "1 bulan",
    features: ["Isi freon kulkas", "Ganti thermostat", "Perbaikan kompresor", "Cek kelistrikan"],
  },
  {
    name: "Kelistrikan",
    description: "Instalasi dan perbaikan kelistrikan rumah, MCB, stop kontak, saklar, dan wiring.",
    icon: Zap,
    price: "Mulai Rp 100.000",
    duration: "1-3 jam",
    warranty: "1 bulan",
    features: ["Pasang MCB", "Instalasi stop kontak", "Perbaikan wiring", "Pengecekan arus"],
  },
  {
    name: "Pasang CCTV",
    description: "Instalasi dan konfigurasi CCTV rumah & kantor. Online monitoring via HP.",
    icon: Camera,
    price: "Mulai Rp 500.000",
    duration: "3-5 jam",
    warranty: "1 bulan",
    features: ["Pasang kamera", "Konfigurasi DVR/NVR", "Setup monitoring HP", "Pemasangan kabel"],
  },
];

export default function Layanan() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="section-container text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
            >
              Daftar Layanan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
            >
              Solusi lengkap untuk AC dan peralatan rumah tangga Anda oleh teknisi bersertifikasi
            </motion.p>
          </div>
        </section>

        {/* Services list */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-strong transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-xl text-foreground mb-1">{service.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm">
                        <span className="flex items-center gap-1 text-primary font-semibold">{service.price}</span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="w-4 h-4" /> {service.duration}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Shield className="w-4 h-4" /> Garansi {service.warranty}
                        </span>
                      </div>

                      <ul className="grid grid-cols-2 gap-2 mb-4">
                        {service.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <Button size="sm" className="btn-primary-gradient" asChild>
                        <a
                          href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo MULTI GUNA TEKNIK, saya ingin booking service: • Layanan: ${service.name} • Alamat: [__] • Nama: [__] • No HP: [__]`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Booking via WhatsApp
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
