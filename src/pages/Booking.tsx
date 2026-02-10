import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { MessageCircle, AlertTriangle } from "lucide-react";

const WA_NUMBER = "6282312290199";

const serviceOptions = [
  "Cuci AC", "Isi Freon", "Perbaikan AC", "Pemasangan AC", "Bongkar Pasang AC",
  "Service Mesin Cuci", "Service Kulkas", "Kelistrikan", "Water Heater", "Pasang CCTV",
];

const unitTypes = ["Split Wall", "Split Floor Standing", "Cassette", "VRF", "Lainnya"];

export default function Booking() {
  const [service, setService] = useState("");
  const [unitType, setUnitType] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [keluhan, setKeluhan] = useState("");
  const [urgent, setUrgent] = useState(false);

  const buildWAUrl = () => {
    if (urgent) {
      const msg = `URGENT: MULTI GUNA TEKNIK — saya butuh teknisi segera: • Lokasi: ${address || "[__]"} • Gejala: ${keluhan || "[__]"} • Unit critical: Ya • No HP: ${phone || "[__]"}`;
      return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    }
    const msg = `Halo MULTI GUNA TEKNIK, saya ingin booking service: • Layanan: ${service || "[__]"} • Tipe unit: ${unitType || "[__]"} • Alamat: ${address || "[__]"} • Preferred tanggal: ${date || "[__]"} • Preferred jam: ${time || "[__]"} • Nama: ${name || "[__]"} • No HP: ${phone || "[__]"}${keluhan ? ` • Keluhan: ${keluhan}` : ""}`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="section-container text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
            >
              Booking Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
            >
              Isi form di bawah, lalu klik tombol untuk booking via WhatsApp
            </motion.p>
          </div>
        </section>

        <section className="py-16">
          <div className="section-container max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-medium"
            >
              {/* Urgent toggle */}
              <label className="flex items-center gap-3 p-4 rounded-xl bg-destructive/5 border border-destructive/20 mb-6 cursor-pointer">
                <input
                  type="checkbox"
                  checked={urgent}
                  onChange={(e) => setUrgent(e.target.checked)}
                  className="w-5 h-5 rounded accent-destructive"
                />
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <span className="font-medium text-foreground">URGENT — Butuh teknisi segera</span>
              </label>

              <div className="space-y-5">
                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Layanan *</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="input-glass"
                  >
                    <option value="">Pilih layanan...</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Unit type */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Tipe Unit</label>
                  <select
                    value={unitType}
                    onChange={(e) => setUnitType(e.target.value)}
                    className="input-glass"
                  >
                    <option value="">Pilih tipe unit...</option>
                    {unitTypes.map((u) => (
                      <option key={u} value={u}>{u}</option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nama *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama lengkap"
                    className="input-glass"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">No. HP / WhatsApp *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="08xxxxxxxxxx"
                    className="input-glass"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Alamat Lengkap *</label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Alamat lengkap lokasi service"
                    rows={3}
                    className="input-glass"
                  />
                </div>

                {/* Date & Time */}
                {!urgent && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Tanggal Preferred</label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="input-glass"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Jam Preferred</label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="input-glass"
                      >
                        <option value="">Pilih jam...</option>
                        <option value="08:00-10:00">08:00-10:00</option>
                        <option value="10:00-12:00">10:00-12:00</option>
                        <option value="13:00-15:00">13:00-15:00</option>
                        <option value="15:00-17:00">15:00-17:00</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Keluhan */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Keluhan / Catatan</label>
                  <textarea
                    value={keluhan}
                    onChange={(e) => setKeluhan(e.target.value)}
                    placeholder="Jelaskan gejala atau keluhan..."
                    rows={3}
                    className="input-glass"
                  />
                </div>

                {/* Submit */}
                <Button
                  className={`w-full h-[52px] text-base ${urgent ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : "btn-primary-gradient"}`}
                  asChild
                >
                  <a href={buildWAUrl()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {urgent ? "Kirim Request URGENT via WhatsApp" : "Booking via WhatsApp"}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
