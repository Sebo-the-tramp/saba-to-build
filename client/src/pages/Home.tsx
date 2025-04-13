import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ConceptSection from "@/components/ConceptSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import ScheduleSection from "@/components/ScheduleSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ConceptSection />
        <ActivitiesSection />
        <ScheduleSection />
        <GallerySection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
