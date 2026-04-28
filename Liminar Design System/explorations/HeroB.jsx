/* === Liminar Hero Variation B ====================================
   "Pipeline diagram" — three source rails on the left feeding into a
   qualified-lead row on the right with WhatsApp button. Real-estate
   broker case. Wide / horizontal composition.
================================================================= */

function HeroB() {
  const railLabel = {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: 9, fontWeight: 500, letterSpacing: "0.06em",
    textTransform: "uppercase", color: "#85858E",
  };
  const rail = (label, items, fading) => (
    <div style={{ marginBottom: 14 }}>
      <div style={{ ...railLabel, marginBottom: 6 }}>{label}</div>
      <div style={{
        background: "#F8F8F7",
        border: "1px solid rgba(15,15,20,0.10)",
        padding: "8px 10px",
        fontFamily: "Inter, sans-serif",
        fontSize: 11.5, color: "#424248", lineHeight: 1.5,
        opacity: fading,
      }}>{items}</div>
    </div>
  );

  return (
    <div style={{ position: "relative", display: "grid", gridTemplateColumns: "44% 12% 44%", alignItems: "center", gap: 0 }}>
      {/* LEFT: source rails */}
      <div>
        {rail("Portal Inmobiliario", "Depto. 3D · Ñuñoa · UF 5.200 · Particular", 1)}
        {rail("Toctoc", "Mismo RUT · 2 publicaciones activas", 0.8)}
        {rail("Yapo", "Sin agente · Tel. confirmado", 0.6)}
      </div>

      {/* MIDDLE: convergence svg */}
      <svg viewBox="0 0 80 220" style={{ width: "100%", height: 220, display: "block" }} aria-hidden="true">
        <line x1="0"  y1="40"  x2="80" y2="110" stroke="#85858E" strokeWidth="1" opacity=".5"/>
        <line x1="0"  y1="110" x2="80" y2="110" stroke="#85858E" strokeWidth="1" opacity=".7"/>
        <line x1="0"  y1="180" x2="80" y2="110" stroke="#85858E" strokeWidth="1" opacity=".5"/>
        <circle cx="80" cy="110" r="5" fill="#1B44E3"/>
        <text x="20" y="98" fontFamily="JetBrains Mono, monospace" fontSize="7"
              letterSpacing="0.06em" fill="#1B44E3" opacity=".75">CRUCE</text>
      </svg>

      {/* RIGHT: qualified lead with WhatsApp */}
      <div style={{
        background: "#F8F8F7",
        border: "1px solid rgba(15,15,20,0.12)",
        padding: 18,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={railLabel}>Lead calificado</span>
          <span style={{ ...railLabel, color: "#1B44E3" }}>● Listo</span>
        </div>
        <div style={{ fontFamily: "Fraunces, serif", fontSize: 19, lineHeight: 1.25, marginBottom: 4 }}>
          Carolina Pérez
        </div>
        <div style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 300, fontSize: 13, color: "#424248", marginBottom: 14 }}>
          Vendedora particular · Ñuñoa
        </div>
        <div style={{ borderTop: "1px solid rgba(15,15,20,0.08)", paddingTop: 12, marginBottom: 14 }}>
          <div style={{ ...railLabel, marginBottom: 4 }}>Señal</div>
          <p style={{ fontSize: 11.5, color: "#0F0F14", lineHeight: 1.5 }}>
            Bajó precio 8% en 14 días. Aún sin captador.
          </p>
        </div>
        <a style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          background: "#1B44E3", color: "#fff", textDecoration: "none",
          fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 12,
          padding: "9px 14px", borderRadius: 999,
        }} href="#">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.057 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884z"/>
          </svg>
          Contactar
        </a>
      </div>
    </div>
  );
}

window.HeroB = HeroB;
