import { motion, AnimatePresence } from "motion/react";
import { CATEGORIES, CategoryKey } from "./categories";

type Props = { active: CategoryKey };

export function Process({ active }: Props) {
  const c = CATEGORIES[active];
  return (
    <section className="w-full relative" style={{ backgroundColor: "#111820" }}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-20 md:py-36">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
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
              El Proceso / {c.label}
            </div>
            <h2
              className="text-white uppercase"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(40px, 6vw, 80px)",
                letterSpacing: "0.01em",
                lineHeight: 0.95,
              }}
            >
              Cómo Funciona.
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
            Cuatro fases diseñadas con ritmo y progresión. Nada librado al azar.
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={c.key + "-process"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            style={{ borderTop: `1px solid ${c.accent}40` }}
          >
            {c.process.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative p-6 md:p-8 group hover:bg-white/[0.02] transition-colors"
                style={{
                  borderRight: `1px solid ${c.accent}40`,
                  borderBottom: `1px solid ${c.accent}40`,
                  minHeight: 260,
                }}
              >
                <div
                  className="absolute -top-2 right-3 pointer-events-none select-none"
                  style={{
                    color: `${c.accent}30`,
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(100px, 14vw, 140px)",
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>
                <div className="relative z-10 flex flex-col h-full justify-end">
                  <div
                    style={{
                      width: 28,
                      height: 2,
                      background: c.accent,
                      marginBottom: 18,
                    }}
                  />
                  <h3
                    className="text-white uppercase mb-4"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 700,
                      fontSize: 28,
                      letterSpacing: "0.03em",
                      lineHeight: 1.05,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      color: "#CCCCCC",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 500,
                      fontSize: 17,
                      lineHeight: 1.4,
                    }}
                  >
                    {s.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
