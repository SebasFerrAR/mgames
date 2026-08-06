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
        a: "Una productora de experiencias. Producimos eventos para empresas, bodas, despedidas y cumpleaños.",
      },
      {
        q: "¿Qué tipo de eventos hacen?",
        a: "Hacemos todo tipo de eventos: cumpleaños, casamientos, despedidas, empresariales, team building, family day, lanzamientos y baby shower.",
      },
      {
        q: "¿Hacen eventos fuera de Buenos Aires?",
        a: "Sí, donde sea. Creemos en las relaciones a larga distancia.",
      },
      {
        q: "¿Con cuánta anticipación se reserva?",
        a: "Mientras antes, mejor. Si sabés que querés algo diferente, es mejor que empecemos a crearlo.",
      },
      {
        q: "¿Cuánto dura la experiencia de juegos?",
        a: "En promedio 2 horas. La diseñamos de acuerdo a sus expectativas.",
      },
      {
        q: "¿Tienen cupo mínimo / máximo?",
        a: "A partir de 10 personas. ¡Mientras más, mejor!",
      },
      {
        q: "¿Puedo sumarlos a un evento que ya estoy organizando?",
        a: "Sí, estamos listos para ponerle el broche de oro.",
      },
      {
        q: "¿Va con mi grupo?",
        a: "Sí, la experiencia está diseñada para integrar personas de diferentes edades.",
      },
      {
        q: "¿Hacen juegos con alcohol?",
        a: "Juegos con alcohol es nuestro segundo nombre. Fundamos la asociación EMDD – Entusiastas Motivados del Descontrol Desmedido.",
      },
      {
        q: "¿Se encargan de la organización completa del evento?",
        a: "Sí, te acompañamos desde la idea inicial y te entregamos en mano la llave.",
      },
      {
        q: "¿Incluyen todos los materiales?",
        a: "Sí. Incluimos todo, no tenés que preocuparte por nada.",
      },
      {
        q: "¿Puedo personalizar la dinámica?",
        a: "Obvio, creamos a partir de tu idea un encuentro inolvidable.",
      },
      {
        q: "¿Realizan en espacios cerrados y abiertos?",
        a: "Sí, diseñamos la propuesta a medida. Pensada para espacios abiertos y cerrados.",
      },
    ],
  },
  {
    title: "Valor y reserva",
    faqs: [
      {
        q: "¿Cómo se cotiza?",
        a: "Por tipo de evento, cantidad de participantes, ubicación y fecha. Contactanos y te diseñamos nuestra propuesta.",
      },
      {
        q: "¿Qué incluye el precio?",
        a: "Todo. Producción, coordinación, traslados, materiales, equipos de sonido y micrófonos, y póliza de seguro de accidentes personales.",
      },
      {
        q: "¿Cómo se reserva?",
        a: "Con una seña del 50%. El saldo restante, una semana antes del evento.",
      },
      {
        q: "¿Y si llueve?",
        a: "Somos flexibles. Un par de gotas no apagan el fuego. Podemos realizarlo en un espacio cerrado o reprogramarlo.",
      },
      {
        q: "¿Requiere esfuerzo físico?",
        a: "No, priorizamos la participación e integración por sobre el rendimiento físico.",
      },
      {
        q: "¿Se necesita mucho espacio?",
        a: "No, nos adaptamos a cualquier espacio, ya sea interior o exterior.",
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
  const [openKey, setOpenKey] = useState<string>("General-0");

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
            <span className="block">Todo lo que</span>
            <span className="block"><span style={{ color: c.accent }}>querés</span> saber</span>
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
            Si tu duda no está acá, escribinos y lo charlamos.
          </p>
        </div>
      </section>

      <section className="w-full" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-12 md:py-20 space-y-14 md:space-y-20">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <div
                className="uppercase mb-6 md:mb-8"
                style={{
                  color: c.accent,
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 4vw, 40px)",
                  letterSpacing: "0.02em",
                }}
              >
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
            ¿Te quedaste con <span style={{ color: c.accent }}>dudas?</span>
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
