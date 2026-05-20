import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImg from "../../imports/mgames_logo.png";
import { CATEGORIES, CATEGORY_ORDER, CategoryKey } from "./categories";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export type PageKey = "home" | "nosotros" | "faq";

type Props = {
  active: CategoryKey;
  page: PageKey;
  onSelectCategory: (k: CategoryKey) => void;
  onNavigate: (p: PageKey) => void;
};

export function NavBar({ active, page, onSelectCategory, onNavigate }: Props) {
  const [hoverExp, setHoverExp] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoverPreview, setHoverPreview] = useState<CategoryKey | null>(null);

  const expCats: CategoryKey[] = CATEGORY_ORDER.filter((k) => k !== "mgames");
  const preview = hoverPreview ? CATEGORIES[hoverPreview] : CATEGORIES[expCats[0]];

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const goHome = (k: CategoryKey) => {
    onSelectCategory(k);
    onNavigate("home");
    setHoverExp(false);
    setMobileOpen(false);
  };

  const goPage = (p: PageKey) => {
    onNavigate(p);
    setHoverExp(false);
    setMobileOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      <nav
        className="relative w-full"
        style={{
          backgroundColor: "#111820",
          borderBottom: "1px solid rgba(229, 26, 46, 0.4)",
        }}
        onMouseLeave={() => {
          setHoverExp(false);
          setHoverPreview(null);
        }}
      >
        <div
          className="max-w-[1440px] mx-auto h-[64px] md:h-[80px] flex items-center justify-between px-4 md:px-8 relative z-10"
        >
          <button
            onClick={() => goHome("mgames")}
            className="flex items-center gap-2 md:gap-3"
          >
            <img src={logoImg} alt="MGAMES" className="h-8 md:h-10 w-auto" />
            <span
              className="text-white tracking-[0.15em]"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(20px, 4vw, 26px)",
              }}
            >
              MGAMES
            </span>
          </button>

          {/* DESKTOP */}
          <div className="hidden lg:flex items-stretch h-full">
            <button
              onMouseEnter={() => setHoverExp(true)}
              onClick={() => setHoverExp((v) => !v)}
              className="relative h-full px-6 flex items-center gap-1.5 uppercase"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: "0.14em",
                color: "#FFFFFF",
              }}
            >
              Experiencias
              <ChevronDown
                size={16}
                className="transition-transform"
                style={{ transform: hoverExp ? "rotate(180deg)" : "rotate(0)" }}
              />
              <span
                className="absolute left-4 right-4 transition-transform duration-300 origin-left"
                style={{
                  bottom: 22,
                  height: 2,
                  background: "#E51A2E",
                  transform:
                    hoverExp || page === "home" ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </button>

            {(
              [
                { k: "nosotros" as PageKey, label: "Nosotros" },
                { k: "faq" as PageKey, label: "FAQ" },
              ]
            ).map(({ k, label }) => (
              <button
                key={k}
                onClick={() => goPage(k)}
                className="relative h-full px-6 flex items-center uppercase"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: "0.14em",
                  color: "#FFFFFF",
                }}
              >
                {label}
                <span
                  className="absolute left-4 right-4 transition-transform duration-300 origin-left"
                  style={{
                    bottom: 22,
                    height: 2,
                    background: "#E51A2E",
                    transform: page === k ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </button>
            ))}

            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("home");
                setTimeout(() => {
                  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                }, 50);
              }}
              className="relative h-full px-6 flex items-center uppercase"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: "0.14em",
                color: "#FFFFFF",
              }}
            >
              Contacto
            </a>
          </div>

          {/* DESKTOP CTA */}
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
              setTimeout(() => {
                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
              }, 50);
            }}
            className="hidden md:inline-flex uppercase text-white px-5 md:px-6 py-3 hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: "#E51A2E",
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.12em",
              borderRadius: 0,
            }}
          >
            Reservá ↗
          </a>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center"
            style={{
              width: 44,
              height: 44,
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#FFFFFF",
            }}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* DESKTOP DROPDOWN */}
      <AnimatePresence>
        {hoverExp && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 380, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden hidden lg:block"
            style={{
              backgroundColor: "#0D1B2A",
              borderBottom: `1px solid ${preview.accent}`,
            }}
            onMouseEnter={() => setHoverExp(true)}
            onMouseLeave={() => {
              setHoverExp(false);
              setHoverPreview(null);
            }}
          >
            <div className="max-w-[1440px] mx-auto px-8 py-8 grid grid-cols-12 gap-8 h-full">
              <div className="col-span-4">
                <div
                  className="uppercase mb-4"
                  style={{
                    color: preview.accent,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: 12,
                    letterSpacing: "0.22em",
                  }}
                >
                  Tipo de evento
                </div>
                <div className="flex flex-col">
                  {expCats.map((k) => {
                    const cat = CATEGORIES[k];
                    const isHover = hoverPreview === k;
                    return (
                      <button
                        key={k}
                        onMouseEnter={() => setHoverPreview(k)}
                        onClick={() => goHome(k)}
                        className="text-left py-2.5 uppercase transition-all flex items-center gap-3 group"
                        style={{
                          color: isHover ? cat.accent : "#FFFFFF",
                          fontFamily: "'Oswald', sans-serif",
                          fontWeight: 700,
                          fontSize: 28,
                          letterSpacing: "0.02em",
                          lineHeight: 1,
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <span
                          className="transition-all"
                          style={{
                            width: isHover ? 24 : 10,
                            height: 2,
                            background: cat.accent,
                            display: "inline-block",
                          }}
                        />
                        {cat.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="col-span-5 flex flex-col justify-between">
                <div>
                  <div
                    className="uppercase mb-3"
                    style={{
                      color: preview.accent,
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: "0.22em",
                    }}
                  >
                    {preview.tag}
                  </div>
                  <div
                    className="text-white uppercase"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 700,
                      fontSize: 44,
                      lineHeight: 0.95,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {preview.h1.join(" ")}
                  </div>
                </div>
                <button
                  onClick={() => goHome(preview.key)}
                  className="self-start uppercase mt-6 inline-flex items-center gap-2"
                  style={{
                    color: preview.accent,
                    borderBottom: `2px solid ${preview.accent}`,
                    paddingBottom: 4,
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: "0.14em",
                  }}
                >
                  Ver {preview.label} →
                </button>
              </div>

              <div className="col-span-3 grid grid-rows-2 gap-3">
                {preview.images.slice(0, 2).map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.35 }}
                    className="relative overflow-hidden"
                  >
                    <ImageWithFallback
                      src={src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(180deg, transparent 50%, ${preview.accent}30 100%)`,
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-40 overflow-y-auto"
            style={{ backgroundColor: "#0D1B2A", paddingTop: 64 }}
          >
            <div className="px-5 py-6">
              <div
                className="uppercase mb-4"
                style={{
                  color: "#E51A2E",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.22em",
                }}
              >
                Experiencias
              </div>
              <div className="flex flex-col">
                {expCats.map((k) => {
                  const cat = CATEGORIES[k];
                  const isActive = active === k && page === "home";
                  return (
                    <motion.button
                      key={k}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.04 * expCats.indexOf(k) }}
                      onClick={() => goHome(k)}
                      className="text-left py-4 uppercase flex items-center gap-3"
                      style={{
                        color: isActive ? cat.accent : "#FFFFFF",
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: 700,
                        fontSize: 32,
                        letterSpacing: "0.02em",
                        lineHeight: 1,
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <span
                        style={{
                          width: isActive ? 28 : 10,
                          height: 2,
                          background: cat.accent,
                          display: "inline-block",
                        }}
                      />
                      {cat.label}
                    </motion.button>
                  );
                })}
              </div>

              <div
                className="uppercase mt-10 mb-4"
                style={{
                  color: "#E51A2E",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.22em",
                }}
              >
                Más
              </div>
              <div className="flex flex-col">
                {[
                  { k: "nosotros" as PageKey, label: "Nosotros" },
                  { k: "faq" as PageKey, label: "FAQ" },
                ].map(({ k, label }) => (
                  <button
                    key={k}
                    onClick={() => goPage(k)}
                    className="text-left py-4 uppercase flex items-center gap-3"
                    style={{
                      color: page === k ? "#E51A2E" : "#FFFFFF",
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 700,
                      fontSize: 28,
                      letterSpacing: "0.02em",
                      lineHeight: 1,
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <span
                      style={{
                        width: page === k ? 28 : 10,
                        height: 2,
                        background: "#E51A2E",
                        display: "inline-block",
                      }}
                    />
                    {label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    onNavigate("home");
                    setMobileOpen(false);
                    setTimeout(() => {
                      document
                        .getElementById("contacto")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                  className="text-left py-4 uppercase flex items-center gap-3"
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: 28,
                    letterSpacing: "0.02em",
                    lineHeight: 1,
                  }}
                >
                  <span
                    style={{
                      width: 10,
                      height: 2,
                      background: "#E51A2E",
                      display: "inline-block",
                    }}
                  />
                  Contacto
                </button>
              </div>

              <button
                onClick={() => {
                  onNavigate("home");
                  setMobileOpen(false);
                  setTimeout(() => {
                    document
                      .getElementById("contacto")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="w-full uppercase text-white mt-10 py-4 hover:opacity-90 transition-opacity"
                style={{
                  backgroundColor: "#E51A2E",
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: "0.14em",
                  borderRadius: 0,
                }}
              >
                Reservá tu experiencia ↗
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
