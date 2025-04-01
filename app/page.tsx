import CallToAction from "@/components/call-to-action";
import Features from "@/components/features-1";
import FeaturesSection from "@/components/features-8";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import WallOfLoveSection from "@/components/testimonials";
import { Fuzzy_Bubbles } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <Features></Features>
      <FeaturesSection></FeaturesSection>
      <WallOfLoveSection></WallOfLoveSection>
      <Pricing></Pricing>
      <CallToAction></CallToAction>
      <FooterSection></FooterSection>
    </>
  );
}
