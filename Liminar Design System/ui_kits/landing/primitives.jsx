/* primitives shared across all section components */
const { useState, useEffect } = React;

const liminarPrimStyles = {
  btn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    borderRadius: 999,
    fontWeight: 500,
    textDecoration: "none",
    cursor: "pointer",
    border: "1px solid transparent",
    transition: "transform .28s cubic-bezier(0.16,1,0.3,1), background .22s, border-color .22s, color .22s",
    whiteSpace: "nowrap",
    lineHeight: 1,
    padding: "10px 22px",
    fontSize: "0.8125rem",
    fontFamily: "Inter, sans-serif",
  },
};

function Btn({ variant = "dark", size, children, href = "#", onClick, type, ...rest }) {
  const [hover, setHover] = useState(false);
  const sizePad = size === "lg" ? { padding: "14px 30px", fontSize: "0.9375rem" }
                : size === "xl" ? { padding: "18px 40px", fontSize: "1rem" } : {};

  let bg, color, border;
  if (variant === "dark")   { bg = hover ? "#1B44E3" : "#0F0F14"; color = "#F8F8F7"; border = "transparent"; }
  if (variant === "accent") { bg = hover ? "#0F30C2" : "#1B44E3"; color = "#fff";     border = "transparent"; }
  if (variant === "ghost")  { bg = "transparent";  color = "#0F0F14"; border = hover ? "#0F0F14" : "rgba(15,15,20,0.26)"; }

  const Tag = onClick || type ? "button" : "a";
  return (
    <Tag
      href={Tag === "a" ? href : undefined}
      type={Tag === "button" ? (type || "button") : undefined}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...liminarPrimStyles.btn, ...sizePad,
        background: bg, color, borderColor: border,
        transform: hover ? "translateY(-3px)" : "translateY(0)",
      }}
      {...rest}
    >{children}</Tag>
  );
}

function Mono({ children, color = "#85858E", style }) {
  return (
    <span style={{
      fontFamily: "JetBrains Mono, monospace",
      fontSize: "0.6875rem",
      fontWeight: 500,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color,
      ...style,
    }}>{children}</span>
  );
}

function SectionTag({ children, dark }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 52 }}>
      <Mono color={dark ? "rgba(248,248,247,.28)" : "#85858E"}>{children}</Mono>
      <span style={{ height: 1, width: 56, background: dark ? "rgba(248,248,247,.10)" : "rgba(15,15,20,0.08)", flexShrink: 0 }} />
    </div>
  );
}

function BrandMark({ dark }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center" }} aria-hidden="true">
      <span style={{ width: 30, height: 1.5, background: dark ? "#F8F8F7" : "#0F0F14", display: "block" }} />
      <span style={{
        width: 7, height: 7, borderRadius: "50%", background: "#1B44E3",
        display: "block", marginLeft: -1,
        animation: "limPulse 2.8s ease-in-out infinite",
      }} />
    </span>
  );
}

function SourceTag({ children }) {
  return (
    <span style={{
      padding: "5px 12px",
      border: "1px solid rgba(15,15,20,0.26)",
      borderRadius: 4,
      color: "#85858E",
      fontSize: "0.75rem",
      fontFamily: "JetBrains Mono, monospace",
      letterSpacing: "0.04em",
    }}>{children}</span>
  );
}

/* parses **bold** in lede strings */
function richText(s) {
  return s.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") ? <strong key={i} style={{ color: "#0F0F14", fontWeight: 500 }}>{part.slice(2, -2)}</strong> : <React.Fragment key={i}>{part}</React.Fragment>
  );
}

Object.assign(window, { Btn, Mono, SectionTag, BrandMark, SourceTag, richText });
