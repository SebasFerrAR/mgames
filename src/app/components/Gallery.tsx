import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
import { CATEGORIES, CategoryKey } from "./categories";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Props = { active: CategoryKey };

export function Gallery({ active }: Props) {
  const c = CATEGORIES[active];
  const casos = c.casos ?? [];
  const hasCasos = casos.length > 0; // solo Empresas
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  // Bloquear scroll del body y cerrar con ESC mientras el popup está abierto
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const openCasos = (i = 0) => {
    setIdx(i);
    setOpen(true);
  };

  const caso = casos[idx];

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
            Postales / <span style={{ color: c.accent }}>{c.label}</span>
          </h2>
          {hasCasos && (
            <button
              onClick={() => openCasos(0)}
              className="uppercase inline-flex items-center gap-2 hover:gap-3 transition-all"
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
              Ver casos de éxito <ArrowUpRight size={18} />
            </button>
          )}
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
            {/* Mobile: tira horizontal scrolleable con todas las fotos */}
            <div
              className="col-span-12 md:hidden row-span-2 flex gap-2 overflow-x-auto snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
            >
              {c.images.map((src, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden shrink-0 snap-center"
                  style={{ width: "85%", height: "100%" }}
                >
                  <ImageWithFallback src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <div className="hidden md:block md:col-span-5 row-span-2 relative overflow-hidden group">
              <ImageWithFallback
                src={c.images[0]}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="hidden md:block md:col-span-4 row-span-1 relative overflow-hidden group">
              <ImageWithFallback
                src={c.images[1]}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Tile de estudio de caso. En Empresas abre el popup de casos. */}
            {hasCasos ? (
              <button
                onClick={() => openCasos(0)}
                className="hidden md:flex md:col-span-3 row-span-1 p-6 flex-col justify-between text-left group"
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
                  Casos de éxito
                </div>
                {/* Frase de inicio con contraste invertido (blanco) sobre el amarillo */}
                <div
                  className="uppercase"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: 24,
                    lineHeight: 0.98,
                  }}
                >
                  {c.h1.map((line, i) => (
                    <span key={i} style={{ color: i === 1 ? "#FFFFFF" : "inherit" }}>
                      {line}
                      {i < c.h1.length - 1 ? " " : ""}
                    </span>
                  ))}
                </div>
                <div
                  className="uppercase inline-flex items-center gap-2"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: "0.12em",
                  }}
                >
                  Ver {casos.length} casos
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </button>
            ) : (
              <div
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
                  {c.tag}
                </div>
                {/* Frase de inicio de la sección (recuadro con color de sección) */}
                <div
                  className="uppercase"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: 26,
                    lineHeight: 0.98,
                  }}
                >
                  {c.h1.join(" ")}
                </div>
              </div>
            )}

            <div className="hidden md:block md:col-span-3 row-span-1 relative overflow-hidden group">
              <ImageWithFallback
                src={c.images[2]}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="hidden md:block md:col-span-4 row-span-1 relative overflow-hidden group">
              <ImageWithFallback
                src={c.images[3]}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA de casos para mobile (el tile es solo desktop) */}
        {hasCasos && (
          <button
            onClick={() => openCasos(0)}
            className="md:hidden w-full mt-4 uppercase inline-flex items-center justify-center gap-2"
            style={{
              backgroundColor: c.accent,
              color: "#0D1B2A",
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.12em",
              padding: "16px 24px",
            }}
          >
            Ver casos de éxito <ArrowUpRight size={18} />
          </button>
        )}
      </div>

      {/* POPUP de casos de éxito (solo Empresas) */}
      <AnimatePresence>
        {open && caso && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
            style={{ backgroundColor: "rgba(8,12,16,0.9)" }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-[1040px] max-h-[90vh] overflow-auto"
              style={{ backgroundColor: "#111820", border: `1px solid ${c.accent}` }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 z-10 flex items-center justify-center hover:scale-110 transition-transform"
                style={{ width: 40, height: 40, backgroundColor: c.accent, color: "#0D1B2A" }}
                aria-label="Cerrar"
              >
                <X size={20} />
              </button>

              {/* Selector de casos */}
              <div
                className="flex flex-wrap gap-2 p-5 md:px-8 md:pt-8 pr-16"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
              >
                {casos.map((k, i) => (
                  <button
                    key={k.cliente}
                    onClick={() => setIdx(i)}
                    className="uppercase px-4 py-2 transition-colors"
                    style={{
                      backgroundColor: i === idx ? c.accent : "transparent",
                      color: i === idx ? "#0D1B2A" : "#FFFFFF",
                      border: `1px solid ${c.accent}`,
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {k.cliente}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {caso.image && (
                  <div className="relative min-h-[220px] md:min-h-full">
                    <ImageWithFallback
                      src={caso.image}
                      alt={caso.cliente}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className={`p-6 md:p-10 flex flex-col gap-5 ${caso.image ? "" : "md:col-span-2"}`}>
                  <div
                    className="uppercase inline-flex items-center gap-3"
                    style={{
                      color: c.accent,
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: "0.22em",
                    }}
                  >
                    <span style={{ width: 24, height: 2, background: c.accent, display: "inline-block" }} />
                    Caso de éxito
                  </div>

                  <h3
                    className="text-white uppercase"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(26px, 3.6vw, 40px)",
                      lineHeight: 1,
                    }}
                  >
                    {caso.titulo}
                  </h3>

                  {caso.datos && caso.datos.length > 0 && (
                    <div className="flex flex-wrap gap-x-8 gap-y-3">
                      {caso.datos.map((d) => (
                        <div key={d.label}>
                          <div
                            className="uppercase mb-1"
                            style={{
                              color: c.accent,
                              fontFamily: "'Barlow Condensed', sans-serif",
                              fontWeight: 700,
                              fontSize: 11,
                              letterSpacing: "0.2em",
                            }}
                          >
                            {d.label}
                          </div>
                          <div
                            className="text-white"
                            style={{
                              fontFamily: "'Oswald', sans-serif",
                              fontWeight: 700,
                              fontSize: 24,
                              lineHeight: 1,
                            }}
                          >
                            {d.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <Block label="El desafío" body={caso.desafio} accent={c.accent} />
                  <Block label="Cómo lo resolvimos" body={caso.solucion} accent={c.accent} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Block({ label, body, accent }: { label: string; body: string; accent: string }) {
  return (
    <div>
      <div
        className="uppercase mb-2"
        style={{
          color: accent,
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: 12,
          letterSpacing: "0.2em",
        }}
      >
        {label}
      </div>
      <p
        style={{
          color: "#CCCCCC",
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 500,
          fontSize: 17,
          lineHeight: 1.5,
        }}
      >
        {body}
      </p>
    </div>
  );
}
