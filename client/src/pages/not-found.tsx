import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#010208] px-4 text-white">
      <div className="max-w-lg rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 text-center shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">404</p>
        <h1 className="mt-4 font-heading text-4xl">Percorso non trovato</h1>
        <p className="mt-3 text-slate-300">Forse l&apos;idea è ancora da costruire. Torna alla home e ricominciamo da lì.</p>
        <Link href="/">
          <Button className="mt-8 bg-primary px-6 py-6 text-white font-heading tracking-[0.35em] uppercase">Back to build</Button>
        </Link>
      </div>
    </div>
  );
}
