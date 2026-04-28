/* === Hero D3 — "Antes / Después" diferenciado por rubro =========
   Versión D evolucionada: cada rubro tiene su propia presentación
   visual nativa, no solo distinto contenido.

   - Abogados: tabla tipo Mercado Público (badge MP, código licitación,
     monto UF, estado con chip de color, ficha jurídica con número
     de causa estilizada).
   - Inmobiliaria: cards con thumbnail placeholder, comuna, UF, badges
     Particular/Inmobiliaria, ficha de propiedad con galería minimal.
================================================================= */

function HeroD3() {
  const [tab, setTab] = React.useState("abogados");
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setTab(t => t === "abogados" ? "inmobiliaria" : "abogados");
    }, 8000);
    return () => clearInterval(id);
  }, [paused]);

  const onTabClick = (id) => { setTab(id); setPaused(true); };

  const meta = {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: 9, fontWeight: 500, letterSpacing: "0.06em",
    textTransform: "uppercase", color: "#85858E",
  };

  // ── Tab control ───────────────────────────────────────────────
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
      }}>{label}</button>
    );
  };

  return (
    <div style={{ background: "#F8F8F7", border: "1px solid rgba(15,15,20,0.12)" }}>
      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid rgba(15,15,20,0.10)", position: "relative" }}>
        <Tab id="abogados" label="Para Abogados" />
        <Tab id="inmobiliaria" label="Para Inmobiliaria" />
        {!paused && (
          <div key={tab} style={{
            position: "absolute", bottom: -1, left: 0, height: 2,
            background: "#1B44E3", opacity: 0.55,
            animation: "limProgress 8s linear forwards",
            transformOrigin: "left", width: "50%",
            ...(tab === "inmobiliaria" ? { left: "50%" } : {}),
          }}/>
        )}
      </div>

      {/* Body — animated key forces fade between tabs */}
      <div key={tab} style={{
        position: "relative", display: "grid",
        gridTemplateColumns: "1fr 30px 1fr", alignItems: "stretch", gap: 0,
        animation: "limFade .45s ease",
      }}>
        {/* INPUT */}
        {tab === "abogados" ? <InputMercadoPublico meta={meta} /> : <InputPortalInmobiliario meta={meta} />}

        {/* arrow */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#F8F8F7" }}>
          <svg viewBox="0 0 30 30" width="30" height="30" aria-hidden="true">
            <line x1="2" y1="15" x2="24" y2="15" stroke="#1B44E3" strokeWidth="1.5"/>
            <polyline points="18,9 26,15 18,21" stroke="#1B44E3" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* OUTPUT */}
        {tab === "abogados" ? <OutputJuridico meta={meta} /> : <OutputPropiedad meta={meta} />}
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

/* ─────────────────────────────────────────────────────────────────
   INPUT — Mercado Público (tabla institucional)
   ────────────────────────────────────────────────────────────── */
function InputMercadoPublico({ meta }) {
  const rows = [
    { id: "1264-12-LR25", prov: "Const. Vega Ltda.",  monto: "UF 4.820",  adj: true  },
    { id: "1264-87-LR25", prov: "Inmob. Pacífico",    monto: "UF 12.300", adj: true  },
    { id: "1265-87-LR25", prov: "Constructora Aravena", monto: "UF 8.450", adj: false },
    { id: "1266-04-LR25", prov: "Servicios M&P",      monto: "UF 2.100",  adj: true  },
    { id: "1266-31-LR25", prov: "Const. del Sur",     monto: "UF 5.640",  adj: true  },
    { id: "1267-15-LR25", prov: "Aravena Ingeniería", monto: "UF 3.870",  adj: false },
  ];

  return (
    <div style={{ background: "#fff", borderRight: "1px solid rgba(15,15,20,0.10)", overflow: "hidden" }}>
      {/* Mercado Público header — institutional look */}
      <div style={{
        background: "#0B3D7A", color: "#fff", padding: "8px 12px",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 22, height: 22, borderRadius: 3,
            background: "#fff", color: "#0B3D7A",
            fontSize: 11, fontWeight: 700, fontFamily: "Inter",
            display: "grid", placeItems: "center", letterSpacing: "-0.02em",
          }}>MP</div>
          <div>
            <div style={{ fontSize: 10.5, opacity: 0.75, fontFamily: "Inter", letterSpacing: 0.2 }}>Plataforma</div>
            <div style={{ fontSize: 12.5, fontWeight: 500, fontFamily: "Inter" }}>Mercado Público</div>
          </div>
        </div>
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 8.5, opacity: 0.7 }}>chilecompra.cl</span>
      </div>

      {/* sub bar with filters */}
      <div style={{
        padding: "7px 12px", borderBottom: "1px solid rgba(15,15,20,0.10)",
        background: "#EFEFEC", display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div>
          <div style={{ ...meta, marginBottom: 1 }}>Resultados de adjudicación</div>
          <div style={{ fontFamily: "Inter", fontSize: 11, color: "#0F0F14" }}>1.247 licitaciones · últimos 7 días</div>
        </div>
        <span style={{ ...meta, color: "#1B44E3" }}>● 2 No adj.</span>
      </div>

      {/* table header */}
      <div style={{
        display: "grid", gridTemplateColumns: "auto 1fr auto auto", gap: 8,
        padding: "6px 10px", background: "#F8F8F7",
        borderBottom: "1px solid rgba(15,15,20,0.10)",
        fontFamily: "JetBrains Mono, monospace", fontSize: 8,
        textTransform: "uppercase", letterSpacing: "0.06em", color: "#85858E",
      }}>
        <span>ID</span><span>Proveedor</span><span style={{ textAlign: "right" }}>Monto</span><span>Estado</span>
      </div>

      {/* rows */}
      {rows.map((r, i) => {
        const highlight = !r.adj;
        return (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "auto 1fr auto auto",
            gap: 8, padding: "8px 10px", alignItems: "center",
            borderBottom: i < rows.length - 1 ? "1px solid rgba(15,15,20,0.05)" : "none",
            fontFamily: "Inter", fontSize: 11,
            opacity: highlight ? 1 : 0.55,
            background: highlight ? "rgba(27,68,227,0.05)" : "transparent",
          }}>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9.5, color: "#85858E" }}>{r.id}</span>
            <span style={{ color: "#0F0F14" }}>{r.prov}</span>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "#424248", textAlign: "right" }}>{r.monto}</span>
            <span style={{
              fontFamily: "Inter", fontSize: 9.5, fontWeight: 500,
              padding: "2px 7px", borderRadius: 3,
              background: r.adj ? "rgba(15,15,20,0.06)" : "#1B44E3",
              color: r.adj ? "#85858E" : "#fff",
              textTransform: "uppercase", letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}>{r.adj ? "Adj." : "No adj."}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   INPUT — Portal Inmobiliario (cards con thumb)
   ────────────────────────────────────────────────────────────── */
function InputPortalInmobiliario({ meta }) {
  const props = [
    { tipo: "Depto 2D", comuna: "Las Condes",     uf: "5.800", part: false },
    { tipo: "Depto 3D", comuna: "Ñuñoa",          uf: "5.200", part: true  },
    { tipo: "Casa 4D",  comuna: "La Reina",       uf: "9.400", part: false },
    { tipo: "Depto 3D", comuna: "Vitacura",       uf: "7.100", part: true  },
    { tipo: "Casa 5D",  comuna: "Lo Barnechea",   uf: "14.200", part: false },
  ];

  // SVG thumbnail simulating photo (placeholder with subtle pattern)
  const Thumb = ({ kind, highlight }) => {
    const colors = highlight
      ? { bg: "#BDC8F5", roof: "#1B44E3", wall: "#0F30C2", win: "#fff" }
      : { bg: "#E5E5E0", roof: "#85858E", wall: "#5D5D63", win: "#F8F8F7" };
    return (
      <svg viewBox="0 0 60 44" width="60" height="44" style={{
        borderRadius: 3, flexShrink: 0,
        background: colors.bg, display: "block",
      }}>
        {kind === "casa" ? (
          <g>
            <polygon points="10,22 30,10 50,22" fill={colors.roof}/>
            <rect x="14" y="22" width="32" height="18" fill={colors.wall}/>
            <rect x="18" y="26" width="6" height="6" fill={colors.win}/>
            <rect x="28" y="26" width="6" height="6" fill={colors.win}/>
            <rect x="38" y="26" width="6" height="6" fill={colors.win}/>
            <rect x="26" y="34" width="8" height="6" fill={colors.roof}/>
          </g>
        ) : (
          <g>
            <rect x="14" y="8" width="32" height="32" fill={colors.wall}/>
            <rect x="17" y="11" width="5" height="5" fill={colors.win}/>
            <rect x="25" y="11" width="5" height="5" fill={colors.win}/>
            <rect x="33" y="11" width="5" height="5" fill={colors.win}/>
            <rect x="38" y="11" width="5" height="5" fill={colors.win}/>
            <rect x="17" y="19" width="5" height="5" fill={colors.win}/>
            <rect x="25" y="19" width="5" height="5" fill={colors.win}/>
            <rect x="33" y="19" width="5" height="5" fill={colors.win}/>
            <rect x="38" y="19" width="5" height="5" fill={colors.win}/>
            <rect x="17" y="27" width="5" height="5" fill={colors.win}/>
            <rect x="25" y="27" width="5" height="5" fill={colors.win}/>
            <rect x="33" y="27" width="5" height="5" fill={colors.win}/>
            <rect x="38" y="27" width="5" height="5" fill={colors.win}/>
            <rect x="27" y="35" width="6" height="5" fill={colors.roof}/>
          </g>
        )}
      </svg>
    );
  };

  return (
    <div style={{ background: "#fff", borderRight: "1px solid rgba(15,15,20,0.10)", overflow: "hidden" }}>
      {/* Portal Inmobiliario header */}
      <div style={{
        background: "#fff", color: "#0F0F14", padding: "9px 12px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: "1px solid rgba(15,15,20,0.10)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 22, height: 22, borderRadius: "50%",
            background: "#FF7733", color: "#fff",
            fontSize: 12, fontWeight: 700, fontFamily: "Inter",
            display: "grid", placeItems: "center",
          }}>P</div>
          <div>
            <div style={{ fontSize: 10.5, color: "#85858E", fontFamily: "Inter" }}>Portal</div>
            <div style={{ fontSize: 12.5, fontWeight: 500, fontFamily: "Inter" }}>Portal Inmobiliario</div>
          </div>
        </div>
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 8.5, color: "#85858E" }}>portalinmobiliario.com</span>
      </div>

      {/* filter bar */}
      <div style={{
        padding: "7px 12px", borderBottom: "1px solid rgba(15,15,20,0.10)",
        background: "#EFEFEC", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8,
      }}>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
          {["Venta", "Depto + Casa", "RM"].map(f => (
            <span key={f} style={{
              fontFamily: "Inter", fontSize: 9.5, fontWeight: 500,
              padding: "3px 8px", background: "#fff",
              border: "1px solid rgba(15,15,20,0.14)", borderRadius: 999,
              color: "#424248",
            }}>{f}</span>
          ))}
        </div>
        <span style={{ ...meta, color: "#1B44E3", whiteSpace: "nowrap" }}>● 2 Particular</span>
      </div>

      {/* listings */}
      <div>
        {props.map((p, i) => {
          const isCasa = p.tipo.startsWith("Casa");
          return (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 10,
              padding: "9px 10px", alignItems: "center",
              borderBottom: i < props.length - 1 ? "1px solid rgba(15,15,20,0.06)" : "none",
              opacity: p.part ? 1 : 0.5,
              background: p.part ? "rgba(27,68,227,0.05)" : "transparent",
            }}>
              <Thumb kind={isCasa ? "casa" : "depto"} highlight={p.part} />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: "Fraunces, serif", fontSize: 12.5, fontWeight: 500, lineHeight: 1.2 }}>
                  {p.tipo} · {p.comuna}
                </div>
                <div style={{ fontFamily: "Inter", fontSize: 10, color: "#85858E", marginTop: 2 }}>UF {p.uf}</div>
              </div>
              <span style={{
                fontFamily: "Inter", fontSize: 9, fontWeight: 500,
                padding: "2px 7px", borderRadius: 3,
                background: p.part ? "#1B44E3" : "rgba(15,15,20,0.06)",
                color: p.part ? "#fff" : "#85858E",
                textTransform: "uppercase", letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}>{p.part ? "Particular" : "Inmob."}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   OUTPUT — Ficha jurídica
   ────────────────────────────────────────────────────────────── */
function OutputJuridico({ meta }) {
  return (
    <div style={{ background: "#F8F8F7", padding: "14px 16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <span style={meta}>Ficha jurídica</span>
        <span style={{ ...meta, color: "#1B44E3" }}>● Lead listo</span>
      </div>

      {/* number + brand */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
        <span style={{
          fontFamily: "JetBrains Mono, monospace", fontSize: 10,
          padding: "2px 6px", background: "#0B3D7A", color: "#fff",
          letterSpacing: "0.05em",
        }}>1265-87-LR25</span>
      </div>
      <div style={{ fontFamily: "Fraunces, serif", fontSize: 17, lineHeight: 1.2 }}>Constructora del rubro vialidad</div>
      <div style={{ fontFamily: "Inter", fontSize: 11.5, color: "#424248", marginTop: 2, marginBottom: 12 }}>
        Postuló a 3 licitaciones · 0 adjudicadas (90 d)
      </div>

      {/* signal block — legal */}
      <div style={{
        borderTop: "1px solid rgba(15,15,20,0.08)",
        borderBottom: "1px solid rgba(15,15,20,0.08)",
        padding: "10px 0", marginBottom: 12,
      }}>
        <div style={{ ...meta, marginBottom: 4 }}>Acción posible</div>
        <div style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 300, fontSize: 13, color: "#0F0F14", lineHeight: 1.4 }}>
          Impugnar bases o asesorar próxima postulación.
        </div>
        <div style={{
          marginTop: 10, padding: "8px 10px",
          background: "rgba(27,68,227,0.06)", borderLeft: "2px solid #1B44E3",
          fontFamily: "Inter", fontSize: 10.5, color: "#0F0F14",
          display: "flex", justifyContent: "space-between",
        }}>
          <span style={{ color: "#85858E" }}>⏱ Plazo para impugnar</span>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10.5, color: "#1B44E3", fontWeight: 600 }}>5 días hábiles</span>
        </div>
      </div>

      {/* channels */}
      <div style={{ marginBottom: 12 }}>
        <div style={{ ...meta, marginBottom: 6 }}>Canales disponibles</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {["WhatsApp", "Email", "Web"].map(ch => (
            <span key={ch} style={{
              fontFamily: "JetBrains Mono, monospace", fontSize: 9,
              padding: "3px 8px", background: "#fff",
              border: "1px solid rgba(15,15,20,0.14)", borderRadius: 999,
              color: "#424248", letterSpacing: "0.04em", textTransform: "uppercase",
            }}>● {ch}</span>
          ))}
        </div>
      </div>

      <CTAWhatsApp />
      <div style={{ ...meta, marginTop: 8, textAlign: "center" }}>← Detectada en Mercado Público</div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   OUTPUT — Ficha de propiedad
   ────────────────────────────────────────────────────────────── */
function OutputPropiedad({ meta }) {
  // Mini gallery — 3 placeholder thumbs simulating photos
  const Thumb = ({ kind, big }) => {
    const w = big ? "100%" : 30;
    const h = big ? 110 : 30;
    return (
      <svg viewBox="0 0 100 70" width={w} height={h} preserveAspectRatio="xMidYMid slice" style={{
        borderRadius: 3, display: "block", background: "#BDC8F5",
      }}>
        {kind === "ext" && (
          <g>
            <rect x="0" y="0" width="100" height="44" fill="#9BB0F0"/>
            <rect x="0" y="44" width="100" height="26" fill="#1B44E3"/>
            <rect x="20" y="14" width="60" height="30" fill="#0F30C2"/>
            <rect x="26" y="20" width="10" height="10" fill="#F8F8F7"/>
            <rect x="40" y="20" width="10" height="10" fill="#F8F8F7"/>
            <rect x="54" y="20" width="10" height="10" fill="#F8F8F7"/>
            <rect x="68" y="20" width="6" height="10" fill="#F8F8F7"/>
            <rect x="44" y="36" width="12" height="8" fill="#0F0F14"/>
          </g>
        )}
        {kind === "liv" && (
          <g>
            <rect x="0" y="0" width="100" height="70" fill="#E8EBF7"/>
            <rect x="10" y="40" width="55" height="20" fill="#1B44E3" opacity="0.7"/>
            <rect x="70" y="42" width="22" height="18" fill="#0F30C2" opacity="0.6"/>
            <rect x="0" y="60" width="100" height="10" fill="#85858E" opacity="0.4"/>
            <rect x="20" y="10" width="20" height="14" fill="#fff" opacity="0.6"/>
            <rect x="50" y="10" width="20" height="14" fill="#fff" opacity="0.6"/>
          </g>
        )}
        {kind === "kit" && (
          <g>
            <rect x="0" y="0" width="100" height="70" fill="#F0E8E8"/>
            <rect x="0" y="40" width="100" height="30" fill="#85858E" opacity="0.5"/>
            <rect x="10" y="20" width="80" height="20" fill="#0F30C2" opacity="0.4"/>
            <rect x="20" y="46" width="60" height="3" fill="#fff" opacity="0.5"/>
          </g>
        )}
      </svg>
    );
  };

  return (
    <div style={{ background: "#F8F8F7", padding: "14px 16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <span style={meta}>Ficha de propiedad</span>
        <span style={{ ...meta, color: "#1B44E3" }}>● Lead listo</span>
      </div>

      {/* gallery — main photo + 2 thumbs */}
      <div style={{ marginBottom: 10 }}>
        <Thumb kind="ext" big />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, marginTop: 4 }}>
          <Thumb kind="liv" />
          <Thumb kind="kit" />
        </div>
      </div>

      <div style={{ fontFamily: "Fraunces, serif", fontSize: 17, lineHeight: 1.2 }}>Depto 3D · Ñuñoa</div>
      <div style={{ fontFamily: "Inter", fontSize: 11.5, color: "#424248", marginTop: 2, marginBottom: 10 }}>
        72 m² útiles · 2 baños · estacionamiento
      </div>

      {/* signal block — real estate */}
      <div style={{
        borderTop: "1px solid rgba(15,15,20,0.08)",
        borderBottom: "1px solid rgba(15,15,20,0.08)",
        padding: "10px 0", marginBottom: 12,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
          <span style={meta}>Precio actual</span>
          <span style={{ fontFamily: "Fraunces, serif", fontSize: 16, fontWeight: 500 }}>UF 5.200</span>
        </div>
        <div style={{
          marginTop: 8, padding: "8px 10px",
          background: "rgba(27,68,227,0.06)", borderLeft: "2px solid #1B44E3",
          fontFamily: "Inter", fontSize: 10.5, color: "#0F0F14",
          display: "flex", justifyContent: "space-between",
        }}>
          <span style={{ color: "#85858E" }}>↓ Bajó precio</span>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10.5, color: "#1B44E3", fontWeight: 600 }}>−8% en 14 días</span>
        </div>
      </div>

      {/* channels */}
      <div style={{ marginBottom: 12 }}>
        <div style={{ ...meta, marginBottom: 6 }}>Canales disponibles</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {["WhatsApp", "Formulario portal"].map(ch => (
            <span key={ch} style={{
              fontFamily: "JetBrains Mono, monospace", fontSize: 9,
              padding: "3px 8px", background: "#fff",
              border: "1px solid rgba(15,15,20,0.14)", borderRadius: 999,
              color: "#424248", letterSpacing: "0.04em", textTransform: "uppercase",
            }}>● {ch}</span>
          ))}
        </div>
      </div>

      <CTAWhatsApp />
      <div style={{ ...meta, marginTop: 8, textAlign: "center" }}>← Detectada en Portal Inmobiliario</div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Shared CTA
   ────────────────────────────────────────────────────────────── */
function CTAWhatsApp() {
  return (
    <a style={{
      display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
      background: "#1B44E3", color: "#fff", textDecoration: "none",
      fontFamily: "Inter", fontWeight: 500, fontSize: 12,
      padding: "9px 12px", borderRadius: 999,
    }} href="#">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      </svg>
      Contactar por WhatsApp
    </a>
  );
}

window.HeroD3 = HeroD3;
