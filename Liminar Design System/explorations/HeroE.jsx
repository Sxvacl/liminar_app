/* === Hero E — "Para tu rubro" =====================================
   Tabs en la imagen: Abogados / Inmobiliaria / Mediación. Cada tab
   muestra un caso de uso real con la fuente, lo que detecta y la
   acción. El visitante reconoce SU caso de inmediato.
================================================================= */

function HeroE() {
  const [tab, setTab] = React.useState("abogados");
  const meta = {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: 9, fontWeight: 500, letterSpacing: "0.06em",
    textTransform: "uppercase", color: "#85858E",
  };

  const tabs = [
    { id: "abogados", label: "Abogados" },
    { id: "broker", label: "Inmobiliaria" },
    { id: "mediacion", label: "Mediación" },
  ];

  const content = {
    abogados: {
      source: "Mercado Público",
      detect: "Empresa que perdió licitación pública.",
      lead: "Constructora Aravena Ltda.",
      sub: "Postuló a 3 licitaciones · 0 adjudicadas (90 d)",
      contact: "Patricia Aravena · Gerente General",
      pitch: "«Vimos que no se adjudicaron la 1265-87. ¿Conversamos sobre asesoría legal en bases de licitación?»",
    },
    broker: {
      source: "Portal Inmobiliario",
      detect: "Vendedor particular sin captador.",
      lead: "Carolina Pérez · Ñuñoa",
      sub: "Depto. 3D · UF 5.200 · bajó precio 8% en 14 días",
      contact: "Carolina Pérez · Particular",
      pitch: "«Hola Carolina, vimos tu publicación del depto en Ñuñoa. ¿Te interesa que un broker te lo capte?»",
    },
    mediacion: {
      source: "SIMEF / Poder Judicial",
      detect: "Audiencia programada esta semana.",
      lead: "Causa C-2891-2026",
      sub: "Mediación familiar · audiencia 02/05",
      contact: "Demandante + Demandado",
      pitch: "«Te recordamos tu audiencia del viernes 02/05 a las 10:30. Confirmá tu asistencia por aquí.»",
    },
  };

  const c = content[tab];

  return (
    <div style={{ background: "#F8F8F7", border: "1px solid rgba(15,15,20,0.12)", overflow: "hidden" }}>
      {/* tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid rgba(15,15,20,0.10)" }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            flex: 1, padding: "12px 8px", border: "none", cursor: "pointer",
            background: tab === t.id ? "#F8F8F7" : "#EFEFEC",
            fontFamily: "Inter", fontSize: 12, fontWeight: 500,
            color: tab === t.id ? "#0F0F14" : "#85858E",
            borderBottom: tab === t.id ? "2px solid #1B44E3" : "2px solid transparent",
            transition: "all .2s",
          }}>{t.label}</button>
        ))}
      </div>

      {/* body */}
      <div style={{ padding: "18px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 14 }}>
          <div>
            <div style={{ ...meta, marginBottom: 4 }}>1. Monitoreamos</div>
            <div style={{ fontFamily: "Fraunces, serif", fontSize: 14, lineHeight: 1.3 }}>{c.source}</div>
          </div>
          <div>
            <div style={{ ...meta, marginBottom: 4 }}>2. Detectamos</div>
            <div style={{ fontFamily: "Fraunces, serif", fontSize: 14, fontStyle: "italic", fontWeight: 300, lineHeight: 1.3, color: "#0F0F14" }}>{c.detect}</div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(15,15,20,0.08)", paddingTop: 14, marginBottom: 14 }}>
          <div style={{ ...meta, marginBottom: 4 }}>3. Te entregamos</div>
          <div style={{ fontFamily: "Fraunces, serif", fontSize: 17, lineHeight: 1.25 }}>{c.lead}</div>
          <div style={{ fontFamily: "Inter", fontSize: 11.5, color: "#424248", marginTop: 2 }}>{c.sub}</div>
          <div style={{ fontFamily: "Inter", fontSize: 11.5, color: "#85858E", marginTop: 6 }}>Contacto: {c.contact}</div>
        </div>

        {/* pitch + WhatsApp */}
        <div style={{
          background: "#fff", border: "1px solid rgba(15,15,20,0.08)",
          padding: "10px 12px", borderRadius: "10px 10px 10px 2px", marginBottom: 12,
        }}>
          <div style={{ ...meta, marginBottom: 4 }}>4. Plantilla sugerida</div>
          <div style={{ fontFamily: "Inter", fontSize: 11.5, color: "#0F0F14", lineHeight: 1.5 }}>{c.pitch}</div>
        </div>

        <a style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
          background: "#1B44E3", color: "#fff", textDecoration: "none",
          fontFamily: "Inter", fontWeight: 500, fontSize: 12.5,
          padding: "10px", borderRadius: 999,
        }} href="#">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          </svg>
          Enviar por WhatsApp
        </a>
      </div>
    </div>
  );
}
window.HeroE = HeroE;
