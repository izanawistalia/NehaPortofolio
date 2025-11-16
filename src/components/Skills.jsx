
import React, { useRef } from "react";
import useBouncingSkills from "../hooks/useBouncingSkills";
import data from "../data/data";

const SKILLS = data.skills;

export default function Skills() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const ballRefs = useRef([]);

  return (
    <section id="skills" style={styles.section}>
      <div ref={containerRef} style={styles.container}>

        {/* SKILLS HEADING */}
        <div ref={headingRef} style={styles.headingBox}>
          <h2 style={styles.heading}>Skills</h2>
        </div>

        {/* FLOATING SKILL BUBBLES */}
        {SKILLS.map((skill, i) => (
          <div
            key={skill}
            className="ball-wrapper"
            ref={(el) => (ballRefs.current[i] = el)}
            style={styles.wrapper}
          >
            <div className="skill-ball" style={styles.ball}>
              <span>{skill}</span>
            </div>

          </div>
        ))}

      </div>

      {useBouncingSkills(ballRefs, containerRef, headingRef, { speed: 0.35 })}

    </section>
  );
}

const styles = {
  section: {
    background: "#F6EDFF",
    height: "90vh",
    width: "100%",
    overflow: "hidden",
  },

  container: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },

  headingBox: {
    position: "absolute",
    top: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#D5B9FF",
    padding: "18px 40px",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(140, 100, 255, 0.3)",
    backdropFilter: "blur(6px)",
    border: "2px solid rgba(255,255,255,0.5)",
    zIndex: 20,
  },

  heading: {
    margin: 0,
    fontSize: "34px",
    fontWeight: "700",
    color: "#2E2E2E",
    letterSpacing: "1px",
  },

  wrapper: {
    position: "absolute",
    transformStyle: "preserve-3d",
    display: "block",
  },

ball: {
  background: "#E6D6FF",
  border: "2px solid #C8B2F3",
  borderRadius: "50%",
  color: "#2E2E2E",
  fontWeight: "600",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  whiteSpace: "nowrap",

  minWidth: "70px",
  minHeight: "70px",

  aspectRatio: "1 / 1",   // ← FORCES PERFECT CIRCLE
  padding: "12px 22px",   // ← small padding, won’t break circle
  boxSizing: "border-box",

  animation: "shadowPulse 4s ease-in-out infinite",
  transition: "0.25s ease-in-out",
  cursor: "default",
},

};

// Inject animations
const styleEl = document.createElement("style");
styleEl.innerHTML = `
@keyframes shadowPulse {
  0% { box-shadow: 0 4px 12px rgba(180, 140, 255, 0.25); }
  50% { box-shadow: 0 6px 20px rgba(180, 140, 255, 0.40); }
  100% { box-shadow: 0 4px 12px rgba(180, 140, 255, 0.25); }
}

.skill-ball:hover {
  box-shadow: 0 8px 30px rgba(150, 100, 255, 0.45);
  transform: rotate(2deg);
}

`;
document.head.appendChild(styleEl);
