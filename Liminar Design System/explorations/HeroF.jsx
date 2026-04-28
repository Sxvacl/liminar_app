/* === Hero F — "Inbox de leads de la semana" =======================
   Una bandeja de entrada estilo CRM con varios leads ya entregados,
   cada uno con su fuente, rubro y botón. El visitante ve el output
   real del servicio en producción.
================================================================= */

function HeroF() {
  const meta = {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: 9, fontWeight: 500, letterSpacing: "0.06em",
    textTransform: "uppercase", color: "#85858E",
  };

  const leads = [
    { src: "Mercado Público", rubro: "Jurídico", who: "Constructora Aravena", what: "No adjudicada · Lic. 1265-87", time: "hace 12 min", live: true },
    { src: "Portal Inmobiliario", rubro: "Broker", who: "Carolina Pérez", what: "Vendedora particular · Ñuñoa", time: "hace 1 h" },
    { src: "SIMEF", rubro: "Mediación", who: "Causa C-2891-2026", what: "Audiencia 02/05", time: "hace 3 h" },
    { src: "ChileCompra", rubro: "Jurídico", who: "Inmob. Pacífico", what: "3 licitaciones perdidas (90 d)", time: "ayer" },
  ];

  return (
    <div style={{ background: "#F8F8F7", border: "1px solid rgba(15,15,20,0.12)", overflow: "hidden" }}>
      {/* header */}
      <div style={{
        padding: "12px 16px",
        borderBottom: "1px solid rgba(15,15,20,0.10)",
        background: "#EFEFEC",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div>
          <div style={{ ...meta, marginBottom: 2 }}>Tu bandeja</div>
          <div style={{ fontFamily: "Fraunces, serif", fontSize: 14, fontWeight: 500 }}>Leads de esta semana · 4 nuevos</div>
        </div>
        <span style={{ ...meta, color: "#1B44E3" }}>● En vivo</span>
      </div>

      {/* list */}
      {leads.map((l, i) => (
        <div key={i} style={{
          padding: "12px 16px",
          borderBottom: i < leads.length - 1 ? "1px solid rgba(15,15,20,0.06)" : "none",
          display: "grid", gridTemplateColumns: "1fr auto", gap: 10, alignItems: "center",
          background: l.live ? "rgba(27,68,227,0.04)" : "transparent",
        }}>
          <div>
            <div style={{ display: "flex", gap: 6, marginBottom: 4, alignItems: "center" }}>
              <span style={{
                fontFamily: "JetBrains Mono, monospace", fontSize: 8.5,
                padding: "2px 6px", border: "1px solid rgba(15,15,20,0.20)",
                color: "#85858E", letterSpacing: "0.04em", textTransform: "uppercase",
                borderRadius: 3,
              }}>{l.src}</span>
              <span style={{ ...meta, color: l.live ? "#1B44E3" : "#85858E" }}>● {l.rubro}</span>
              <span style={{ ...meta, marginLeft: "auto" }}>{l.time}</span>
            </div>
            <div style={{ fontFamily: "Fraunces, serif", fontSize: 14, lineHeight: 1.25 }}>{l.who}</div>
            <div style={{ fontFamily: "Inter", fontSize: 11, color: "#424248", marginTop: 1 }}>{l.what}</div>
          </div>
          <a style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            background: l.live ? "#1B44E3" : "transparent",
            color: l.live ? "#fff" : "#0F0F14",
            border: l.live ? "none" : "1px solid rgba(15,15,20,0.26)",
            textDecoration: "none",
            fontFamily: "Inter", fontWeight: 500, fontSize: 11,
            padding: "6px 12px", borderRadius: 999, whiteSpace: "nowrap",
          }} href="#">
            {l.live && (
              <svg width="11" height="11" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
            )}
            {l.live ? "Contactar" : "Ver"}
          </a>
        </div>
      ))}

      {/* footer */}
      <div style={{
        padding: "10px 16px",
        borderTop: "1px solid rgba(15,15,20,0.08)",
        background: "#EFEFEC",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={meta}>Próxima actualización en 2 h</span>
        <span style={{ ...meta }}>Ver bandeja completa →</span>
      </div>
    </div>
  );
}
window.HeroF = HeroF;
