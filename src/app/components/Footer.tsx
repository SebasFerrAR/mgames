import { Instagram, MessageCircle } from "lucide-react";
import logoImg from "../../imports/mgames_logo.png";
import { CATEGORIES, CategoryKey } from "./categories";

type Props = { active: CategoryKey };

export function Footer({ active }: Props) {
  const c = CATEGORIES[active];
  return (
    <footer className="w-full relative overflow-hidden" style={{ backgroundColor: "#0D1B2A" }}>
      <div
        style={{
          height: 4,
          background: `linear-gradient(90deg, ${c.accent} 0%, #E51A2E 50%, ${c.accent} 100%)`,
        }}
      />

      <div className="max-w-[1440px] mx-auto px-5 md:px-8 pt-16 md:pt-20 pb-10 md:pb-12 relative">
        <div
          className="uppercase pointer-events-none select-none absolute"
          style={{
            color: "rgba(255,255,255,0.04)",
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(120px, 22vw, 320px)",
            lineHeight: 0.78,
            bottom: -40,
            left: -10,
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
          }}
        >
          MGAMES
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logoImg} alt="MGAMES" className="h-10 w-auto" />
              <span
                className="text-white"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: 24,
                  letterSpacing: "0.12em",
                }}
              >
                MGAMES
              </span>
            </div>
            <p
              style={{
                color: "#CCCCCC",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 500,
                fontSize: 18,
                lineHeight: 1.3,
              }}
            >
              El grupo cambia. La experiencia no.
            </p>
          </div>

          <div>
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
              Experiencias
            </div>
            <div className="grid grid-cols-2 gap-y-2 gap-x-6">
              {["Empresas", "Bodas", "Despedidas", "Cumpleaños", "Kids", "Neon Night"].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="uppercase text-white hover:text-[var(--hov)] transition-colors"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 600,
                    fontSize: 15,
                    letterSpacing: "0.08em",
                    ["--hov" as any]: c.accent,
                  }}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
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
              Contacto
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <span
                className="text-white"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                hola@mgames.com.ar
              </span>
              <span
                className="text-white"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                +54 9 11 0000-0000
              </span>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex items-center justify-center hover:scale-110 transition-transform"
                style={{
                  width: 44,
                  height: 44,
                  border: `1px solid ${c.accent}`,
                  color: c.accent,
                }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center hover:scale-110 transition-transform"
                style={{
                  width: 44,
                  height: 44,
                  border: `1px solid ${c.accent}`,
                  color: c.accent,
                }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex flex-wrap items-center justify-between gap-4 pt-6"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            color: "#777",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 500,
            fontSize: 12,
            letterSpacing: "0.1em",
          }}
        >
          <span className="uppercase">© 2025 MGAMES. Todos los derechos reservados.</span>
          <a
            href="https://bydigitalarts.com"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase inline-flex items-center gap-2 group transition-colors"
            style={{
              color: "#999",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.18em",
            }}
          >
            <span>Powered by</span>
            <span
              className="transition-colors group-hover:text-white"
              style={{
                color: c.accent,
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.16em",
              }}
            >
              DigitalArts
            </span>
            <span
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
              style={{ color: c.accent }}
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
