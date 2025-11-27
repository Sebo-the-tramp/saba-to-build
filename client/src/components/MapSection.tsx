import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Locale } from "@/lib/i18n";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const mapCopy: Record<
  Locale,
  {
    label: string;
    heading: string;
    body: string;
    howToLabel: string;
    howTo: string;
  }
> = {
  it: {
    label: "Coordinate",
    heading: "La casa dei builder",
    body: "Via Bolzano 20 \nMolina di Fiemme (TN)",
    howToLabel: "Come arrivare",
    howTo: "Parcheggia vicino al torrente, segui i led rossi. È impossibile sbagliare.",
  },
  en: {
    label: "Coordinates",
    heading: "The builders' house",
    body: "Via Bolzano 20 \nMolina di Fiemme (TN)",
    howToLabel: "How to reach",
    howTo: "Park near the stream, follow your heart. You can’t miss it.",
  },
};

export default function MapSection({ locale }: { locale: Locale }) {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current).setView([46.27379129754995, 11.419460827781101], 13);
    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([46.27379129754995, 11.419460827781101], { icon })
      .addTo(map)
      .bindPopup("Via Bolzano 20 · Molina di Fiemme")
      .openPopup();

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <section className="bg-[#000108] py-24 text-white min-h-screen">
      <div className="mx-auto w-full px-4 sm:px-10 lg:px-16">
        <motion.div
          className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] shadow-[0_0_80px_rgba(0,0,0,0.4)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-0 md:grid-cols-[320px,1fr]">
            <div className="space-y-4 border-b border-white/5 p-8 md:border-b-0 md:border-r">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{mapCopy[locale].label}</p>
              <h3 className="font-heading text-3xl">{mapCopy[locale].heading}</h3>
              <p className="text-slate-300 whitespace-pre-line">{mapCopy[locale].body}</p>
              <div className="rounded-2xl border border-white/10 bg-primary/10 p-4 text-sm text-white">
                <p className="font-heading text-xs uppercase tracking-[0.35em] text-primary">
                  {mapCopy[locale].howToLabel}
                </p>
                <p className="mt-2">{mapCopy[locale].howTo}</p>
              </div>
            </div>
            <div className="relative h-[420px]">
              <div ref={mapContainerRef} className="absolute inset-0" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
