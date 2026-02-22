import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_NUMBER = "6282312290199";

const packages = [
  {
    id: 1,
    name: "Cuci AC Standar",
    price: "Mulai Rp 80.000",
    description: "Pembersihan AC split basic",
    items: [
      "Cuci filter & evaporator",
      "Pembersihan drainase",
      "Pengecekan freon",
      "Garansi 1 bulan",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Cuci AC + Isi Freon",
    price: "Mulai Rp 250.000",
    description: "Paket lengkap cuci & isi refrigerant",
    items: [
      "Semua layanan Cuci Standar",
      "Isi ulang refrigerant R22/R410A",
      "Cek tekanan optimal",
      "Pengecekan kelistrikan",
      "Garansi 1 bulan",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Kontrak Maintenance",
    price: "Custom Quote",
    description: "Perawatan rutin untuk kantor & bisnis",
    items: [
      "Jadwal maintenance berkala",
      "Prioritas respon service",
      "Diskon spare parts",
      "Laporan service bulanan",
      "Harga khusus kontrak",
    ],
    popular: false,
  },
];

export function RentalPackages() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Paket Layanan
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2"
          >
            Pilih Paket Sesuai Kebutuhan
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-6 rounded-2xl bg-card border-2 ${
                pkg.popular ? "border-accent ring-2 ring-accent/20" : "border-border hover:border-primary/30"
              } transition-all duration-300 hover:shadow-strong flex flex-col`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="badge-service">Paling Populer</span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-display font-bold text-xl text-foreground">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{pkg.description}</p>
                <div className="text-2xl font-bold text-primary mt-4">{pkg.price}</div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-[52px] ${pkg.popular ? "btn-primary-gradient" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
                asChild
              >
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo MULTI GUNA TEKNIK, saya tertarik dengan paket ${pkg.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pilih Paket
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
