import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Portfolio } from "@/components/home/Portfolio";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Portfolio />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PortfolioPage;
