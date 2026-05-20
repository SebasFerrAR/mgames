import { motion, AnimatePresence } from "motion/react";
import { CATEGORIES, CategoryKey } from "./categories";

type Props = { active: CategoryKey };

export function Manifesto({ active }: Props) {
  const c = CATEGORIES[active];
  const m = c.manifesto;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#111820",
        borderTop: `2px solid ${c.accent}`,
        borderBottom: `2px solid ${c.accent}`,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.07'/></svg>\")",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-5 md:px-8 py-24 md:py-44">
        <div
          className="absolute pointer-events-none select-none"
          style={{
            top: 10,
            left: 20,
            color: c.accent,
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: 280,
            lineHeight: 0.65,
            opacity: 0.65,
          }}
        >
          “
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={c.key + "-mani"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div
              className="text-white uppercase"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(40px, 9vw, 140px)",
                lineHeight: 0.9,
                letterSpacing: "-0.005em",
              }}
            >
              {m.line1}
            </div>
            <div
              className="uppercase text-right md:text-center"
              style={{
                color: c.accent,
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(40px, 9vw, 140px)",
                lineHeight: 0.9,
                letterSpacing: "-0.005em",
              }}
            >
              {m.line2}
            </div>

            <div className="h-16" />

            <div className="grid grid-cols-12 gap-6 items-end">
              <div className="col-span-12 md:col-span-7">
                <div
                  className="text-white uppercase"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(28px, 4vw, 56px)",
                    lineHeight: 1.02,
                    letterSpacing: "0.02em",
                  }}
                >
                  {m.quote}
                </div>
                <div
                  className="uppercase"
                  style={{
                    color: c.accent,
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(28px, 4vw, 56px)",
                    lineHeight: 1.02,
                    letterSpacing: "0.02em",
                  }}
                >
                  {m.quote2}
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 md:text-right">
                <div
                  className="uppercase"
                  style={{
                    color: "#CCCCCC",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: "0.22em",
                  }}
                >
                  — Manifiesto / {c.label}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
