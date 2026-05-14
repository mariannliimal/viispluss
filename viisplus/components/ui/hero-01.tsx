"use client";

import { GradientWave } from "@/components/ui/gradient-wave";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection01() {
  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* WebGL animated gradient wave behind content */}
      <GradientWave
        colors={["#001413", "#047a71", "#0aada0", "#1de8d4", "#001413"]}
        shadowPower={4}
        darkenTop={false}
        noiseFrequency={[0.0001, 0.0002]}
        deform={{ incline: 0.2, noiseAmp: 100, noiseFlow: 2 }}
      />

      <div className="flex flex-col text-center relative z-10 px-6">
        {/* Logo / brand mark */}
        <div className="flex justify-center mb-6">
          <div className="h-14 w-14 rounded-full border-2 border-teal-400/60 flex items-center justify-center bg-teal-950/50 backdrop-blur-sm">
            <span className="text-teal-300 font-bold text-lg tracking-tight">V+</span>
          </div>
        </div>

        {/* Eyebrow */}
        <p className="text-teal-400 text-xs font-medium tracking-[0.3em] uppercase mb-6">
          Kleebiste paigaldus · Tallinn, Eesti
        </p>

        {/* Headline — mix-blend-overlay lets the gradient show through */}
        <h1 className="font-extrabold text-white mix-blend-overlay tracking-tighter text-6xl md:text-7xl lg:text-9xl leading-none">
          Kleebiste <br /> paigaldus,<br />
          <span className="text-teal-300">mis kõnetab.</span>
        </h1>

        {/* Sub-copy and CTAs */}
        <div className="space-y-6 z-10 pt-16 flex justify-center items-center flex-col text-center">
          <p className="text-white/70 w-full max-w-lg font-light text-sm md:text-xl leading-relaxed">
            Fassaadikleebistest kontorikujunduseni — paigaldame professionaalselt,
            arvestame iga pinna eripäraga ja anname teie ruumile uue näo.
          </p>
          <div className="flex gap-3 mt-6 flex-wrap justify-center">
            <Link href="#kontakt">
              <Button className="h-12 md:h-14 rounded-full cursor-pointer px-8 md:px-10 bg-teal-400 text-teal-950 hover:bg-teal-300 font-medium tracking-wide border-0">
                Küsi pakkumist ↗
              </Button>
            </Link>
            <Link href="#teenused">
              <Button
                variant="secondary"
                className="h-12 md:h-14 cursor-pointer rounded-full px-8 md:px-10 bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm"
              >
                Vaata teenuseid
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
