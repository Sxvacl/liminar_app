function ThresholdChart() {
  return (
    <svg viewBox="0 0 480 308" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }} aria-hidden="true">
      <line x1="0" y1="252" x2="480" y2="252" stroke="rgba(15,15,20,.06)" strokeWidth="1"/>
      <line x1="0" y1="188" x2="480" y2="188" stroke="rgba(15,15,20,.06)" strokeWidth="1"/>
      <line x1="0" y1="124" x2="480" y2="124" stroke="rgba(15,15,20,.06)" strokeWidth="1"/>
      <line x1="0" y1="60"  x2="480" y2="60"  stroke="rgba(15,15,20,.06)" strokeWidth="1"/>
      <line x1="0" y1="142" x2="480" y2="142" stroke="#1B44E3" strokeWidth="1" strokeDasharray="3 8" opacity=".45"/>
      <text x="292" y="134" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="500" letterSpacing=".06em" fill="#1B44E3" opacity=".65">UMBRAL DE DETECCIÓN</text>
      <text x="8" y="20" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing=".05em" fill="rgba(15,15,20,.26)">SEÑAL</text>
      <polyline className="cl-gray" points="24,250 72,234 120,224 168,210 216,197 264,178 300,158" stroke="#85858E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="300" cy="142" r="5" fill="#1B44E3" />
      <polyline className="cl-accent" points="300,142 348,112 396,82 444,50 468,34" stroke="#1B44E3" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <line x1="0" y1="262" x2="480" y2="262" stroke="rgba(15,15,20,.10)" strokeWidth="1"/>
      <text x="18"  y="278" fontFamily="JetBrains Mono, monospace" fontSize="7.5" letterSpacing=".04em" fill="rgba(15,15,20,.28)">ENE</text>
      <text x="114" y="278" fontFamily="JetBrains Mono, monospace" fontSize="7.5" letterSpacing=".04em" fill="rgba(15,15,20,.28)">MAR</text>
      <text x="210" y="278" fontFamily="JetBrains Mono, monospace" fontSize="7.5" letterSpacing=".04em" fill="rgba(15,15,20,.28)">JUN</text>
      <text x="294" y="278" fontFamily="JetBrains Mono, monospace" fontSize="7.5" letterSpacing=".04em" fill="rgba(15,15,20,.28)">SEP</text>
      <text x="396" y="278" fontFamily="JetBrains Mono, monospace" fontSize="7.5" letterSpacing=".04em" fill="rgba(15,15,20,.28)">DIC</text>
      <text x="8" y="300" fontFamily="JetBrains Mono, monospace" fontSize="7.5" letterSpacing=".04em" fill="rgba(15,15,20,.18)">INTENSIDAD DE SEÑAL POR PERÍODO</text>
    </svg>
  );
}

function Hero() {
  const d = window.LIMINAR_DATA.hero;
  return (
    <section id="hero" aria-label="Propuesta de valor" data-screen-label="Hero" style={{
      padding: "104px 0 128px", borderBottom: "1px solid rgba(15,15,20,0.08)", overflow: "hidden",
    }}>
      <div className="w">
        <div className="hero-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 36 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#1B44E3", flexShrink: 0, animation: "limPulse 2.8s ease-in-out infinite" }} />
              <Mono>{d.eyebrow}</Mono>
            </div>
            <h1 style={{
              fontFamily: "Fraunces, serif", fontOpticalSizing: "auto",
              fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
              fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.025em",
              marginBottom: 32,
            }}>
              {d.h1Pre}<br/>
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "#1B44E3" }}>{d.h1Em}</em><br/>
              {d.h1Post}
            </h1>
            <p style={{
              fontSize: "1.0625rem", lineHeight: 1.68, color: "#424248",
              maxWidth: 520, marginBottom: 44,
            }}>{richText(d.lede)}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Btn variant="accent" size="lg" href="#cta">{d.primary}</Btn>
              <Btn variant="ghost" size="lg" href="#proceso">{d.ghost}</Btn>
            </div>
            <div aria-label="Fuentes que monitoreamos" style={{
              display: "flex", flexWrap: "wrap", gap: 8,
              marginTop: 52, paddingTop: 28,
              borderTop: "1px solid rgba(15,15,20,0.08)",
            }}>
              {d.sources.map(s => <SourceTag key={s}>{s}</SourceTag>)}
            </div>
          </div>
          <div><ThresholdChart /></div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
