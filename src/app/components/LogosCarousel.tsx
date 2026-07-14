import { motion } from "motion/react";
import { CATEGORIES, CategoryKey } from "./categories";
import pg from "../../assets/logos/pg.png";
import mercadolibre from "../../assets/logos/mercadolibre.png";
import bago from "../../assets/logos/bago.png";
import ypf from "../../assets/logos/ypf.png";
import michelin from "../../assets/logos/michelin.png";
import irsa from "../../assets/logos/irsa.png";
import siemens from "../../assets/logos/siemens.png";
import uala from "../../assets/logos/uala.png";
import messe from "../../assets/logos/messe.png";
import puma from "../../assets/logos/puma.png";
import dell from "../../assets/logos/dell.png";
import camuzzi from "../../assets/logos/camuzzi.png";

type Props = { active: CategoryKey };

const LOGOS: { name: string; src: string }[] = [
  { name: "P&G", src: pg },
  { name: "Mercado Libre", src: mercadolibre },
  { name: "YPF", src: ypf },
  { name: "Michelin", src: michelin },
  { name: "Siemens", src: siemens },
  { name: "Bagó", src: bago },
  { name: "Puma", src: puma },
  { name: "Dell", src: dell },
  { name: "Ualá", src: uala },
  { name: "IRSA", src: irsa },
  { name: "Camuzzi", src: camuzzi },
  { name: "Messe Frankfurt", src: messe },
];

export function LogosCarousel({ active }: Props) {
  const c = CATEGORIES[active];
  const repeated = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="w-full relative" style={{ backgroundColor: "#111820" }}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-8 md:pb-10">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <div
              className="uppercase mb-3"
              style={{
                color: c.accent,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.22em",
              }}
            >
              Nos eligen
            </div>
            <h2
              className="text-white uppercase"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(36px, 5vw, 72px)",
                letterSpacing: "0.01em",
                lineHeight: 0.95,
              }}
            >
              + de 100 marcas <span style={{ color: c.accent }}>confían</span>.
            </h2>
          </div>
          <div
            className="max-w-md"
            style={{
              color: "#CCCCCC",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 500,
              fontSize: 18,
              lineHeight: 1.4,
            }}
          >
            Generamos espacios que despiertan nuevas formas de conexión.
          </div>
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{
          borderTop: `1px solid ${c.accent}40`,
          borderBottom: `1px solid ${c.accent}40`,
        }}
      >
        {/* fade edges */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 z-10"
          style={{
            width: 120,
            background: "linear-gradient(90deg, #111820 0%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 z-10"
          style={{
            width: 120,
            background: "linear-gradient(-90deg, #111820 0%, transparent 100%)",
          }}
        />

        <motion.div
          className="flex items-center gap-10 md:gap-16 py-8 md:py-12 whitespace-nowrap"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ duration: 50, ease: "linear", repeat: Infinity }}
        >
          {repeated.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="shrink-0 flex items-center gap-10 md:gap-16 group cursor-default"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="w-auto shrink-0 select-none"
                style={{
                  height: "clamp(26px, 4vw, 40px)",
                  opacity: 0.9,
                }}
                draggable={false}
              />
              <span
                style={{
                  width: 10,
                  height: 10,
                  background: c.accent,
                  display: "inline-block",
                  transform: "rotate(45deg)",
                  opacity: 0.6,
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
