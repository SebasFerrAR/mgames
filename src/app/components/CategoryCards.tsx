import { ArrowRight } from "lucide-react";

const CARDS = [
  {
    tag: "Team Building",
    title: "Un antes y un después en la energía de tu equipo.",
    cta: "Conocé la experiencia",
  },
  {
    tag: "Experiencia Nupcial",
    title: "Donde se rompe el hielo y se enciende la chispa.",
    cta: "Ver experiencia",
  },
  {
    tag: "Despedida de Soltera/o",
    title: "Una boda única empieza con una despedida increíble.",
    cta: "¡Que se pique!",
  },
  {
    tag: "Cumpleaños",
    title: "No caigas en la de siempre. Este año vas por algo diferente.",
    cta: "Quiero saber más",
  },
];

export function CategoryCards() {
  return (
    <section className="w-full" style={{ backgroundColor: "#111820" }}>
      <div className="max-w-[1280px] mx-auto px-6 py-24 md:py-32">
        <div
          className="uppercase mb-4 text-center"
          style={{
            color: "#E51A2E",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.2em",
          }}
        >
          Nuestras Experiencias
        </div>
        <h2
          className="text-white uppercase text-center mb-16 mx-auto max-w-3xl"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 4.5vw, 56px)",
            lineHeight: 1,
            letterSpacing: "0.02em",
          }}
        >
          Una experiencia para cada momento.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((c) => (
            <div
              key={c.tag}
              className="group p-10 transition-all hover:-translate-y-1"
              style={{
                backgroundColor: "#0D1B2A",
                border: "1px solid rgba(229, 26, 46, 0.3)",
              }}
            >
              <div
                className="uppercase mb-6"
                style={{
                  color: "#E51A2E",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.18em",
                }}
              >
                {c.tag}
              </div>
              <h3
                className="text-white uppercase mb-10"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 600,
                  fontSize: 26,
                  lineHeight: 1.1,
                }}
              >
                {c.title}
              </h3>
              <a
                href="#"
                className="inline-flex items-center gap-2 uppercase transition-colors"
                style={{
                  color: "#E51A2E",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: "0.15em",
                  borderBottom: "2px solid #E51A2E",
                  paddingBottom: 4,
                }}
              >
                {c.cta}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
