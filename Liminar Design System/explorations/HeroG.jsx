/* === Hero G — WhatsApp animado: Liminar entrega lead a estudio jurídico
   La conversación se reproduce en loop. Mensajes entran uno a uno con
   indicador de "escribiendo…", timestamps y read receipts. Muestra
   exactamente lo que vive el cliente cuando recibe una oportunidad.
================================================================= */

function HeroG() {
  // --- Script of the conversation -------------------------------
  // role: 'lim' (Liminar, izquierda) o 'estudio' (cliente, derecha)
  // typing: ms de "escribiendo…" antes de aparecer
  // delay: ms de espera DESPUÉS del mensaje anterior antes de empezar a tipear
  const script = React.useMemo(() => ([
    { role: "lim", typing: 1200, delay: 600, time: "09:14",
      body: "Buen día 👋 Detectamos *3 licitaciones no adjudicadas* esta semana en el rubro construcción. Una calza con su perfil de cliente." },
    { role: "lim", typing: 900, delay: 400, time: "09:14", card: {
      tag: "Mercado Público · Lic. 1265-87-LR25",
      title: "Constructora del rubro vialidad",
      sub: "Postuló a 3 licitaciones · 0 adjudicadas (90 d)",
      channels: ["WhatsApp", "Email", "Web"],
    }},
    { role: "estudio", typing: 1500, delay: 1100, time: "09:16",
      body: "Interesante. ¿Tienen plazo para impugnar?" },
    { role: "lim", typing: 1300, delay: 600, time: "09:16",
      body: "Sí. *5 días hábiles* desde la notificación de adjudicación (publicada el martes). Quedan 3." },
    { role: "lim", typing: 1100, delay: 500, time: "09:17",
      body: "Les preparé una *plantilla de primer contacto* enfocada en revisión de bases y estrategia para la próxima postulación 👇" },
    { role: "lim", typing: 1400, delay: 400, time: "09:17", quote:
      "«Los vimos en la licitación 1265-87. Si están evaluando impugnar o ajustar su próxima propuesta, ofrecemos una llamada de 20 min sin costo.»" },
    { role: "estudio", typing: 1400, delay: 1300, time: "09:19",
      body: "Perfecto. Mándenla y agendamos. ¿Hay otras dos en la semana?" },
    { role: "lim", typing: 1200, delay: 500, time: "09:19",
      body: "Sí. Las cargo en su bandeja antes de las 10:00 ✅" },
  ]), []);

  // --- Total duration of one playthrough ------------------------
  const totalMs = React.useMemo(() => {
    let t = 0;
    for (const m of script) t += (m.delay || 0) + (m.typing || 0) + 800; // 800 = breathing room after each
    return t + 2400; // pause at end
  }, [script]);

  // --- Animation clock ------------------------------------------
  const [now, setNow] = React.useState(0);
  React.useEffect(() => {
    let raf, start = performance.now();
    const tick = (t) => {
      const elapsed = (t - start) % totalMs;
      setNow(elapsed);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [totalMs]);

  // --- Compute per-message state at `now` -----------------------
  const states = React.useMemo(() => {
    const out = [];
    let t = 0;
    for (const m of script) {
      const startTyping = t + (m.delay || 0);
      const showAt = startTyping + (m.typing || 0);
      const settle = showAt + 600;
      out.push({ m, startTyping, showAt, settle });
      t = showAt + 800;
    }
    return out;
  }, [script]);

  // Find currently-typing message + count of revealed
  let typingRole = null;
  let revealed = 0;
  for (const s of states) {
    if (now >= s.showAt) revealed++;
    else if (now >= s.startTyping) { typingRole = s.m.role; break; }
    else break;
  }

  // ----- styles --------------------------------------------------
  const wa = {
    bg: "#E5DDD5",
    bgPattern: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%23d9d2c8' fill-opacity='0.4'%3E%3Cpath d='M11 18l3-3m0 6l-3-3m9-9l3-3m0 6l-3-3m20 24l3-3m0 6l-3-3m-26 9l3-3m0 6l-3-3'/%3E%3C/g%3E%3C/svg%3E")`,
    headerBg: "#075E54",
    out: "#DCF8C6", // verde clarito (mensajes salientes — Liminar)
    in: "#FFFFFF",  // blanco (mensajes entrantes — estudio)
  };

  const Tick = ({ read }) => (
    <svg width="14" height="10" viewBox="0 0 16 11" style={{ display: "inline-block", verticalAlign: "middle" }}>
      <path d="M11.071.653a.498.498 0 0 0-.704.071L4.85 7.396 2.679 5.226a.498.498 0 0 0-.704.704l2.564 2.564a.498.498 0 0 0 .704 0L11.142 1.357a.498.498 0 0 0-.071-.704z"
        fill={read ? "#34B7F1" : "#92ABB5"}/>
      <path d="M15.071.653a.498.498 0 0 0-.704.071L8.85 7.396 7.879 6.426a.498.498 0 0 0-.704.704l1.464 1.464a.498.498 0 0 0 .704 0L15.142 1.357a.498.498 0 0 0-.071-.704z"
        fill={read ? "#34B7F1" : "#92ABB5"}/>
    </svg>
  );

  const Bubble = ({ s, idx }) => {
    const out = s.m.role === "lim";
    const fresh = now < s.settle;
    const enter = fresh ? Math.max(0, Math.min(1, (now - s.showAt) / 220)) : 1;
    return (
      <div style={{
        display: "flex", justifyContent: out ? "flex-start" : "flex-end",
        marginBottom: 6,
        opacity: enter, transform: `translateY(${(1 - enter) * 6}px) scale(${0.96 + enter * 0.04})`,
        transition: "none",
      }}>
        <div style={{
          maxWidth: "78%",
          background: out ? wa.out : wa.in,
          borderRadius: out ? "8px 8px 8px 2px" : "8px 8px 2px 8px",
          padding: "6px 9px 5px",
          boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)",
          fontSize: 13.5, lineHeight: 1.4, color: "#111B21",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
        }}>
          {s.m.body && <div dangerouslySetInnerHTML={{ __html: formatWA(s.m.body) }} />}
          {s.m.quote && (
            <div style={{
              borderLeft: "3px solid #06CF9C", padding: "5px 8px",
              background: "rgba(6,207,156,0.08)", borderRadius: 4,
              fontStyle: "italic", color: "#0E5F4A", fontSize: 12.5, marginTop: 2,
            }}>{s.m.quote}</div>
          )}
          {s.m.card && <LeadCard c={s.m.card} />}
          <div style={{
            display: "flex", justifyContent: "flex-end", alignItems: "center",
            gap: 4, fontSize: 10.5, color: "#667781", marginTop: 2, marginRight: -2,
          }}>
            <span>{s.m.time}</span>
            {out && <Tick read={true} />}
          </div>
        </div>
      </div>
    );
  };

  const LeadCard = ({ c }) => (
    <div style={{
      background: "rgba(0,0,0,0.04)", borderRadius: 6,
      padding: "8px 10px", marginTop: 4, marginBottom: 2,
      borderLeft: "3px solid #1B44E3",
    }}>
      <div style={{
        fontFamily: "JetBrains Mono, monospace", fontSize: 9.5,
        color: "#1B44E3", letterSpacing: "0.04em", textTransform: "uppercase",
        fontWeight: 500, marginBottom: 4,
      }}>{c.tag}</div>
      <div style={{ fontFamily: "Fraunces, serif", fontSize: 14, lineHeight: 1.25, color: "#111B21" }}>{c.title}</div>
      <div style={{ fontSize: 11.5, color: "#54656F", marginTop: 2 }}>{c.sub}</div>
      <div style={{ display: "flex", gap: 5, marginTop: 8, flexWrap: "wrap" }}>
        {c.channels.map(ch => (
          <span key={ch} style={{
            fontFamily: "JetBrains Mono, monospace", fontSize: 9,
            padding: "3px 7px", background: "#fff",
            border: "1px solid rgba(0,0,0,0.10)", borderRadius: 999,
            color: "#54656F", letterSpacing: "0.04em", textTransform: "uppercase",
          }}>● {ch}</span>
        ))}
      </div>
    </div>
  );

  // ----- WhatsApp window ----------------------------------------
  return (
    <div style={{
      width: "100%", maxWidth: 460, margin: "0 auto",
      background: wa.bg, backgroundImage: wa.bgPattern,
      borderRadius: 12, overflow: "hidden",
      boxShadow: "0 24px 60px -20px rgba(15,15,20,0.30), 0 8px 18px -10px rgba(15,15,20,0.18)",
      border: "1px solid rgba(15,15,20,0.10)",
      display: "flex", flexDirection: "column",
      height: 620,
    }}>
      {/* Header */}
      <div style={{
        background: wa.headerBg, color: "#fff",
        padding: "10px 14px", display: "flex", alignItems: "center", gap: 11,
        flexShrink: 0,
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          background: "#0F0F14", color: "#1B44E3",
          display: "grid", placeItems: "center",
          fontFamily: "Fraunces, serif", fontSize: 18, fontWeight: 500,
          position: "relative",
        }}>
          L
          <span style={{
            position: "absolute", right: -1, bottom: -1,
            width: 10, height: 10, borderRadius: "50%",
            background: "#06CF9C", border: "2px solid #075E54",
          }}/>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 500, fontSize: 14.5, fontFamily: "Inter" }}>Liminar · Señales</div>
          <div style={{ fontSize: 11.5, opacity: 0.75 }}>
            {typingRole === "lim" ? "escribiendo…" : "en línea"}
          </div>
        </div>
        <div style={{ display: "flex", gap: 14, opacity: 0.85 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </div>
      </div>

      {/* Date pill */}
      <div style={{ display: "flex", justifyContent: "center", padding: "10px 0 4px" }}>
        <span style={{
          background: "rgba(225,245,254,0.92)", color: "#54656F",
          fontSize: 11, padding: "4px 10px", borderRadius: 6,
          boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)",
        }}>HOY</span>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1, padding: "8px 12px 10px",
        overflow: "hidden",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
      }}>
        {states.slice(0, revealed).map((s, i) => <Bubble s={s} idx={i} key={i} />)}

        {/* Typing indicator */}
        {typingRole && (
          <div style={{
            display: "flex", justifyContent: typingRole === "lim" ? "flex-start" : "flex-end",
            marginBottom: 6,
          }}>
            <div style={{
              background: typingRole === "lim" ? wa.out : wa.in,
              borderRadius: typingRole === "lim" ? "8px 8px 8px 2px" : "8px 8px 2px 8px",
              padding: "10px 14px",
              boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)",
              display: "flex", gap: 4, alignItems: "center",
            }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  width: 6, height: 6, borderRadius: "50%", background: "#54656F",
                  animation: `limTypingDot 1.2s ease-in-out ${i * 0.18}s infinite`,
                }}/>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input bar (decorative) */}
      <div style={{
        background: "#F0F2F5", padding: "8px 10px",
        display: "flex", gap: 8, alignItems: "center", flexShrink: 0,
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#54656F"><path d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zm-.05 20.073c-5.021 0-9.071-4.05-9.071-9.071 0-5.021 4.05-9.071 9.071-9.071 5.021 0 9.071 4.05 9.071 9.071 0 5.021-4.05 9.071-9.071 9.071zm3.265-10.341c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"/></svg>
        <div style={{
          flex: 1, background: "#fff", borderRadius: 999,
          padding: "8px 14px", color: "#54656F", fontSize: 13,
        }}>Mensaje</div>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#54656F"><path d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"/></svg>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes limTypingDot {
          0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(-3px); }
        }
      `}</style>
    </div>
  );
}

// Format *bold* and emoji-friendly text safely
function formatWA(s) {
  // escape HTML
  const esc = s.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  // *bold*
  return esc.replace(/\*([^*]+)\*/g, '<strong style="font-weight:600">$1</strong>');
}

window.HeroG = HeroG;
