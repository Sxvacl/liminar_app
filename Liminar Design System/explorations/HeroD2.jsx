/* === Hero D2 — "Antes / Después" con dos rubros =================
   Versión D extendida: tabs (Abogados / Inmobiliaria) + auto-rotación
   cada 7s. Si el usuario clickea un tab, se pausa la rotación y queda
   fijo en su elección.

   - Abogados:    Mercado Público / ChileCompra → empresa no adjudicada
   - Inmobiliaria: Portal Inmobiliario / Yapo / Toctoc → vendedor particular

   Datos de contacto NO se muestran (privacidad). Solo canales disponibles.
================================================================= */

function HeroD2() {
  const [tab, setTab] = React.useState("abogados");
  const [paused, setPaused] = React.useState(false);

  // Auto-rotate
  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setTab(t => t === "abogados" ? "inmobiliaria" : "abogados");
    }, 7000);
    return () => clearInterval(id);
  }, [paused]);

  const onTabClick = (id) => { setTab(id); setPaused(true); };

  const meta = {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: 9, fontWeight: 500, letterSpacing: "0.06em",
    textTransform: "uppercase", color: "#85858E",
  };

  // ── Data per rubro ────────────────────────────────────────────
  const data = {
    abogados: {
      sourceLabel: "Fuente pública",
      sourceName: "mercadopublico.cl · 1.247 licitaciones",
      rows: [
        { n: "01", name: "Const. Vega Ltda.", flag: "ok",  flagText: "Adjudicada" },
        { n: "02", name: "Inmob. Pacífico SpA", flag: "ok", flagText: "Adjudicada" },
        { n: "03", name: "Constructora Aravena", flag: "no", flagText: "No adjudicada" },
        { n: "04", name: "Servicios M&P Ltda.", flag: "ok", flagText: "Adjudicada" },
        { n: "05", name: "Const. del Sur",      flag: "ok", flagText: "Adjudicada" },
        { n: "06", name: "Aravena Ingeniería",  flag: "no", flagText: "No adjudicada" },
        { n: "07", name: "Promet Chile S.A.",   flag: "ok", flagText: "Adjudicada" },
      ],
      lead: {
        title: "Constructora del rubro vialidad",
        sub: "Postuló a 3 licitaciones · 0 adjudicadas (90 d)",
        signal: "Lic. 1265-87-LR25 · No adjudicada",
        contextLabel: "Plazo para impugnar",
        contextValue: "5 días hábiles",
        channels: ["WhatsApp", "Email", "Web"],
        cta: "Contactar por WhatsApp",
      },
    },
    inmobiliaria: {
      sourceLabel: "Fuente pública",
      sourceName: "portalinmobiliario.com · 832 publicaciones",
      rows: [
        { n: "01", name: "Depto 2D · Las Condes", flag: "agency", flagText: "Inmobiliaria" },
        { n: "02", name: "Depto 3D · Ñuñoa",      flag: "particular", flagText: "Particular" },
        { n: "03", name: "Casa 4D · La Reina",    flag: "agency", flagText: "Inmobiliaria" },
        { n: "04", name: "Depto 1D · Providencia",flag: "agency", flagText: "Inmobiliaria" },
        { n: "05", name: "Depto 3D · Vitacura",   flag: "particular", flagText: "Particular" },
        { n: "06", name: "Casa 5D · Lo Barnechea",flag: "agency", flagText: "Inmobiliaria" },
        { n: "07", name: "Depto 2D · Macul",      flag: "agency", flagText: "Inmobiliaria" },
      ],
      lead: {
        title: "Depto 3D · Ñuñoa",
        sub: "Vendedor particular · sin captador",
        signal: "UF 5.200 · Bajó precio 8% en 14 días",
        contextLabel: "Publicado",
        contextValue: "Hace 9 días",
        channels: ["WhatsApp", "Formulario portal"],
        cta: "Contactar por WhatsApp",
      },
    },
  };

  const d = data[tab];

  // ── Row renderer ──────────────────────────────────────────────
  const Row = ({ row }) => {
    const highlight = row.flag === "no" || row.flag === "particular";
    const flagColor = highlight ? "#1B44E3" : "#85858E";
    return (
      <div style={{
        display: "grid", gridTemplateColumns: "auto 1fr auto",
        gap: 8, padding: "7px 10px",
        borderTop: "1px solid rgba(15,15,20,0.06)",
        fontFamily: "Inter", fontSize: 11,
        opacity: highlight ? 1 : 0.5,
        background: highlight ? "rgba(27,68,227,0.05)" : "transparent",
        transition: "opacity .35s, background .35s",
      }}>
        <span style={{ color: "#85858E", fontFamily: "JetBrains Mono, monospace", fontSize: 10 }}>{row.n}</span>
        <span style={{ color: "#0F0F14" }}>{row.name}</span>
        <span style={{
          fontFamily: "JetBrains Mono, monospace", fontSize: 9,
          color: flagColor, textTransform: "uppercase", letterSpacing: "0.05em",
        }}>{row.flagText}</span>
      </div>
    );
  };

  // ── Tabs ──────────────────────────────────────────────────────
  const Tab = ({ id, label }) => {
    const active = tab === id;
    return (
      <button onClick={() => onTabClick(id)} style={{
        flex: 1, padding: "10px 12px", border: "none", cursor: "pointer",
        background: active ? "#F8F8F7" : "#EFEFEC",
        fontFamily: "Inter", fontSize: 11.5, fontWeight: 500,
        color: active ? "#0F0F14" : "#85858E",
        borderBottom: active ? "2px solid #1B44E3" : "2px solid transparent",
        transition: "all .25s",
        position: "relative",
      }}>{label}</button>
    );
  };

  return (
    <div style={{ background: "#F8F8F7", border: "1px solid rgba(15,15,20,0.12)" }}>
      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid rgba(15,15,20,0.10)", position: "relative" }}>
        <Tab id="abogados" label="Para Abogados" />
        <Tab id="inmobiliaria" label="Para Inmobiliaria" />
        {/* progress bar — auto-rotate indicator */}
        {!paused && (
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: 1,
            background: "transparent", overflow: "hidden",
          }}>
            <div key={tab} style={{
              height: "100%", background: "#1B44E3", opacity: 0.4,
              animation: "limProgress 7s linear forwards",
              transformOrigin: "left",
            }}/>
          </div>
        )}
      </div>

      {/* Body — animated key forces fade between tabs */}
      <div key={tab} style={{
        position: "relative", display: "grid",
        gridTemplateColumns: "1fr 36px 1fr", alignItems: "stretch", gap: 0,
        animation: "limFade .45s ease",
      }}>
        {/* INPUT */}
        <div style={{ background: "#fff", borderRight: "1px solid rgba(15,15,20,0.10)" }}>
          <div style={{ padding: "10px 12px", borderBottom: "1px solid rgba(15,15,20,0.10)", background: "#EFEFEC" }}>
            <div style={{ ...meta, marginBottom: 2 }}>{d.sourceLabel}</div>
            <div style={{ fontFamily: "Fraunces, serif", fontSize: 13, fontWeight: 500 }}>{d.sourceName}</div>
          </div>
          {d.rows.map((r, i) => <Row key={i} row={r} />)}
        </div>

        {/* arrow */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#F8F8F7" }}>
          <svg viewBox="0 0 36 30" width="36" height="30" aria-hidden="true">
            <line x1="2" y1="15" x2="30" y2="15" stroke="#1B44E3" strokeWidth="1.5"/>
            <polyline points="24,9 32,15 24,21" stroke="#1B44E3" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* OUTPUT */}
        <div style={{ background: "#F8F8F7", padding: "14px 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={meta}>Lead entregado</span>
            <span style={{ ...meta, color: "#1B44E3" }}>● Listo</span>
          </div>
          <div style={{ fontFamily: "Fraunces, serif", fontSize: 16.5, lineHeight: 1.25 }}>{d.lead.title}</div>
          <div style={{ fontFamily: "Inter", fontSize: 11.5, color: "#424248", marginTop: 2, marginBottom: 10 }}>
            {d.lead.sub}
          </div>

          <div style={{
            borderTop: "1px solid rgba(15,15,20,0.08)",
            borderBottom: "1px solid rgba(15,15,20,0.08)",
            padding: "10px 0", marginBottom: 10,
          }}>
            <div style={{ ...meta, marginBottom: 4 }}>Señal detectada</div>
            <div style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 300, fontSize: 13, color: "#0F0F14", lineHeight: 1.35 }}>
              {d.lead.signal}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 11 }}>
              <span style={{ color: "#85858E" }}>{d.lead.contextLabel}</span>
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10.5, color: "#1B44E3", fontWeight: 500 }}>{d.lead.contextValue}</span>
            </div>
          </div>

          {/* Channels — no personal data */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ ...meta, marginBottom: 6 }}>Canales disponibles</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {d.lead.channels.map(ch => (
                <span key={ch} style={{
                  fontFamily: "JetBrains Mono, monospace", fontSize: 9,
                  padding: "3px 8px", background: "#fff",
                  border: "1px solid rgba(15,15,20,0.14)", borderRadius: 999,
                  color: "#424248", letterSpacing: "0.04em", textTransform: "uppercase",
                }}>● {ch}</span>
              ))}
            </div>
          </div>

          <a style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            background: "#1B44E3", color: "#fff", textDecoration: "none",
            fontFamily: "Inter", fontWeight: 500, fontSize: 12,
            padding: "9px 12px", borderRadius: 999,
          }} href="#">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            {d.lead.cta}
          </a>
          <div style={{ ...meta, marginTop: 10, textAlign: "center" }}>← Detectado en la columna izquierda</div>
        </div>
      </div>

      <style>{`
        @keyframes limFade {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes limProgress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
window.HeroD2 = HeroD2;
