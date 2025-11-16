// src/components/Navbar.jsx
import React from "react";
import data from "../data/data";
import "../styles/theme-premium.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">{data.brand || data.name}</div>

      <nav className="nav-links">
        {data.navbar.links.map((l) => (
          <a key={l.href} className="nav-link" href={l.href}>
            {l.label}
          </a>
        ))}

        <a
          href={data.navbar.resumeHref}
          className="resume-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.navbar.resumeLabel || "Resume"}
        </a>
      </nav>
    </header>
  );
}
