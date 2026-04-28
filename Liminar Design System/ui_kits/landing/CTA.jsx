function CTA() {
  const d = window.LIMINAR_DATA.cta;
  const [submitted, setSubmitted] = React.useState(false);

  const fieldStyle = (focused) => ({
    width: "100%", padding: "12px 16px",
    background: "#F8F8F7",
    border: `1px solid ${focused ? "#1B44E3" : "rgba(15,15,20,0.26)"}`,
    borderRadius: 4,
    fontFamily: "Inter, sans-serif", fontSize: "0.9375rem",
    color: "#0F0F14", outline: "none",
    boxShadow: focused ? "0 0 0 3px rgba(27,68,227,0.10)" : "none",
    WebkitAppearance: "none", appearance: "none",
    transition: "border-color .2s, box-shadow .2s",
  });

  const labelStyle = {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: "0.625rem", fontWeight: 500,
    letterSpacing: "0.06em", textTransform: "uppercase", color: "#85858E",
  };

  const Field = ({ id, label, children }) => {
    const [focus, setFocus] = React.useState(false);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label htmlFor={id} style={labelStyle}>{label}</label>
        {React.cloneElement(children, {
          id, name: id,
          style: fieldStyle(focus),
          onFocus: () => setFocus(true),
          onBlur: () => setFocus(false),
        })}
      </div>
    );
  };

  return (
    <section id="cta" aria-labelledby="cta-h" data-screen-label="CTA" style={{ padding: "128px 0", background: "#EFEFEC", borderBottom: "1px solid rgba(15,15,20,0.08)" }}>
      <div className="w">
        <div className="cta-grid">
          <div>
            <h2 id="cta-h" style={{ fontFamily: "Fraunces, serif", fontOpticalSizing: "auto", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.025em", marginBottom: 20 }}>
              {d.h2Pre}<br/>{d.h2Mid}<em style={{ fontStyle: "italic", fontWeight: 300, color: "#1B44E3" }}>{d.h2Em}</em>
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#424248", marginBottom: 32 }}>{d.sub}</p>
            <div style={{ fontSize: "0.875rem", color: "#85858E", lineHeight: 1.9 }}>
              <Mono style={{ display: "block", marginBottom: 10 }}>{d.contactLabel}</Mono>
              <a href={`mailto:${d.email}`} style={{ color: "#424248", textDecoration: "none", borderBottom: "1px solid rgba(15,15,20,0.26)" }}>{d.email}</a><br/>
              <a href="#" style={{ color: "#424248", textDecoration: "none", borderBottom: "1px solid rgba(15,15,20,0.26)" }}>{d.whatsapp}</a>
            </div>
          </div>
          <div>
            {!submitted ? (
              <form style={{ display: "flex", flexDirection: "column", gap: 14 }} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div style={{ display: "grid", gap: 14, gridTemplateColumns: "1fr 1fr" }}>
                  <Field id="nombre" label="Nombre"><input type="text" placeholder="Tu nombre" required /></Field>
                  <Field id="empresa" label="Empresa / Rubro"><input type="text" placeholder="Inmobiliaria, estudio..." /></Field>
                </div>
                <Field id="email" label="Email"><input type="email" placeholder="tu@email.com" required /></Field>
                <Field id="situacion" label="¿Cuál es tu principal desafío comercial?">
                  <select defaultValue="">
                    <option value="" disabled>Selecciona una opción</option>
                    {d.situations.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                  </select>
                </Field>
                <Field id="mensaje" label="¿Algo más que quieras contar? (opcional)">
                  <textarea placeholder="Cuéntame brevemente tu situación actual..." style={{ minHeight: 100 }} />
                </Field>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginTop: 4 }}>
                  <p style={{ fontSize: "0.8125rem", color: "#85858E", lineHeight: 1.5 }}>{d.formNote}</p>
                  <Btn variant="accent" size="lg" type="submit">{d.submit}</Btn>
                </div>
              </form>
            ) : (
              <div style={{ padding: "16px 20px", border: "1px solid #1B44E3", borderRadius: 4, background: "rgba(27,68,227,.06)", fontSize: "0.9rem", color: "#1B44E3" }}>{d.success}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
window.CTA = CTA;
