import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CATEGORIES, CategoryKey } from "./categories";
import team1 from 'figma:asset/IMG_1627.JPG';
import team2 from 'figma:asset/IMG_2606.JPG';
import team3 from 'figma:asset/IMG_2607.JPG';
import team4 from 'figma:asset/IMG_4064.JPG';

type Props = {
  active: CategoryKey;
  onContact: () => void;
};

const VALUES = [
  {
    n: "01",
    title: "Diseñamos energía",
    body: "Cada minuto está pensado. No improvisamos: producimos.",
  },
  {
    n: "02",
    title: "Nadie afuera",
    body: "Diseñamos progresión para que el tímido y el extrovertido encajen.",
  },
  {
    n: "03",
    title: "Sin clichés",
    body: "Ni animador chillón, ni vergüenza ajena, ni karaoke obligado.",
  },
  {
    n: "04",
    title: "Memoria",
    body: "Si lo van a contar por años, lo hicimos bien.",
  },
];

const TEAM = [
  {
    name: "Martín García",
    role: "Founder & Director",
    img: team1,
  },
  {
    name: "Lucía Fernández",
    role: "Producción Creativa",
    img: team2,
  },
  {
    name: "Tomás Méndez",
    role: "Diseño de Experiencia",
    img: team3,
  },
  {
    name: "Sofía Pérez",
    role: "Coordinación de Eventos",
    img: team4,
  },
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
              Somos los que <span style={{ color: c.accent }}>mueven</span> la energía de un grupo.
            </motion.h1>
            <p
              className="mt-6 max-w-xl"
              style={{
                color: "#CCCCCC",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(17px, 2.2vw, 22px)",
                lineHeight: 1.35,
              }}
            >
              No somos animadores. No somos un wedding planner. Somos un estudio
              de diseño de experiencias lúdicas con +500 eventos en la espalda.
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
              La historia
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
              Empezamos en 2017 con una idea simple: los eventos no deberían tener gente mirando el celular.
            </p>
            <p
              style={{
                color: "#CCCCCC",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(16px, 2vw, 19px)",
                lineHeight: 1.5,
              }}
            >
              Después de armar más de 500 experiencias entre empresas, bodas,
              despedidas y cumpleaños, entendimos algo: lo importante no es el
              juego. Es la progresión. Es el ritmo. Es que el grupo se
              transforme sin que nadie se dé cuenta.
            </p>
            <p
              style={{
                color: "#CCCCCC",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(16px, 2vw, 19px)",
                lineHeight: 1.5,
              }}
            >
              Por eso hoy MGAMES no organiza eventos. Diseña experiencias. Las
              produce, las ejecuta, y mide lo que pasa en la energía de quienes
              participan.
            </p>
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
            Lo que <span style={{ color: c.accent }}>no negociamos</span>.
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
            Las personas <span style={{ color: c.accent }}>detrás</span>.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {TEAM.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group"
              >
                <div
                  className="relative overflow-hidden mb-3 md:mb-4"
                  style={{ aspectRatio: "3/4" }}
                >
                  <ImageWithFallback
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                    style={{
                      background: `linear-gradient(180deg, transparent 50%, ${c.accent}40)`,
                    }}
                  />
                </div>
                <div
                  className="uppercase text-white"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(16px, 2.2vw, 22px)",
                    letterSpacing: "0.04em",
                    lineHeight: 1.1,
                  }}
                >
                  {p.name}
                </div>
                <div
                  className="uppercase"
                  style={{
                    color: c.accent,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: 12,
                    letterSpacing: "0.16em",
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
