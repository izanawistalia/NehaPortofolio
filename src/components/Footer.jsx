// src/components/Footer.jsx
import React from "react";
import data from "../data/data";
import "../styles/theme-premium.css";

function Footer() {
  return (
    <footer style={{ padding: 28, textAlign: "center", borderTop: "solid rgba(0,0,0,0.04)" }}>
      <div className="app-container">
        <p style={{ color: "var(--muted)" }}>{data.footer.text}</p>
      </div>
    </footer>
  );
}

export default Footer;
