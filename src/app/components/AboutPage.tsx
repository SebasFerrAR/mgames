import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CATEGORIES, CategoryKey } from "./categories";

type Props = {
  active: CategoryKey;
  onContact: () => void;
};

const VALUES = [
  {
    n: "01",
    title: "La energía se contagia",
    body: "Entramos a transformar el evento, a liberar su potencial y a convertirlo en una experiencia épica.",
  },
  {
    n: "02",
    title: "Son todos protagonistas",
    body: "Nadie mira de afuera. Cada persona es una pieza clave: proponemos dinámicas que generan inclusión y participación.",
  },
  {
    n: "03",
    title: "Diseño de autor",
    body: "Diseñamos, probamos y perfeccionamos nuestros juegos para que vivas una experiencia única.",
  },
  {
    n: "04",
    title: "Detalles que lo cambian todo",
    body: "Sutilezas que sorprenden y te conectan con el presente. No solo el Diablo está en los detalles: nosotros también.",
  },
];

const TEAM = [
  { name: "Martín Perazzo", role: "La Mente Maestra · Director Creativo" },
  { name: "Carla Boratti", role: "Cerebro de operaciones" },
  { name: "Agustín Pastor", role: "Legendary Game Master" },
  { name: "Alejo Pereyra", role: "Game Master" },
  { name: "Magdalena Vega", role: "Game Master" },
  { name: "Ignacio Escalante", role: "Game Master" },
  { name: "Lucía Álvarez", role: "Game Master" },
  { name: "Paula Morykon", role: "Game Master" },
];

export function AboutPage({ active, onContact }: Props) {
  const c = CATEGORIES[active];

  return (
    <div className="w-full">
      {/* HERO */}
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
            fontSize: "clamp(140px, 28vw, 420px)",
            lineHeight: 0.78,
            bottom: -40,
            left: -20,
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
          }}
        >
          Nosotros
        </div>

        <div className="relative max-w-[1440px] mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-20 md:pb-32 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-7">
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
                Quiénes Somos
              </div>
            </div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-white uppercase"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(40px, 8vw, 110px)",
                lineHeight: 0.92,
                letterSpacing: "0.005em",
              }}
            >
              Somos los que <span style={{ color: c.accent }}>mueven</span> la energía del grupo.
            </motion.h1>
            <p
              className="mt-6 max-w-xl"
              style={{
                color: "#CCCCCC",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(18px, 2.3vw, 23px)",
                lineHeight: 1.4,
              }}
            >
              Entusiastas motivados del poder del encuentro. Nos encanta crear,
              compartir, jugar y hacer de un momento algo especial.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-5 relative h-[320px] md:h-[480px]">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="absolute inset-0 overflow-hidden"
              style={{ border: `1px solid ${c.accent}` }}
            >
              <ImageWithFallback
                src={c.images[0]}
                alt=""
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 40%, ${c.accent}30)`,
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="w-full" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-20 md:py-32 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <div
              className="uppercase"
              style={{
                color: c.accent,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.22em",
              }}
            >
              Nuestra historia
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-6">
            <p
              className="text-white"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(22px, 3vw, 36px)",
                lineHeight: 1.15,
                letterSpacing: "0.005em",
              }}
            >
              Hacemos lo que más nos gusta hacer. Acompañamos a cientos de personas
              y empresas a celebrar con su gente en distintos contextos, pero con el
              mismo objetivo: conectar.
            </p>
            {[
              "Todo empezó con mi Viejo y su pasión por hacer de cada encuentro algo especial. Pensarlo, trabajarlo, darle forma, crear, exponer, compartir, dar lugar y sorprender. Y viste cómo es, el fruto no cae muy lejos del árbol. No pasó mucho tiempo hasta picarme el bicho.",
              "Entendí que lo que realmente importa es estar juntos y conectar. Ahí es dónde vibramos, sentimos, nos nutrimos. Y la sumatoria de todos esos momentos es la vida.",
              "Así nació MGames, en mi cumpleaños número 21, con ganas de hacer algo diferente: un encuentro con espíritu rebelde y la devoción de sorprenderte a vos como invitado. Y lo que empezó como un juego, ahora se convirtió en una productora que cambia la forma de encontrarnos.",
              "Hoy, se me infla el pecho de orgullo al ver el camino recorrido. ¿Qué venimos a hacer? A proponerte que jugar es la forma más seria de disfrutar la vida.",
              "¿Y a dónde vamos? A conquistar el mundo. De a un montón de sonrisas a la vez. Quiero que seamos una plaga, una peste que contagie alegría. ¿Qué decís? ¿Te sumás?",
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  color: "#CCCCCC",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(16px, 2vw, 19px)",
                  lineHeight: 1.55,
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="w-full" style={{ backgroundColor: "#111820" }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div
            className="uppercase mb-4"
            style={{
              color: c.accent,
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.22em",
            }}
          >
            Nuestros principios
          </div>
          <h2
            className="text-white uppercase mb-12 md:mb-16"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(34px, 6vw, 84px)",
              letterSpacing: "0.01em",
              lineHeight: 0.95,
            }}
          >
            Lo que <span style={{ color: c.accent }}>no negociamos</span>
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ borderTop: `1px solid ${c.accent}40` }}
          >
            {VALUES.map((v) => (
              <div
                key={v.n}
                className="relative p-6 md:p-10 group"
                style={{
                  borderBottom: `1px solid ${c.accent}40`,
                  borderRight: `1px solid ${c.accent}40`,
                  minHeight: 220,
                }}
              >
                <div
                  className="absolute -top-1 right-2 pointer-events-none select-none"
                  style={{
                    color: `${c.accent}25`,
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: 120,
                    lineHeight: 1,
                  }}
                >
                  {v.n}
                </div>
                <div className="relative">
                  <div
                    style={{
                      width: 28,
                      height: 2,
                      background: c.accent,
                      marginBottom: 16,
                    }}
                  />
                  <h3
                    className="text-white uppercase mb-3"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(22px, 3vw, 30px)",
                      letterSpacing: "0.02em",
                      lineHeight: 1.05,
                    }}
                  >
                    {v.title}
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
                    {v.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="w-full" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div
            className="uppercase mb-4"
            style={{
              color: c.accent,
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.22em",
            }}
          >
            El equipo
          </div>
          <h2
            className="text-white uppercase mb-12"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(34px, 6vw, 84px)",
              letterSpacing: "0.01em",
              lineHeight: 0.95,
            }}
          >
            Las personas <span style={{ color: c.accent }}>detrás</span>
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ borderTop: `1px solid ${c.accent}40` }}
          >
            {TEAM.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.45 }}
                className="flex items-baseline justify-between gap-4 py-5 md:py-6 px-1"
                style={{ borderBottom: `1px solid ${c.accent}40` }}
              >
                <div
                  className="uppercase text-white"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(20px, 2.6vw, 30px)",
                    letterSpacing: "0.03em",
                    lineHeight: 1.05,
                  }}
                >
                  {p.name}
                </div>
                <div
                  className="uppercase text-right shrink-0"
                  style={{
                    color: c.accent,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: 13,
                    letterSpacing: "0.14em",
                  }}
                >
                  {p.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full" style={{ backgroundColor: "#111820" }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-20 md:py-32 text-center">
          <h2
            className="text-white uppercase mb-8 mx-auto max-w-4xl"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(36px, 6vw, 84px)",
              letterSpacing: "0.01em",
              lineHeight: 0.95,
            }}
          >
            ¿Listos para <span style={{ color: c.accent }}>romper</span> la rutina?
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
            Contanos tu evento ↗
          </button>
        </div>
      </section>
    </div>
  );
}
