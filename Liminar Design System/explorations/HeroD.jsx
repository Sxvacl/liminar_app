/* === Hero D — "Antes / Después" ===================================
   La forma más explícita: muestra el INPUT (un portal público real,
   tipo lista de licitaciones) → flecha → OUTPUT (lead listo para
   contactar con WhatsApp). El usuario entiende en 2 segundos.
================================================================= */

function HeroD() {
  const meta = {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: 9, fontWeight: 500, letterSpacing: "0.06em",
    textTransform: "uppercase", color: "#85858E",
  };

  const Row = ({ adj, name, n, dim }) => (
    <div style={{
      display: "grid", gridTemplateColumns: "auto 1fr auto",
      gap: 8, padding: "7px 10px",
      borderTop: "1px solid rgba(15,15,20,0.06)",
      fontFamily: "Inter", fontSize: 11,
      opacity: dim ? 0.5 : 1,
      background: adj === false ? "rgba(27,68,227,0.05)" : "transparent",
    }}>
      <span style={{ color: "#85858E", fontFamily: "JetBrains Mono, monospace", fontSize: 10 }}>{n}</span>
      <span style={{ color: "#0F0F14" }}>{name}</span>
      <span style={{
        fontFamily: "JetBrains Mono, monospace", fontSize: 9,
        color: adj === false ? "#1B44E3" : "#85858E",
        textTransform: "uppercase", letterSpacing: "0.05em",
      }}>{adj === false ? "No adjudicada" : "Adjudicada"}</span>
    </div>
  );

  return (
    <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 36px 1fr", alignItems: "stretch", gap: 0 }}>
      {/* INPUT — fragment of Mercado Público */}
      <div style={{ background: "#fff", border: "1px solid rgba(15,15,20,0.12)" }}>
        <div style={{ padding: "10px 12px", borderBottom: "1px solid rgba(15,15,20,0.10)", background: "#EFEFEC" }}>
          <div style={{ ...meta, marginBottom: 2 }}>Fuente pública</div>
          <div style={{ fontFamily: "Fraunces, serif", fontSize: 13, fontWeight: 500 }}>mercadopublico.cl · 1.247 licitaciones</div>
        </div>
        <Row n="01" name="Const. Vega Ltda." adj={true} dim />
        <Row n="02" name="Inmob. Pacífico SpA" adj={true} dim />
        <Row n="03" name="Constructora Aravena" adj={false} />
        <Row n="04" name="Servicios M&P Ltda." adj={true} dim />
        <Row n="05" name="Const. del Sur" adj={true} dim />
        <Row n="06" name="Aravena Ingeniería" adj={false} />
        <Row n="07" name="Promet Chile S.A." adj={true} dim />
      </div>

      {/* arrow */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg viewBox="0 0 36 30" width="36" height="30" aria-hidden="true">
          <line x1="2" y1="15" x2="30" y2="15" stroke="#1B44E3" strokeWidth="1.5"/>
          <polyline points="24,9 32,15 24,21" stroke="#1B44E3" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* OUTPUT — qualified lead */}
      <div style={{ background: "#F8F8F7", border: "1px solid rgba(15,15,20,0.12)", padding: "14px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={meta}>Lead entregado</span>
          <span style={{ ...meta, color: "#1B44E3" }}>● Listo</span>
        </div>
        <div style={{ fontFamily: "Fraunces, serif", fontSize: 18, lineHeight: 1.25 }}>Constructora Aravena</div>
        <div style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 300, fontSize: 12, color: "#424248", marginBottom: 10 }}>
          Perdió licitación 1265-87-LR25
        </div>
        <div style={{ borderTop: "1px solid rgba(15,15,20,0.08)", paddingTop: 10, marginBottom: 10, fontSize: 11.5, color: "#0F0F14", lineHeight: 1.5 }}>
          <strong style={{ fontWeight: 500 }}>Patricia Aravena</strong> · Gerente General<br/>
          <span style={{ color: "#424248" }}>p.aravena@aravena.cl</span><br/>
          <span style={{ color: "#424248" }}>+56 9 8742 1903</span>
        </div>
        <a style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
          background: "#1B44E3", color: "#fff", textDecoration: "none",
          fontFamily: "Inter", fontWeight: 500, fontSize: 12,
          padding: "8px 12px", borderRadius: 999,
        }} href="#">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          </svg>
          WhatsApp directo
        </a>
        <div style={{ ...meta, marginTop: 10, textAlign: "center" }}>← Detectado en la columna izquierda</div>
      </div>
    </div>
  );
}
window.HeroD = HeroD;
