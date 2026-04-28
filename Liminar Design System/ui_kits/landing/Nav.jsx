function Nav() {
  const d = window.LIMINAR_DATA.nav;
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 200,
      borderBottom: "1px solid rgba(15,15,20,0.08)",
      background: "rgba(248,248,247,0.85)",
      backdropFilter: "blur(20px) saturate(1.4)",
      WebkitBackdropFilter: "blur(20px) saturate(1.4)",
    }}>
      <div className="w">
        <nav aria-label="Principal" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <a href="/" aria-label="Liminar" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "#0F0F14" }}>
            <BrandMark />
            <span style={{ fontFamily: "Fraunces, serif", fontOpticalSizing: "auto", fontSize: "1.125rem", fontWeight: 500, letterSpacing: "-0.01em" }}>Liminar</span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <span className="nav-loc"><Mono>{d.location}</Mono></span>
            <Btn variant="dark" href="#cta">{d.cta}</Btn>
          </div>
        </nav>
      </div>
    </header>
  );
}
window.Nav = Nav;
