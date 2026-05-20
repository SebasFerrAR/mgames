import { motion, AnimatePresence } from "motion/react";
import { CATEGORIES, CategoryKey } from "./categories";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Props = { active: CategoryKey };

export function Gallery({ active }: Props) {
  const c = CATEGORIES[active];
  return (
    <section className="w-full" style={{ backgroundColor: "#0D1B2A" }}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
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
            Crónica / <span style={{ color: c.accent }}>{c.label}</span>
          </h2>
          <a
            href="#"
            className="uppercase inline-flex items-center gap-2"
            style={{
              color: c.accent,
              borderBottom: `2px solid ${c.accent}`,
              paddingBottom: 4,
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.14em",
            }}
          >
            Ver el reel completo →
          </a>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={c.key + "-gal"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-12 grid-rows-2 gap-2 md:gap-3"
            style={{ height: "clamp(360px, 60vw, 540px)" }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              className="col-span-12 md:col-span-5 row-span-2 relative overflow-hidden group"
            >
              <ImageWithFallback
                src={c.images[0]}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.12 }}
              className="hidden md:block md:col-span-4 row-span-1 relative overflow-hidden group"
            >
              <ImageWithFallback
                src={c.images[1]}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.18 }}
              className="hidden md:flex md:col-span-3 row-span-1 p-6 flex-col justify-between"
              style={{ backgroundColor: c.accent, color: "#0D1B2A" }}
            >
              <div
                className="uppercase"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.2em",
                }}
              >
                Estudio de caso
              </div>
              <div
                className="uppercase"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: 30,
                  lineHeight: 0.95,
                }}
              >
                {c.h1[1]}
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.24 }}
              className="hidden md:block md:col-span-3 row-span-1 relative overflow-hidden group"
            >
              <ImageWithFallback
                src={c.images[2]}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden md:block md:col-span-4 row-span-1 relative overflow-hidden group"
            >
              <ImageWithFallback
                src={c.images[3]}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
