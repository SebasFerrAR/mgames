import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, animate, useInView } from "motion/react";
import { CATEGORIES, CategoryKey } from "./categories";

type Props = { active: CategoryKey };

// Cuenta el número desde 0 hasta su valor cuando entra en pantalla,
// preservando prefijos/sufijos (ej: "+600", "+25K", "100%", "2hs").
function CountUp({ value }: { value: string }) {
  const parts = value.match(/^(\D*)(\d+(?:[.,]\d+)?)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(parts ? `${parts[1]}0${parts[3]}` : value);

  useEffect(() => {
    if (!parts) {
      setDisplay(value);
      return;
    }
    if (!inView) return;
    const target = parseFloat(parts[2].replace(",", "."));
    const decimals = parts[2].includes(".") || parts[2].includes(",") ? 1 : 0;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(`${parts[1]}${v.toFixed(decimals)}${parts[3]}`),
    });
    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export function Stats({ active }: Props) {
  const c = CATEGORIES[active];
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ backgroundColor: "#0D1B2A" }}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={c.key + "-stats"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px"
            style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            {c.stats.map((s, i) => (
              <div
                key={s.label}
                className="p-5 md:p-8 flex flex-col gap-2 md:gap-3"
                style={{ backgroundColor: "#0D1B2A" }}
              >
                <div
                  className="uppercase"
                  style={{
                    color: c.accent,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: 12,
                    letterSpacing: "0.2em",
                  }}
                >
                  / 0{i + 1}
                </div>
                <div
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(40px, 6vw, 72px)",
                    lineHeight: 0.95,
                  }}
                >
                  <CountUp value={s.num} />
                </div>
                <div
                  className="uppercase"
                  style={{
                    color: "#CCCCCC",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    letterSpacing: "0.14em",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
