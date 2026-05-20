import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { CATEGORIES, CategoryKey } from "./categories";

type Props = { active: CategoryKey };

const REVIEWS = [
  {
    text: "Vinieron, prepararon todo, y en 20 minutos teníamos a 200 personas conectadas. Algo no visto antes.",
    name: "Mariana Vázquez",
    role: "People Lead · Globant",
  },
  {
    text: "El cierre de año más recordado de los últimos 5. Todo el equipo todavía habla del evento.",
    name: "Federico Castro",
    role: "CMO · Naranja X",
  },
  {
    text: "Pensé que iba a ser cringe. Salió épico. Mis tíos bailando con mis amigos. Único.",
    name: "Cami & Tomás",
    role: "Bodas · Buenos Aires",
  },
  {
    text: "La despedida más loca que viví. Sin clichés, sin disfraces ridículos. Pura energía.",
    name: "Sofi P.",
    role: "Despedida · Mar del Plata",
  },
  {
    text: "Para mi cumple 40 quería algo diferente. Lo lograron. Mis amigos no paran de hablar.",
    name: "Diego M.",
    role: "Cumpleaños 40",
  },
];

export function Reviews({ active }: Props) {
  const c = CATEGORIES[active];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const r = REVIEWS[idx];

  return (
    <div
      className="relative p-6 md:p-10"
      style={{
        backgroundColor: "#0D1B2A",
        border: `1px solid ${c.accent}40`,
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <div
          className="uppercase inline-flex items-center gap-2"
          style={{
            color: c.accent,
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.22em",
          }}
        >
          <Quote size={16} />
          Lo que dicen
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIdx((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)}
            className="flex items-center justify-center hover:scale-110 transition-transform"
            style={{
              width: 32,
              height: 32,
              border: `1px solid ${c.accent}`,
              color: c.accent,
            }}
            aria-label="Anterior"
          >
            <ArrowLeft size={14} />
          </button>
          <button
            onClick={() => setIdx((i) => (i + 1) % REVIEWS.length)}
            className="flex items-center justify-center hover:scale-110 transition-transform"
            style={{
              width: 32,
              height: 32,
              border: `1px solid ${c.accent}`,
              color: c.accent,
            }}
            aria-label="Siguiente"
          >
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <div className="relative min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
          >
            <p
              className="mb-6"
              style={{
                color: "#FFFFFF",
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 600,
                fontSize: 22,
                lineHeight: 1.25,
                letterSpacing: "0.005em",
              }}
            >
              “{r.text}”
            </p>
            <div
              className="uppercase"
              style={{
                color: c.accent,
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.14em",
              }}
            >
              {r.name}
            </div>
            <div
              className="uppercase"
              style={{
                color: "#CCCCCC",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: "0.12em",
              }}
            >
              {r.role}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-1.5 mt-6">
        {REVIEWS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className="transition-all"
            style={{
              height: 3,
              width: i === idx ? 32 : 12,
              backgroundColor: i === idx ? c.accent : "#3A3A3A",
            }}
            aria-label={`Reseña ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
