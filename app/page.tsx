import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import DishesSection from "@/components/DishesSection";
import EventsTeaserSection from "@/components/EventsTeaserSection";
import BrunchSection from "@/components/BrunchSection";
import Testimonials from "@/components/Testimonials";
import HoursSection from "@/components/HoursSection";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <DishesSection />
      <Testimonials />
      <EventsTeaserSection />
      <HoursSection />
    </>
  );
}
