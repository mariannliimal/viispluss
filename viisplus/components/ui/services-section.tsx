"use client";

import { GlowCard } from "@/components/ui/spotlight-card";
import {
  Building2,
  LayoutTemplate,
  Megaphone,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Building2,
    title: "Fassaadid ja välilahendused",
    description:
      "Suuremõõdulised ja mustrilised fassaadikleebised, peasissekäigu kujunduskleebised ning perfokleebised kaupluste akendele.",
    tag: "Välireklaam",
  },
  {
    number: "02",
    icon: LayoutTemplate,
    title: "Sise- ja kontorikujundus",
    description:
      "Kontoripindade ja koridoride kujunduselemendid, kontoriklaaside katmine mattkilega ning koosolekuruumi tekstid.",
    tag: "Kontor",
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Infoedastus ja reklaam",
    description:
      "Selgitavad piktogrammid seintel ning suureformaadilise valgusreklaami ülekleepimine.",
    tag: "Reklaam",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Eraprojektid ja erilahendused",
    description:
      "Mustriga kleebised ustele eraprojektide raames. Lähtume kleebise kasutuseast ja aluspinna eriomadustest.",
    tag: "Erilahendus",
  },
];

export function ServicesSection() {
  return (
    <section
      id="teenused"
      className="bg-[#001413] py-28 px-6 md:px-12 lg:px-20"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <p className="text-teal-400 text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Teenused
          </p>
          <h2 className="text-white font-semibold text-4xl md:text-5xl tracking-tight leading-[1.05]">
            Avasta Viis+<br />lahendused
          </h2>
        </div>
        <p className="text-white/50 text-sm leading-relaxed max-w-xs md:text-right">
          Terviklik kleebiste paigaldusteenus — alates fassaadigraafika
          suurformaadist kuni peenete kontoriklaasi kujundusteni.
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <GlowCard
              key={service.number}
              glowColor="teal"
              customSize
              className="min-h-[340px] flex flex-col justify-between cursor-pointer group"
            >
              {/* Top: number + icon */}
              <div className="flex items-start justify-between">
                <span className="text-teal-700 text-xs font-medium tracking-[0.2em] uppercase">
                  {service.number}
                </span>
                <div className="w-10 h-10 rounded-full bg-teal-950/60 border border-teal-700/30 flex items-center justify-center group-hover:border-teal-400/50 transition-colors">
                  <Icon className="w-4 h-4 text-teal-400" strokeWidth={1.5} />
                </div>
              </div>

              {/* Middle: title + description */}
              <div className="flex flex-col gap-3 mt-auto">
                <h3 className="text-white font-medium text-base leading-snug tracking-tight">
                  {service.title}
                </h3>
                <p className="text-white/45 text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom: tag + arrow */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.06]">
                <span className="text-teal-500/70 text-[10px] font-medium tracking-[0.18em] uppercase">
                  {service.tag}
                </span>
                <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-teal-400/40 transition-colors">
                  <ArrowUpRight className="w-3 h-3 text-white/30 group-hover:text-teal-400 transition-colors" />
                </div>
              </div>
            </GlowCard>
          );
        })}
      </div>
    </section>
  );
}
