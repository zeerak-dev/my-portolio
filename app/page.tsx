import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedWork />
      <Testimonials />
      <CallToAction />
    </>
  );
}
