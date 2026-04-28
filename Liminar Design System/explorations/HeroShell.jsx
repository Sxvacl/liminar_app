/* Shared hero shell — wraps each variation with the same headline,
   lede, CTAs, and source-tag bar. Image is the protagonist. */

function HeroShell({ children }) {
  return (
    <div style={{
      width: 1280,
      background: "#F8F8F7",
      padding: "72px 80px 96px",
      borderBottom: "1px solid rgba(15,15,20,0.08)",
      position: "relative",
      fontFamily: "Inter, sans-serif",
      color: "#0F0F14",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "48fr 52fr",
        gap: 72,
        alignItems: "center",
      }}>
        {/* LEFT — text */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%", background: "#1B44E3",
              animation: "limPulse 2.8s ease-in-out infinite", flexShrink: 0,
            }} />
            <span style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11, fontWeight: 500, letterSpacing: "0.06em",
              textTransform: "uppercase", color: "#85858E",
            }}>Lead generation · Datos accionables</span>
          </div>
          <h1 style={{
            fontFamily: "Fraunces, serif",
            fontSize: 60, fontWeight: 400, lineHeight: 1.05,
            letterSpacing: "-0.025em", marginBottom: 28,
          }}>
            Tus próximos clientes<br/>
            <em style={{ fontStyle: "italic", fontWeight: 300, color: "#1B44E3" }}>ya están en internet.</em><br/>
            Nosotros los encontramos.
          </h1>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "14px 30px", borderRadius: 999, background: "#1B44E3",
              color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: 15,
            }}>Agenda diagnóstico gratis →</a>
            <a style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "14px 30px", borderRadius: 999, background: "transparent",
              color: "#0F0F14", textDecoration: "none", fontWeight: 500, fontSize: 15,
              border: "1px solid rgba(15,15,20,0.26)",
            }}>Ver cómo funciona</a>
          </div>
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 8,
            marginTop: 44, paddingTop: 28,
            borderTop: "1px solid rgba(15,15,20,0.08)",
          }}>
            {["Mercado Público","Portal Inmobiliario","SIMEF / Poder Judicial","Yapo · Toctoc","Diario Oficial"].map(s => (
              <span key={s} style={{
                padding: "5px 12px",
                border: "1px solid rgba(15,15,20,0.26)", borderRadius: 4,
                color: "#85858E", fontSize: 12,
                fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.04em",
              }}>{s}</span>
            ))}
          </div>
        </div>

        {/* RIGHT — the imagery (passed in) */}
        <div>{children}</div>
      </div>

      {/* grain overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        opacity: 0.032,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23g)'/%3E%3C/svg%3E")`,
      }} />
    </div>
  );
}

window.HeroShell = HeroShell;
