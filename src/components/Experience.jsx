// src/components/Experience.jsx
import React, { useState } from "react";
import data from "../data/data";
import Modal from "./Modal";

export default function Experience() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="experience"
      style={{
        background: "linear-gradient(180deg,#f6edff 0%, #f8f1ff 55%, #fbf7ff 100%)",
        paddingTop: "110px",
        paddingBottom: "140px",
      }}
    >
      <div style={styles.container}>
        <h2 style={styles.heading}>Experience</h2>
        <div className="section-subline"></div>

        <div style={styles.grid}>
          {data.experience.map((job, idx) => {
            const truncated =
              job.brief.length > 110
                ? job.brief.slice(0, 110) + "..."
                : job.brief;

            return (
              <div key={idx} style={styles.card} className="card-hover premium-card">
                <h3 style={styles.role}>{job.role}</h3>

                <div style={styles.company}>
                  {job.company} • {job.period}
                </div>

                <p style={styles.brief}>{truncated}</p>

                <button
                  // style={styles.btn}
                  style={{ padding: "10px 14px", borderRadius: 10, background: "linear-gradient(90deg,var(--primary),var(--primary-2))", color: "#fff", border: "none", cursor: "pointer" }}
                  onClick={() => setSelected(job)}
                  className="premium-btn"
                >
                  View Details
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <>
            <h2 style={{ marginBottom: "10px", fontWeight: 700 }}>
              {selected.company} — {selected.role}
            </h2>

            <p style={{ color: "#666", marginBottom: "15px" }}>
              {selected.period}
              {selected.location ? " • " + selected.location : ""}
            </p>

            <p style={{ marginBottom: "15px" }}>{selected.brief}</p>

            <ul style={styles.detailsList}>
              {selected.details.map((d, i) => (
                <li key={i} style={styles.detailItem}>
                  {d}
                </li>
              ))}
            </ul>
          </>
        )}
      </Modal>
    </section>
  );
}

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "10px",
    color: "#1f1f1f",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    gap: "30px",
    marginTop: "50px",
  },
  card: {
    background: "rgba(255,255,255,0.8)",
    padding: "28px",
    borderRadius: "18px",
    border: "1px solid rgba(147, 112, 255, 0.25)",
    boxShadow:
      "0 25px 60px rgba(147, 112, 255, 0.15), 0 6px 18px rgba(147, 112, 255, 0.1)",
    backdropFilter: "blur(14px)",
  },
  role: {
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "6px",
  },
  company: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "14px",
  },
  brief: {
    color: "#444",
    lineHeight: 1.5,
    marginBottom: "18px",
  },
  btn: {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "14px",
  },
  detailsList: {
    paddingLeft: "20px",
    marginTop: "10px",
  },
  detailItem: {
    marginBottom: "10px",
    lineHeight: 1.55,
  },
};
