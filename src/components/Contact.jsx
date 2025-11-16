// src/components/Contact.jsx
import React from "react";
import data from "../data/data";
import "../styles/theme-premium.css";

function Contact() {
  return (
    <section
      id="contact"
      className="section"
      style={{
        background: "linear-gradient(180deg,#f6edff 0%, #f8f1ff 50%, #ffffff 100%)",
        paddingBottom: "120px",
        paddingTop: "120px",
      }}
    >
      <div className="app-container">
        <h2 className="section-heading">Contact Me</h2>
        <span className="section-subline" />

        <div style={{ marginTop: 18, textAlign: "center" }}>
          <p style={{ color: "var(--muted)" }}>
            If you'd like to get in touch, feel free to reach out anytime.
          </p>

          <div style={{ marginTop: 18 }}>
            <div style={{ fontWeight: 700 }}>Email</div>
            <a
              href={`mailto:${data.contact.email}`}
              style={{ color: "var(--primary-2)", textDecoration: "none" }}
            >
              {data.contact.email}
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            {data.contact.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                // style={{
                //   padding: "10px 14px",
                //   borderRadius: 10,
                //   border: "solid var(--glass-border)",
                //   textDecoration: "none",
                // }}
                style={{ padding: "10px 14px", borderRadius: 10, background: "linear-gradient(90deg,var(--primary),var(--primary-2))", color: "#fff", border: "none", cursor: "pointer" }}
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
