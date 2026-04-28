function Dolores() {
  const d = window.LIMINAR_DATA.dolores;
  const [hover, setHover] = React.useState(-1);
  return (
    <section id="dolores" aria-labelledby="dolores-h" data-screen-label="01 Dolores" style={{ padding: "112px 0", borderBottom: "1px solid rgba(15,15,20,0.08)" }}>
      <div className="w">
        <SectionTag>{d.tag}</SectionTag>
        <div className="dolores-hd">
          <h2 id="dolores-h" style={{ fontFamily: "Fraunces, serif", fontOpticalSizing: "auto", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            {d.h2Pre}<em style={{ fontStyle: "italic", fontWeight: 300, color: "#1B44E3" }}>{d.h2Em}</em>
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#424248", maxWidth: 380 }}>{d.sub}</p>
        </div>
        <div className="pain-grid">
          {d.items.map((it, i) => (
            <div key={i} className="pain-card"
              onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)}
              style={{ background: hover === i ? "#EFEFEC" : "transparent", transition: "background .3s cubic-bezier(0.16,1,0.3,1)" }}>
              <Mono color="rgba(15,15,20,0.26)" style={{ display: "block", marginBottom: 28 }}>{it.num}</Mono>
              <p style={{ fontFamily: "Fraunces, serif", fontOpticalSizing: "auto", fontSize: "1.1875rem", fontWeight: 400, fontStyle: "italic", lineHeight: 1.45, marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid rgba(15,15,20,0.08)" }}>{it.quote}</p>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.65, color: "#424248" }}>
                {it.answerPre}<strong style={{ color: "#0F0F14", fontWeight: 500 }}>{it.answerStrong}</strong>{it.answerPost}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Dolores = Dolores;
