import nocoderLogo from "@/assets/nocoder-logo.png";
import { MessageCircle } from "lucide-react";

const SuspendedOverlay = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center p-6">
      <div className="text-center max-w-md space-y-8">
        <img src={nocoderLogo} alt="Nocoder Web" className="h-14 mx-auto" />

        <div className="space-y-3">
          <h1 className="text-2xl font-display font-bold text-foreground">
            Website ini ditangguhkan
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Jika Anda pemilik bisnis ini, diharap segera menyelesaikan payment untuk mengaktifkan kembali website Anda.
          </p>
        </div>

        <a
          href="https://wa.me/6282164097066"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white"
          style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
        >
          <MessageCircle className="w-5 h-5" />
          Hubungi Kami
        </a>
      </div>
    </div>
  );
};

export default SuspendedOverlay;
