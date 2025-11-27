import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ConceptSection from "@/components/ConceptSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import ScheduleSection from "@/components/ScheduleSection";
import GallerySection from "@/components/GallerySection";
import PastEventsSection from "@/components/PastEventsSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import FirefliesBackground from "@/components/FirefliesBackground";
import { Locale, defaultLocale } from "@/lib/i18n";

export default function Home({ locale = defaultLocale }: { locale?: Locale }) {
  return (
    <div className="relative min-h-screen bg-background isolate">
      <FirefliesBackground />
      <div className="relative z-10">
        <Header locale={locale} />
        <main>
          <HeroSection locale={locale} />
          <ConceptSection locale={locale} />
          <ActivitiesSection locale={locale} />
          <ScheduleSection locale={locale} />
          <GallerySection locale={locale} />
          <PastEventsSection locale={locale} />
          <ContactSection locale={locale} />
          <MapSection locale={locale} />
        </main>
        <Footer locale={locale} />
      </div>
    </div>
  );
}
