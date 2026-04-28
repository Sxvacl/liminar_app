function Footer() {
  const d = window.LIMINAR_DATA.footer;
  return (
    <footer style={{ padding: "28px 0" }}>
      <div className="w">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: "Fraunces, serif", fontOpticalSizing: "auto", fontSize: "0.9375rem" }}>{d.brand}</span>
          <Mono>{d.copy}</Mono>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Dolores />
      <Proceso />
      <Casos />
      <CTA />
      <Footer />
    </React.Fragment>
  );
}
window.App = App;
window.Footer = Footer;
