/* === Liminar Hero Variation A ====================================
   "Lead Dossier" — single card showing a real qualified lead, sources
   converging into it as small chips, WhatsApp button live inside.
   The mock IS the imagery. Most editorial / publishing-feel.
================================================================= */

function HeroA() {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Source chips converging in from the top */}
      <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
        <span style={chipStyle}>Mercado Público</span>
        <span style={{ ...chipStyle, opacity: .55 }}>ChileCompra</span>
        <span style={{ ...chipStyle, opacity: .35 }}>Diario Oficial</span>
      </div>

      {/* Convergence lines */}
      <svg viewBox="0 0 360 38" style={{ width: "100%", height: 38, display: "block" }} aria-hidden="true">
        <line x1="50"  y1="0" x2="180" y2="38" stroke="#85858E" strokeWidth="1" opacity=".4"/>
        <line x1="180" y1="0" x2="180" y2="38" stroke="#85858E" strokeWidth="1" opacity=".55"/>
        <line x1="310" y1="0" x2="180" y2="38" stroke="#85858E" strokeWidth="1" opacity=".4"/>
        <circle cx="180" cy="38" r="4" fill="#1B44E3"/>
      </svg>

      {/* Lead Dossier card */}
      <div style={dossierCardA}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
          <span style={dossierLabel}>Lead · Jurídico</span>
          <span style={{ ...dossierLabel, color: "#1B44E3" }}>● Calificado</span>
        </div>
        <div style={{ fontFamily: "Fraunces, serif", fontSize: 24, fontWeight: 400, lineHeight: 1.2, marginBottom: 8 }}>
          Constructora Aravena Ltda.
        </div>
        <div style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 300, fontSize: 15, color: "#424248", marginBottom: 22 }}>
          No adjudicada · Licitación 1265-87-LR25
        </div>

        <div style={{ borderTop: "1px solid rgba(15,15,20,0.08)", paddingTop: 18, marginBottom: 18 }}>
          <span style={dossierLabel}>Señal detectada</span>
          <p style={{ fontSize: 13.5, color: "#0F0F14", marginTop: 6, lineHeight: 1.55 }}>
            Postuló a 3 licitaciones · 0 adjudicadas en últimos 90 días. Representante legal identificado.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, paddingBottom: 18, borderBottom: "1px solid rgba(15,15,20,0.08)", marginBottom: 18 }}>
          <div>
            <span style={dossierLabel}>Contacto</span>
            <div style={{ fontSize: 13.5, fontWeight: 500, color: "#0F0F14", marginTop: 4 }}>Patricia Aravena</div>
            <div style={{ fontSize: 12, color: "#85858E" }}>Gerente General</div>
          </div>
          <div>
            <span style={dossierLabel}>Email enriquecido</span>
            <div style={{ fontSize: 12.5, color: "#0F0F14", marginTop: 4, fontFamily: "Inter" }}>p.aravena@aravena.cl</div>
          </div>
        </div>

        <a style={waBtnA} href="#">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.057 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.47 3.488"/>
          </svg>
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
}

const chipStyle = {
  padding: "4px 10px",
  border: "1px solid rgba(15,15,20,0.26)",
  borderRadius: 4,
  color: "#85858E",
  fontSize: 10,
  fontFamily: "JetBrains Mono, monospace",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  background: "#F8F8F7",
};

const dossierLabel = {
  fontFamily: "JetBrains Mono, monospace",
  fontSize: 9,
  fontWeight: 500,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "#85858E",
};

const dossierCardA = {
  background: "#F8F8F7",
  border: "1px solid rgba(15,15,20,0.12)",
  padding: 24,
  position: "relative",
};

const waBtnA = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  background: "#1B44E3",
  color: "#fff",
  textDecoration: "none",
  fontFamily: "Inter, sans-serif",
  fontWeight: 500,
  fontSize: 13,
  padding: "10px 18px",
  borderRadius: 999,
};

window.HeroA = HeroA;
