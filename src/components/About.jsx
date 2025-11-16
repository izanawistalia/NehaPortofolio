// src/components/About.jsx
import React from "react";
import data from "../data/data";
import "../styles/theme-premium.css";

function About() {
  return (
    <section id="about" className="section" style={{ background: "transparent" }}>
      <div className="app-container">
        <h2 className="section-heading">About Me</h2>
        <span className="section-subline" />
        <div style={{ maxWidth: 920, margin: "18px auto 0", textAlign: "center" }}>
          {data.about.paragraphs.map((p, i) => (
            <p key={i} style={{ color: "var(--muted)", fontSize: 18, lineHeight: 1.75, marginBottom: 16 }}>
              {p}
            </p>
          ))}

          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 18 }}>
            <img src={data.about.signature} alt={`${data.name} signature`} style={{ width: 170, transform: "rotate(-3deg)", opacity: 0.95 }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
