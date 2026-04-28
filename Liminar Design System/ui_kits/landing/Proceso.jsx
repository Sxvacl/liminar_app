function Proceso() {
  const d = window.LIMINAR_DATA.proceso;
  const [hover, setHover] = React.useState(-1);
  return (
    <section id="proceso" aria-labelledby="proceso-h" data-screen-label="02 Proceso" className="on-dark" style={{ padding: "112px 0", background: "#0C0C10" }}>
      <div className="w">
        <SectionTag dark>{d.tag}</SectionTag>
        <h2 id="proceso-h" style={{ fontFamily: "Fraunces, serif", fontOpticalSizing: "auto", fontSize: "clamp(1.875rem, 3.5vw, 2.875rem)", fontWeight: 400, lineHeight: 1.12, letterSpacing: "-0.02em", color: "#F8F8F7", marginBottom: 72 }}>
          {d.h2Pre}<em style={{ fontStyle: "italic", fontWeight: 300, color: "#BDC8F5" }}>{d.h2Em}</em>
        </h2>
        <div className="steps">
          {d.steps.map((s, i) => (
            <div key={i} className="step"
              onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)}
              style={{ background: hover === i ? "rgba(248,248,247,.03)" : "transparent" }}>
              <Mono color="#1B44E3" style={{ display: "block", marginBottom: 24 }}>{s.num}</Mono>
              <div style={{ fontFamily: "Fraunces, serif", fontOpticalSizing: "auto", fontSize: "1.25rem", fontWeight: 400, color: "#F8F8F7", lineHeight: 1.3, marginBottom: 14 }}>{s.title}</div>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(248,248,247,.42)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Proceso = Proceso;
