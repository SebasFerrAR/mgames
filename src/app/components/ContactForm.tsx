import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, CategoryKey, CATEGORY_ORDER } from "./categories";
import { Reviews } from "./Reviews";

type Props = { active: CategoryKey };

export function ContactForm({ active }: Props) {
  const c = CATEGORIES[active];
  const [step, setStep] = useState(1);
  const [withAlcohol, setWithAlcohol] = useState(false);
  const [setting, setSetting] = useState("indistinto");

  const labelStyle: React.CSSProperties = {
    color: c.accent,
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: 10,
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#0D1B2A",
    border: "1px solid #3A3A3A",
    color: "#FFFFFF",
    padding: "16px 16px",
    borderRadius: 0,
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 500,
    fontSize: 16,
    outline: "none",
  };

  return (
    <section id="contacto" className="w-full relative" style={{ backgroundColor: "#111820" }}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-5">
          <div
            className="uppercase mb-4"
            style={{
              color: c.accent,
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.22em",
            }}
          >
            Hablemos
          </div>
          <h2
            className="text-white uppercase mb-6"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(44px, 6vw, 84px)",
              lineHeight: 0.95,
              letterSpacing: "0.005em",
            }}
          >
            Contanos lo que tenés en <span style={{ color: c.accent }}>mente.</span>
          </h2>
          <p
            className="max-w-md mb-8"
            style={{
              color: "#CCCCCC",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 500,
              fontSize: 19,
              lineHeight: 1.4,
            }}
          >
            Te respondemos en menos de 24hs con una propuesta a medida.
          </p>
          <div className="grid grid-cols-2 gap-px" style={{ backgroundColor: "#3A3A3A" }}>
            {[
              ["WhatsApp", "+54 9 11 0000-0000"],
              ["Email", "hola@mgames.com.ar"],
              ["IG", "@mgames"],
              ["Ubicación", "BA / LATAM"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="p-4"
                style={{ backgroundColor: "#0D1B2A" }}
              >
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
                  {k}
                </div>
                <div
                  className="text-white"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  {v}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Reviews active={active} />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-8">
            {[1, 2].map((s) => (
              <div
                key={s}
                className="flex-1 h-1"
                style={{
                  backgroundColor: step >= s ? c.accent : "#3A3A3A",
                }}
              />
            ))}
            <div
              className="uppercase ml-3"
              style={{
                color: "#CCCCCC",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.18em",
              }}
            >
              {step} / 2
            </div>
          </div>

          <div
            className="p-5 md:p-10"
            style={{
              backgroundColor: "#0D1B2A",
              border: `1px solid ${c.accent}40`,
            }}
          >
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label style={labelStyle}>Tipo de evento</label>
                  <select style={inputStyle} defaultValue={c.key}>
                    {CATEGORY_ORDER.filter((k) => k !== "mgames").map((k) => (
                      <option key={k} value={k}>
                        {CATEGORIES[k].label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Cantidad de personas</label>
                  <input type="number" placeholder="Ej: 50" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Ubicación</label>
                  <input type="text" placeholder="Ciudad o salón" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Fecha tentativa</label>
                  <input type="date" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Tu nombre</label>
                  <input type="text" placeholder="Nombre" style={inputStyle} />
                </div>
                <div className="md:col-span-2">
                  <label style={labelStyle}>Email o WhatsApp</label>
                  <input type="text" placeholder="vos@mail.com / +54 9…" style={inputStyle} />
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="md:col-span-2 group uppercase inline-flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
                  style={{
                    backgroundColor: c.accent,
                    color: "#0D1B2A",
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    letterSpacing: "0.12em",
                    padding: "18px 36px",
                    borderRadius: 0,
                    width: "100%",
                  }}
                >
                  Siguiente
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label style={labelStyle}>¿Juegos con alcohol?</label>
                  <div className="flex gap-2">
                    {[
                      { v: true, l: "Sí" },
                      { v: false, l: "No" },
                    ].map((o) => (
                      <button
                        key={o.l}
                        onClick={() => setWithAlcohol(o.v)}
                        className="uppercase px-6 py-3"
                        style={{
                          backgroundColor: withAlcohol === o.v ? c.accent : "transparent",
                          color: withAlcohol === o.v ? "#0D1B2A" : "#FFFFFF",
                          border: `1px solid ${c.accent}`,
                          fontFamily: "'Oswald', sans-serif",
                          fontWeight: 700,
                          fontSize: 13,
                          letterSpacing: "0.14em",
                          borderRadius: 0,
                        }}
                      >
                        {o.l}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Edad promedio</label>
                  <select style={inputStyle} defaultValue="">
                    <option value="" disabled>Seleccionar…</option>
                    <option>-18</option>
                    <option>18 - 35</option>
                    <option>35 - 50</option>
                    <option>50+</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>¿Aire libre o indoor?</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { v: "aire", l: "Aire libre" },
                      { v: "indoor", l: "Indoor" },
                      { v: "indistinto", l: "Indistinto" },
                    ].map((o) => (
                      <button
                        key={o.v}
                        onClick={() => setSetting(o.v)}
                        className="uppercase px-6 py-3"
                        style={{
                          backgroundColor: setting === o.v ? c.accent : "transparent",
                          color: setting === o.v ? "#0D1B2A" : "#FFFFFF",
                          border: `1px solid ${c.accent}`,
                          fontFamily: "'Oswald', sans-serif",
                          fontWeight: 700,
                          fontSize: 13,
                          letterSpacing: "0.14em",
                          borderRadius: 0,
                        }}
                      >
                        {o.l}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="uppercase"
                    style={{
                      backgroundColor: "transparent",
                      color: c.accent,
                      border: `2px solid ${c.accent}`,
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      letterSpacing: "0.12em",
                      padding: "16px 28px",
                      borderRadius: 0,
                    }}
                  >
                    Atrás
                  </button>
                  <button
                    className="group uppercase inline-flex items-center justify-center gap-3 flex-1 hover:opacity-90 transition-opacity"
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
                    Recibir la propuesta
                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
