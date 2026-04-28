/* === Liminar Hero Variation C ====================================
   "WhatsApp conversation already live" — phone-style chat mock with
   Liminar bot delivering a freshly-detected lead to the user.
   The contact channel IS the imagery. Most product-feel of the three.
================================================================= */

function HeroC() {
  const meta = {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: 9, fontWeight: 500, letterSpacing: "0.06em",
    textTransform: "uppercase", color: "#85858E",
  };

  return (
    <div style={{ position: "relative" }}>
      {/* small contextual chips above */}
      <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
        <span style={{ ...meta, color: "#1B44E3" }}>● En vivo</span>
        <span style={meta}>Detectado hace 4 min</span>
        <span style={meta}>Mercado Público → SIMEF</span>
      </div>

      {/* Chat container — feels like a mini-WhatsApp window */}
      <div style={{
        background: "#F8F8F7",
        border: "1px solid rgba(15,15,20,0.12)",
        padding: 0,
        overflow: "hidden",
      }}>
        {/* chat header */}
        <div style={{
          padding: "12px 16px",
          borderBottom: "1px solid rgba(15,15,20,0.08)",
          display: "flex", alignItems: "center", gap: 10,
          background: "#EFEFEC",
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: "#0F0F14",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ width: 14, height: 1, background: "#F8F8F7", marginRight: -1 }} />
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#1B44E3" }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 500 }}>Liminar · Alertas</div>
            <div style={{ ...meta, marginTop: 2 }}>en línea</div>
          </div>
          <span style={{ ...meta }}>WhatsApp</span>
        </div>

        {/* messages */}
        <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: 10, background: "#F8F8F7" }}>
          {/* incoming bubble — lead delivered */}
          <div style={{
            alignSelf: "flex-start", maxWidth: "85%",
            background: "#fff",
            border: "1px solid rgba(15,15,20,0.08)",
            padding: "10px 12px",
            borderRadius: "10px 10px 10px 2px",
          }}>
            <div style={{ ...meta, marginBottom: 4 }}>Nuevo lead · Jurídico</div>
            <div style={{ fontFamily: "Fraunces, serif", fontSize: 15, lineHeight: 1.3, marginBottom: 4 }}>
              Constructora Aravena Ltda.
            </div>
            <div style={{ fontFamily: "Inter", fontSize: 11.5, color: "#424248", lineHeight: 1.5 }}>
              No adjudicada en licitación 1265-87-LR25. Representante legal: Patricia Aravena.
            </div>
          </div>

          {/* incoming bubble — quick actions */}
          <div style={{
            alignSelf: "flex-start", maxWidth: "85%",
            background: "#fff",
            border: "1px solid rgba(15,15,20,0.08)",
            padding: "10px 12px",
            borderRadius: "10px 10px 10px 2px",
            display: "flex", flexDirection: "column", gap: 6,
          }}>
            <div style={{ fontFamily: "Inter", fontSize: 11.5, color: "#0F0F14", marginBottom: 4 }}>
              ¿Querés contactarla ahora?
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              <span style={{
                fontFamily: "Inter", fontSize: 11, color: "#1B44E3",
                border: "1px solid #1B44E3", padding: "4px 10px", borderRadius: 999,
              }}>Llamar</span>
              <span style={{
                fontFamily: "Inter", fontSize: 11, color: "#1B44E3",
                border: "1px solid #1B44E3", padding: "4px 10px", borderRadius: 999,
              }}>Email plantilla</span>
              <span style={{
                fontFamily: "Inter", fontSize: 11, color: "#fff", background: "#1B44E3",
                padding: "4px 10px", borderRadius: 999,
              }}>Abrir WhatsApp</span>
            </div>
          </div>

          {/* outgoing bubble */}
          <div style={{
            alignSelf: "flex-end", maxWidth: "70%",
            background: "#0F0F14", color: "#F8F8F7",
            padding: "10px 12px",
            borderRadius: "10px 10px 2px 10px",
            fontFamily: "Inter", fontSize: 11.5, lineHeight: 1.45,
          }}>
            Listo, le escribo hoy. Mandame el siguiente.
          </div>
        </div>

        {/* footer summary */}
        <div style={{
          padding: "10px 16px",
          borderTop: "1px solid rgba(15,15,20,0.08)",
          background: "#EFEFEC",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <span style={meta}>3 leads esta semana</span>
          <span style={{ ...meta, color: "#1B44E3" }}>● Activo</span>
        </div>
      </div>
    </div>
  );
}

window.HeroC = HeroC;
