import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import DishesSection from "@/components/DishesSection";
import VideoRow from "@/components/VideoRow";
import EventsTeaserSection from "@/components/EventsTeaserSection";
import SignatureGrid from "@/components/SignatureGrid";
import BrunchSection from "@/components/BrunchSection";
import BarSection from "@/components/BarSection";
import Testimonials from "@/components/Testimonials";
import EventsSection from "@/components/EventsSection";
import HoursSection from "@/components/HoursSection";
import ClosingCTA from "@/components/ClosingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <VideoRow />
      <DishesSection />
      <EventsTeaserSection />
      <SignatureGrid />
      <BarSection />
      <Testimonials />
      <EventsSection />
      <HoursSection />
      <ClosingCTA />
    </>
  );
}
