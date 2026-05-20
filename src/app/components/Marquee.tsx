import { motion } from "motion/react";

type Props = {
  items: string[];
  accent: string;
  duration?: number;
  reverse?: boolean;
};

export function Marquee({ items, accent, duration = 30, reverse = false }: Props) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        borderTop: `1px solid ${accent}`,
        borderBottom: `1px solid ${accent}`,
        backgroundColor: "#111820",
      }}
    >
      <motion.div
        className="flex gap-8 md:gap-12 py-4 md:py-5 whitespace-nowrap"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {repeated.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="uppercase inline-flex items-center gap-8 md:gap-12 shrink-0"
            style={{
              color: "#FFFFFF",
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(22px, 4vw, 32px)",
              letterSpacing: "0.04em",
            }}
          >
            {t}
            <span
              style={{
                width: 12,
                height: 12,
                background: accent,
                display: "inline-block",
                transform: "rotate(45deg)",
              }}
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
