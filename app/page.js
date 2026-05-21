import BeBoldHero from "@/component/BeBoldHero";
import ContactSection from "@/component/Cosn";
import FAQSection from "@/component/FAqSection";
import FeaturedProject from "@/component/FeaturedProject";
import Footer from "@/component/Footer";
import InteractiveHero from "@/component/Frame";
import PortfolioPage from "@/component/ImageSec";
import Insights from "@/component/Insights";
import LiquidHero from "@/component/LiquidHero";
import MetricsSection from "@/component/MetricsSection";
import PricingSection from "@/component/PricingSection";
import ProcessSection from "@/component/ProcessSection";
import Featured2Project from "@/component/SeconFeature";
import StackedServices from "@/component/StackedServices";
import TeamSection from "@/component/TeamSection";
import TestimonialSection from "@/component/TestimonialSection";
import TrustedBySection from "@/component/TrustedBySection";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <BeBoldHero />
  <FeaturedProject />
  <PortfolioPage />
  <InteractiveHero />
  <MetricsSection />
  <TrustedBySection />
  <Featured2Project />
  <StackedServices />
  <ProcessSection />
  <TestimonialSection />
  <FeaturedProject content={true} />
  <TeamSection />
  <PricingSection />
  <FAQSection />
  <Insights />
  <LiquidHero />
  <ContactSection/>
  <Footer />
  </>
  );
}
