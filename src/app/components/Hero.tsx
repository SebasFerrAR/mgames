import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CATEGORIES, CATEGORY_ORDER, CategoryKey } from "./categories";

type Props = {
  active: CategoryKey;
  onSelect: (k: CategoryKey) => void;
};

export function Hero({ active, onSelect }: Props) {
  const c = CATEGORIES[active];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#111820", minHeight: "92vh" }}
    >
      {/* huge bg word */}
      <AnimatePresence mode="wait">
        <motion.div
          key={c.key + "-bgword"}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 0.05, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute uppercase select-none"
          style={{
            color: "#FFFFFF",
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(160px, 28vw, 420px)",
            lineHeight: 0.78,
            bottom: -40,
            left: -20,
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
          }}
        >
          {c.word}
        </motion.div>
      </AnimatePresence>

      {/* diagonal accent */}
      <motion.div
        key={c.key + "-stripe"}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute origin-left"
        style={{
          width: "140%",
          height: 4,
          background: c.accent,
          top: "62%",
          left: "-20%",
          transform: "rotate(-8deg)",
        }}
      />

      {/* TABS — top */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-5 md:px-8 pt-6 md:pt-10">
        <div className="flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible md:pb-0" style={{ scrollbarWidth: "none" }}>
          {CATEGORY_ORDER.map((k) => {
            const cat = CATEGORIES[k];
            const isActive = k === active;
            return (
              <button
                key={k}
                onClick={() => onSelect(k)}
                className="uppercase transition-all hover:scale-[1.04] relative overflow-hidden shrink-0"
                style={{
                  backgroundColor: isActive ? cat.accent : "transparent",
                  color: isActive ? "#0D1B2A" : "#FFFFFF",
                  border: `1px solid ${isActive ? cat.accent : "rgba(255,255,255,0.4)"}`,
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  borderRadius: 0,
                  padding: "8px 14px",
                  whiteSpace: "nowrap",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-8 grid grid-cols-12 gap-6 md:gap-8 items-center pt-10 md:pt-16 pb-16 md:pb-24">
        {/* LEFT */}
        <div className="col-span-12 lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={c.key + "-text"}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  style={{
                    width: 40,
                    height: 2,
                    background: c.accent,
                    display: "inline-block",
                  }}
                />
                <div
                  className="uppercase"
                  style={{
                    color: c.accent,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: "0.24em",
                  }}
                >
                  {c.tag}
                </div>
              </div>

              <h1
                className="text-white uppercase mb-8"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(40px, 9vw, 110px)",
                  lineHeight: 0.92,
                  letterSpacing: "0.005em",
                }}
              >
                {c.h1.map((line, i) => (
                  <motion.div
                    key={c.key + i}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      color: i === 1 ? c.accent : "#FFFFFF",
                    }}
                  >
                    {line}
                  </motion.div>
                ))}
              </h1>

              <p
                className="max-w-xl mb-8 md:mb-10"
                style={{
                  color: "#CCCCCC",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(17px, 2.5vw, 22px)",
                  lineHeight: 1.3,
                }}
              >
                {c.sub}
              </p>

              <button
                className="group uppercase inline-flex items-center gap-3 transition-transform hover:scale-[1.03]"
                style={{
                  backgroundColor: c.accent,
                  color: "#0D1B2A",
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  letterSpacing: "0.12em",
                  padding: "18px 36px",
                  borderRadius: 0,
                }}
              >
                {c.cta}
                <ArrowUpRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT — collage */}
        <div className="col-span-12 lg:col-span-5 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={c.key + "-collage"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative grid grid-cols-6 grid-rows-6 gap-2 md:gap-3"
              style={{ height: "clamp(380px, 65vw, 580px)" }}
            >
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.6 }}
                className="col-span-4 row-span-4 relative overflow-hidden"
                style={{ border: `1px solid ${c.accent}` }}
              >
                <ImageWithFallback
                  src={c.images[0]}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(180deg, transparent 50%, ${c.accent}30)` }}
                />
              </motion.div>
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="col-span-2 row-span-3 col-start-5 relative overflow-hidden"
              >
                <ImageWithFallback src={c.images[1]} alt="" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.22, duration: 0.6 }}
                className="col-span-2 row-span-3 col-start-5 row-start-4 relative overflow-hidden"
                style={{ border: `1px solid ${c.accent}` }}
              >
                <ImageWithFallback src={c.images[2]} alt="" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="col-span-4 row-span-2 row-start-5 relative overflow-hidden"
              >
                <ImageWithFallback src={c.images[3]} alt="" className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 flex items-end p-4"
                  style={{
                    background: `linear-gradient(0deg, ${c.accent}cc, transparent 60%)`,
                  }}
                >
                  <span
                    className="uppercase"
                    style={{
                      color: "#0D1B2A",
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 700,
                      fontSize: 18,
                      letterSpacing: "0.1em",
                    }}
                  >
                    Energía / {c.label}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
