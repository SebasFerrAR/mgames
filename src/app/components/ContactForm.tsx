import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, CategoryKey, CATEGORY_ORDER } from "./categories";
import { Reviews } from "./Reviews";

type Props = { active: CategoryKey };

export function ContactForm({ active }: Props) {
  const c = CATEGORIES[active];

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
          <div className="grid grid-cols-2 gap-px mt-2" style={{ backgroundColor: "#3A3A3A" }}>
            {[
              ["WhatsApp", "+54 9 11 4849-5688"],
              ["Email", "info@mgames.com.ar"],
              ["IG", "@mgames_Experience"],
              ["Ubicación", "Buenos Aires, Argentina"],
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
          <div
            className="p-5 md:p-10"
            style={{
              backgroundColor: "#0D1B2A",
              border: `1px solid ${c.accent}40`,
            }}
          >
            {/* Formulario simplificado — 5 campos esenciales + origen (minuta 10/06/26) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label style={labelStyle}>Tipo de evento</label>
                <select style={inputStyle} defaultValue={c.key === "mgames" ? "" : c.key}>
                  <option value="" disabled>
                    Seleccionar…
                  </option>
                  {CATEGORY_ORDER.filter((k) => k !== "mgames").map((k) => (
                    <option key={k} value={k}>
                      {CATEGORIES[k].label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Tu nombre</label>
                <input type="text" placeholder="Nombre" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Celular</label>
                <input type="tel" placeholder="+54 9 11…" style={inputStyle} />
              </div>
              <div className="md:col-span-2">
                <label style={labelStyle}>Correo electrónico</label>
                <input type="email" placeholder="vos@mail.com" style={inputStyle} />
              </div>
              <div className="md:col-span-2">
                <label style={labelStyle}>Mensaje</label>
                <textarea
                  rows={4}
                  placeholder="Contanos del evento: cantidad de participantes, fecha, ubicación…"
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>
              <div className="md:col-span-2">
                <label style={labelStyle}>¿Cómo nos encontraste?</label>
                <select style={inputStyle} defaultValue="">
                  <option value="" disabled>
                    Seleccionar…
                  </option>
                  <option>Instagram</option>
                  <option>Google</option>
                  <option>Recomendación</option>
                  <option>Evento al que asistí</option>
                  <option>Otro</option>
                </select>
              </div>

              <button
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
                Recibir la propuesta
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
