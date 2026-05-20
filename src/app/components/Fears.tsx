import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { CATEGORIES, CategoryKey } from "./categories";

type Props = { active: CategoryKey };

export function Fears({ active }: Props) {
  const c = CATEGORIES[active];
  const [open, setOpen] = useState(0);

  return (
    <section className="w-full" style={{ backgroundColor: "#0D1B2A" }}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-20 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5">
          <div
            className="uppercase mb-4"
            style={{
              color: c.accent,
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.22em",
            }}
          >
            Derribando Miedos
          </div>
          <h2
            className="text-white uppercase mb-6"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(44px, 6vw, 84px)",
              letterSpacing: "0.01em",
              lineHeight: 0.95,
            }}
          >
            ¿Tenés <span style={{ color: c.accent }}>dudas?</span>
          </h2>
          <p
            style={{
              color: "#CCCCCC",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: 1.4,
            }}
          >
            Diseñamos contexto, ritmo y progresión para que nadie quede afuera.
            Bancamos cada decisión con experiencia real.
          </p>
        </div>

        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={c.key + "-fears"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {c.fears.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={f.q}
                    style={{
                      borderTop: `1px solid ${c.accent}80`,
                      borderBottom:
                        i === c.fears.length - 1 ? `1px solid ${c.accent}80` : "none",
                    }}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between gap-4 md:gap-6 py-5 md:py-7 text-left group"
                    >
                      <span
                        className="uppercase"
                        style={{
                          color: isOpen ? c.accent : "#FFFFFF",
                          fontFamily: "'Oswald', sans-serif",
                          fontWeight: 700,
                          fontSize: "clamp(18px, 3vw, 36px)",
                          letterSpacing: "0.02em",
                          lineHeight: 1.05,
                        }}
                      >
                        {f.q}
                      </span>
                      <span
                        className="shrink-0 flex items-center justify-center"
                        style={{
                          width: 44,
                          height: 44,
                          border: `1px solid ${c.accent}`,
                          color: c.accent,
                        }}
                      >
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p
                            className="pb-7 pr-16"
                            style={{
                              color: "#CCCCCC",
                              fontFamily: "'Barlow Condensed', sans-serif",
                              fontWeight: 500,
                              fontSize: 20,
                              lineHeight: 1.45,
                            }}
                          >
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
