import { motion } from "motion/react";
import { CATEGORIES, CategoryKey } from "./categories";

type Props = { active: CategoryKey };

const LOGOS = [
  "Globant",
  "Mercado Libre",
  "Despegar",
  "Rappi",
  "Galicia",
  "YPF",
  "Quilmes",
  "Naranja X",
  "Banco Macro",
  "Personal",
  "Coca-Cola",
  "Movistar",
  "Toyota",
  "L'Oréal",
  "Adidas",
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
              + de 120 marcas <span style={{ color: c.accent }}>confían</span>.
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
            Compañías que vinieron a romper la rutina y se quedaron con la energía.
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
          {repeated.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="shrink-0 flex items-center gap-3 group cursor-default"
            >
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
              <span
                className="uppercase transition-colors"
                style={{
                  color: "#FFFFFF",
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 4.5vw, 36px)",
                  letterSpacing: "0.08em",
                }}
              >
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
