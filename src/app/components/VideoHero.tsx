import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

type Props = {
  /** ID del video de YouTube (ej: "k5jQlsqqemU") */
  videoId: string;
  accent: string;
};

/**
 * Video hero superior: se embebe desde YouTube (autoplay, silenciado, en loop)
 * para no cargar el hosting. Sin texto encima — al scrollear cae el contenido.
 */
export function VideoHero({ videoId, accent }: Props) {
  const src =
    `https://www.youtube-nocookie.com/embed/${videoId}` +
    `?autoplay=1&mute=1&loop=1&playlist=${videoId}` +
    `&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&disablekb=1`;

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#000", height: "88vh", minHeight: 460 }}
    >
      {/* iframe de YouTube que cubre todo el contenedor (cover, sin barras) */}
      <iframe
        title="MGAMES"
        src={src}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        className="pointer-events-none absolute top-1/2 left-1/2"
        style={{
          transform: "translate(-50%, -50%)",
          width: "100vw",
          height: "56.25vw", // 16:9 respecto del ancho
          minHeight: "100%",
          minWidth: "177.78vh", // 16:9 respecto de la altura
          border: 0,
        }}
      />

      {/* Degradados para integrar con la web y dar contraste al indicador */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(17,24,32,0.35) 0%, transparent 22%, transparent 62%, rgba(17,24,32,0.95) 100%)",
        }}
      />

      {/* Indicador de scroll */}
      <button
        onClick={scrollDown}
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ bottom: 28 }}
        aria-label="Ver más"
      >
        <span
          className="uppercase"
          style={{
            color: "#FFFFFF",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.24em",
          }}
        >
          Descubrí más
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center justify-center"
          style={{
            width: 40,
            height: 40,
            border: `1px solid ${accent}`,
            color: accent,
          }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
    </section>
  );
}
