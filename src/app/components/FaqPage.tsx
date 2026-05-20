import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { CATEGORIES, CategoryKey } from "./categories";

type Props = {
  active: CategoryKey;
  onContact: () => void;
};

const SECTIONS: { title: string; faqs: { q: string; a: string }[] }[] = [
  {
    title: "General",
    faqs: [
      {
        q: "¿Qué es MGAMES?",
        a: "Un estudio de diseño de experiencias lúdicas. Producimos eventos para empresas, bodas, despedidas, cumpleaños y kids.",
      },
      {
        q: "¿Dónde operan?",
        a: "Buenos Aires base, pero viajamos a todo el país y al resto de LATAM con producción propia.",
      },
      {
        q: "¿Con cuánta anticipación se reserva?",
        a: "Recomendamos 30 días. Para fechas de alta demanda (diciembre, verano), 60 días.",
      },
      {
        q: "¿Tienen cupo mínimo / máximo?",
        a: "Desde 8 personas hasta 800. Adaptamos formato según la cantidad.",
      },
    ],
  },
  {
    title: "Producción",
    faqs: [
      {
        q: "¿Llevan todo o tenemos que poner algo?",
        a: "Llevamos todo: dinámicas, props, ambientación, equipo. Vos solo ponés el lugar y los invitados.",
      },
      {
        q: "¿Funciona indoor y al aire libre?",
        a: "Sí. Cada formato tiene su versión indoor y outdoor. Si el clima cambia, adaptamos en el momento.",
      },
      {
        q: "¿Cuánto dura una experiencia?",
        a: "Entre 1 y 2 horas, según el tipo. Diseñamos la energía para que pase volando.",
      },
      {
        q: "¿Puedo personalizar la dinámica?",
        a: "Sí. Hacemos brief previo y adaptamos a cultura, edad, dress code y objetivos.",
      },
    ],
  },
  {
    title: "Precio y reserva",
    faqs: [
      {
        q: "¿Cómo se cotiza?",
        a: "Por cantidad de personas, tipo de evento y duración. Te enviamos propuesta en menos de 24hs.",
      },
      {
        q: "¿Qué incluye el precio?",
        a: "Producción, coordinación, todo el equipo en campo, materiales y seguro de responsabilidad civil.",
      },
      {
        q: "¿Cómo se reserva?",
        a: "Con seña del 30%. El saldo, una semana antes del evento.",
      },
      {
        q: "¿Se puede cancelar?",
        a: "Hasta 15 días antes con devolución del 70% de la seña. Reprogramación sin costo si avisás con anticipación.",
      },
    ],
  },
  {
    title: "El día del evento",
    faqs: [
      {
        q: "¿A qué hora llegan?",
        a: "2 horas antes del arranque. Listos y probados antes del primer invitado.",
      },
      {
        q: "¿Necesitan algo especial del salón?",
        a: "Un punto de luz y un espacio para preparar. El resto lo resolvemos.",
      },
      {
        q: "¿Y si llueve / falla algo?",
        a: "Tenemos plan B para todo. Producción tiene backup de cada elemento crítico.",
      },
      {
        q: "¿Se filma / fotografía?",
        a: "Si querés, sumamos cobertura propia. O coordinamos con tu equipo.",
      },
    ],
  },
];

function FaqItem({
  q,
  a,
  open,
  onToggle,
  accent,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  accent: string;
}) {
  return (
    <div
      style={{
        borderTop: `1px solid ${accent}50`,
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 md:gap-6 py-5 md:py-7 text-left"
      >
        <span
          className="uppercase pr-4"
          style={{
            color: open ? accent : "#FFFFFF",
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(17px, 2.4vw, 24px)",
            letterSpacing: "0.02em",
            lineHeight: 1.15,
          }}
        >
          {q}
        </span>
        <span
          className="shrink-0 flex items-center justify-center"
          style={{
            width: 36,
            height: 36,
            border: `1px solid ${accent}`,
            color: accent,
          }}
        >
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p
              className="pb-6 md:pb-7 pr-12 md:pr-16"
              style={{
                color: "#CCCCCC",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(16px, 2vw, 19px)",
                lineHeight: 1.45,
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqPage({ active, onContact }: Props) {
  const c = CATEGORIES[active];
  const [openKey, setOpenKey] = useState<string>("Producción-0");

  return (
    <div className="w-full">
      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#111820" }}
      >
        <div
          className="pointer-events-none absolute uppercase select-none"
          style={{
            color: "rgba(255,255,255,0.05)",
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(160px, 32vw, 480px)",
            lineHeight: 0.78,
            bottom: -40,
            left: -20,
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
          }}
        >
          FAQ
        </div>

        <div className="relative max-w-[1100px] mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-12">
          <div className="flex items-center gap-3 mb-5">
            <span
              style={{
                width: 32,
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
                fontSize: 12,
                letterSpacing: "0.24em",
              }}
            >
              Preguntas Frecuentes
            </div>
          </div>
          <h1
            className="text-white uppercase mb-6"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(40px, 8vw, 110px)",
              lineHeight: 0.92,
              letterSpacing: "0.005em",
            }}
          >
            Todo lo que <span style={{ color: c.accent }}>querés</span> saber.
          </h1>
          <p
            className="max-w-xl"
            style={{
              color: "#CCCCCC",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(16px, 2.2vw, 20px)",
              lineHeight: 1.35,
            }}
          >
            Si tu duda no está acá, escribinos. Te respondemos en menos de 24hs.
          </p>
        </div>
      </section>

      <section className="w-full" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-12 md:py-20 space-y-14 md:space-y-20">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <div
                className="uppercase mb-6 md:mb-8 flex items-baseline gap-3"
                style={{
                  color: c.accent,
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 4vw, 40px)",
                  letterSpacing: "0.02em",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 14,
                    letterSpacing: "0.22em",
                    color: "#CCCCCC",
                  }}
                >
                  /
                </span>
                {s.title}
              </div>
              <div
                style={{
                  borderBottom: `1px solid ${c.accent}50`,
                }}
              >
                {s.faqs.map((f, i) => {
                  const key = `${s.title}-${i}`;
                  return (
                    <FaqItem
                      key={key}
                      q={f.q}
                      a={f.a}
                      accent={c.accent}
                      open={openKey === key}
                      onToggle={() => setOpenKey(openKey === key ? "" : key)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full" style={{ backgroundColor: "#111820" }}>
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <h2
            className="text-white uppercase mb-6"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 64px)",
              lineHeight: 1,
              letterSpacing: "0.01em",
            }}
          >
            ¿No encontraste lo <span style={{ color: c.accent }}>tuyo?</span>
          </h2>
          <button
            onClick={onContact}
            className="uppercase inline-flex items-center gap-3 hover:scale-[1.03] transition-transform"
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
            Escribinos ↗
          </button>
        </div>
      </section>
    </div>
  );
}
