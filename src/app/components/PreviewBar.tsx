import mgamesLogo from "../../imports/mgames_logo.png";

export function PreviewBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] flex items-center gap-3 px-4 py-2.5"
      style={{
        backgroundColor: "#0a0f16",
        borderTop: "1px solid rgba(255,255,255,0.12)",
        minHeight: 52,
      }}
    >
      {/* Logo */}
      <img
        src={mgamesLogo}
        alt="MGames"
        style={{ height: 28, width: "auto", objectFit: "contain", flexShrink: 0 }}
      />

      {/* Separator */}
      <div
        style={{
          width: 1,
          height: 28,
          backgroundColor: "rgba(255,255,255,0.25)",
          flexShrink: 0,
        }}
      />

      {/* Text */}
      <p
        style={{
          color: "rgba(255,255,255,0.65)",
          fontSize: 12,
          lineHeight: 1.4,
          margin: 0,
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>
          Vista previa —
        </span>{" "}
        Esta es una versión preliminar de la plataforma en desarrollo.{" "}
        <span style={{ color: "rgba(255,255,255,0.5)" }}>
          Aviso: Algunos contenidos, funcionalidades y secciones pueden estar incompletos o no representar el resultado final.
        </span>
      </p>
    </div>
  );
}
