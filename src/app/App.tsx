import { useEffect, useState } from "react";
import { NavBar, PageKey } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Stats } from "./components/Stats";
import { Process } from "./components/Process";
import { Gallery } from "./components/Gallery";
import { Fears } from "./components/Fears";
import { Manifesto } from "./components/Manifesto";
import { ContactForm } from "./components/ContactForm";
import { LogosCarousel } from "./components/LogosCarousel";
import { Footer } from "./components/Footer";
import { AboutPage } from "./components/AboutPage";
import { FaqPage } from "./components/FaqPage";
import { CATEGORIES, CategoryKey } from "./components/categories";
import { PreviewBar } from "./components/PreviewBar";

export default function App() {
  const [active, setActive] = useState<CategoryKey>("mgames");
  const [page, setPage] = useState<PageKey>("home");
  const c = CATEGORIES[active];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const goContact = () => {
    setPage("home");
    setTimeout(() => {
      document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: "#111820", color: "#FFFFFF", paddingBottom: 52 }}
    >
      <NavBar
        active={active}
        page={page}
        onSelectCategory={setActive}
        onNavigate={setPage}
      />

      {page === "home" && (
        <>
          <Hero active={active} onSelect={setActive} />
          <Marquee items={c.marquee} accent={c.accent} />
          <Stats active={active} />
          <Process active={active} />
          <Gallery active={active} />
          <Marquee items={c.marquee} accent={c.accent} reverse duration={40} />
          <Fears active={active} />
          <Manifesto active={active} />
          <ContactForm active={active} />
        </>
      )}

      {page === "nosotros" && <AboutPage active={active} onContact={goContact} />}
      {page === "faq" && <FaqPage active={active} onContact={goContact} />}

      <LogosCarousel active={active} />
      <Footer active={active} />
      <PreviewBar />
    </div>
  );
}
