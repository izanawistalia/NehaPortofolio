// src/components/Projects.jsx
import React, { useState } from "react";
import data from "../data/data";
import Modal from "./Modal";
import "../styles/theme-premium.css";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section" style={{ background: "transparent" }}>
      <div className="app-container">
        <h2 className="section-heading">Projects</h2>
        <span className="section-subline" />
        <div className="row-grid" style={{ marginTop: 22 }}>
          {data.projects.map((p, i) => {
            const truncated = p.brief.length > 120 ? p.brief.slice(0, 120) + "..." : p.brief;

            return (
              <div key={i} className="card" style={{ display: "flex", flexDirection: "column", minHeight: 240 }}>
                <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>{p.title}</h3>
                <p style={{ color: "var(--muted)", marginTop: 10, marginBottom: 10 }}>{truncated}</p>
                <div style={{ color: "var(--muted)", fontSize: 13 }}>Tech: {p.tech.join(", ")}</div>

                <div style={{ marginTop: "auto" }}>
                  <button style={{ padding: "10px 14px", borderRadius: 10, background: "linear-gradient(90deg,var(--primary),var(--primary-2))", color: "#fff", border: "none", cursor: "pointer" }} onClick={() => setSelected(p)}>
                    Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <>
            <h2 style={{ marginBottom: 8 }}>{selected.title}</h2>
            <p style={{ color: "var(--muted)", marginBottom: 12 }}>Tech: {selected.tech.join(", ")}</p>

            <p style={{ marginBottom: 12 }}>{selected.brief}</p>

            <ul style={{ paddingLeft: 20 }}>
              {selected.details.map((d, i) => (
                <li key={i} style={{ marginBottom: 8 }}>{d}</li>
              ))}
            </ul>
          </>
        )}
      </Modal>
    </section>
  );
}
