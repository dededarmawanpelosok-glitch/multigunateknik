import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Hero } from "@/components/home/Hero";
import { Categories } from "@/components/home/Categories";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturedGear } from "@/components/home/FeaturedGear";
import { RentalPackages } from "@/components/home/RentalPackages";
import { Testimonials } from "@/components/home/Testimonials";
import { Portfolio } from "@/components/home/Portfolio";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Categories />
        <HowItWorks />
        <FeaturedGear />
        <Portfolio />
        <RentalPackages />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
