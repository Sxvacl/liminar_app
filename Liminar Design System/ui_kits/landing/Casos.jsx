function Casos() {
  const d = window.LIMINAR_DATA.casos;
  const [hover, setHover] = React.useState(-1);
  return (
    <section id="casos" aria-labelledby="casos-h" data-screen-label="03 Casos" style={{ padding: "112px 0", borderBottom: "1px solid rgba(15,15,20,0.08)" }}>
      <div className="w">
        <SectionTag>{d.tag}</SectionTag>
        <h2 id="casos-h" style={{ fontFamily: "Fraunces, serif", fontOpticalSizing: "auto", fontSize: "clamp(1.875rem, 3.5vw, 2.875rem)", fontWeight: 400, lineHeight: 1.12, letterSpacing: "-0.02em", marginBottom: 64 }}>
          {d.h2Pre}<em style={{ fontStyle: "italic", fontWeight: 300, color: "#1B44E3" }}>{d.h2Em}</em>
        </h2>
        <div className="cases-grid">
          {d.items.map((c, i) => (
            <article key={i} className="case-card"
              onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)}
              style={{ background: hover === i ? "#EFEFEC" : "transparent" }}>
              <Mono style={{ display: "block", marginBottom: 20 }}>{c.tag}</Mono>
              <h3 style={{ fontFamily: "Fraunces, serif", fontOpticalSizing: "auto", fontSize: "1.25rem", fontWeight: 400, fontStyle: "italic", lineHeight: 1.38, marginBottom: 18, flex: 1 }}>{c.title}</h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.68, color: "#424248" }}>{c.desc}</p>
              <div style={{ marginTop: 32, padding: "20px 0", borderTop: "1px solid rgba(15,15,20,0.08)" }}>
                <Mono style={{ display: "block", marginBottom: 6 }}>Resultado</Mono>
                <p style={{ fontSize: "0.9375rem", fontWeight: 500, lineHeight: 1.4 }}>{c.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Casos = Casos;
