
// src/components/Hero.jsx
import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import data from "../data/data";

// If you keep your existing useBouncingBall hook in same file, ensure name matches.
// Here I assume the hook is included below or imported.

export default function Hero() {
  const outerRef = useRef(null);
  const [innerRect, setInnerRect] = useState(null);

  const avatarRadius = 60; // avatar = 120px diameter

  const { ballStyle } = useBouncingBall({
    outerRef,
    ballRadius: avatarRadius,
    getInnerRect: () => innerRect,
  });

  // Position hero card
  useEffect(() => {
    function update() {
      const outer = outerRef.current;
      if (!outer) return;

      const w = outer.clientWidth;
      const h = outer.clientHeight;

      const cardWidth = Math.floor(w * 0.50);
      const cardHeight = Math.floor(h * 0.40);

      const x = Math.floor((w - cardWidth) / 2);
      const y = Math.floor((h - cardHeight) / 2.2);

      setInnerRect({
        x,
        y,
        width: cardWidth,
        height: cardHeight,
      });
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const hero = data.hero;

  return (
    <section id="hero" className="w-screen flex justify-center items-start pt-8">
      <div
        ref={outerRef}
        className="relative w-full"
        style={{ height: "80vh", maxHeight: "80vh" }}
      >
        <div className="absolute inset-0" />

        {innerRect && (
          <div
            className="absolute rounded-3xl p-12 shadow-2xl backdrop-blur-xl flex flex-col justify-center items-center text-center bg-white/80"
            style={{
              left: innerRect.x,
              top: innerRect.y,
              width: innerRect.width,
              height: innerRect.height,
              pointerEvents: "none",
            }}
          >
            <div style={{ pointerEvents: "auto", maxWidth: "520px" }}>
              <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
                {hero.title}
              </h1>

              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                {hero.subtitle}
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {hero.objective}
              </p>

              <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                <a
                  href={hero.ctaLink}
                  className="px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition"
                  style={{ padding: "10px 14px", borderRadius: 10, background: "linear-gradient(90deg,var(--primary),var(--primary-2))", color: "#fff", border: "none", cursor: "pointer" }}
                >
                  {hero.ctaText}
                </a>

                <a
                  href={hero.resumeHref}
                  className="px-6 py-3 border rounded-lg shadow hover:bg-gray-50 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {hero.resumeCtaText}
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Glow behind avatar */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: avatarRadius * 4,
            height: avatarRadius * 4,
            background:
              "radial-gradient(circle, rgba(255,120,80,0.35) 0%, rgba(255,255,255,0) 70%)",
            transform: "translate(-50%, -50%)",
            left: ballStyle.left,
            top: ballStyle.top,
            zIndex: 1,
          }}
        />

        {/* Avatar */}
        <img
          src={data.hero.profileImg}
          alt="Profile"
          className="absolute rounded-full shadow-2xl border-4 border-white"
          style={{
            width: avatarRadius * 2,
            height: avatarRadius * 2,
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
            left: ballStyle.left,
            top: ballStyle.top,
            zIndex: 2,
          }}
        />
      </div>
    </section>
  );
}

/* keep your useBouncingBall hook below (same as your original working one) */
/* ... (you can paste your existing hook here unchanged) ... */





/* ============================================================
   ORIGINAL, WORKING, PERFECT COLLISION LOGIC (YOUR VERSION)
   ============================================================ */

function useBouncingBall({ outerRef, ballRadius, getInnerRect }) {
  const ballRef = useRef({ x: 80, y: 80, vx: 220, vy: 160 });
  const lastTimeRef = useRef(null);
  const rafRef = useRef(null);
  const runningRef = useRef(true);
  const [, forceUpdate] = useState(0);

  const ballStyleRef = useRef({ left: 80, top: 80 });

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  function step(t) {
    if (!lastTimeRef.current) lastTimeRef.current = t;
    const dt = Math.min(0.05, (t - lastTimeRef.current) / 1000);
    lastTimeRef.current = t;

    const outer = outerRef.current;
    if (!outer) return;
    const inner = getInnerRect?.();

    const ow = outer.clientWidth;
    const oh = outer.clientHeight;

    const ball = ballRef.current;

    let nx = ball.x + ball.vx * dt;
    let ny = ball.y + ball.vy * dt;

    // Outer walls
    if (nx - ballRadius < 0) {
      nx = ballRadius;
      ball.vx *= -1;
    } else if (nx + ballRadius > ow) {
      nx = ow - ballRadius;
      ball.vx *= -1;
    }

    if (ny - ballRadius < 0) {
      ny = ballRadius;
      ball.vy *= -1;
    } else if (ny + ballRadius > oh) {
      ny = oh - ballRadius;
      ball.vy *= -1;
    }

    // Inner rectangle collision (YOUR WORKING LOGIC)
    if (inner) {
      const rect = {
        left: inner.x,
        top: inner.y,
        right: inner.x + inner.width,
        bottom: inner.y + inner.height,
      };

      const closestX = clamp(nx, rect.left, rect.right);
      const closestY = clamp(ny, rect.top, rect.bottom);

      const dx = nx - closestX;
      const dy = ny - closestY;
      const distSq = dx * dx + dy * dy;

      if (distSq < ballRadius * ballRadius) {
        const dist = Math.sqrt(distSq) || 0.0001;

        const nxn = dx / dist;
        const nyn = dy / dist;

        const vdot = ball.vx * nxn + ball.vy * nyn;

        ball.vx = ball.vx - 2 * vdot * nxn;
        ball.vy = ball.vy - 2 * vdot * nyn;

        const penetration = ballRadius - dist;
        nx += nxn * penetration;
        ny += nyn * penetration;

        nx = clamp(nx, ballRadius, ow - ballRadius);
        ny = clamp(ny, ballRadius, oh - ballRadius);
      }
    }

    // Commit updates
    ball.x = nx;
    ball.y = ny;

    ballStyleRef.current = { left: nx, top: ny };
    forceUpdate((n) => n + 1);

    if (runningRef.current) {
      rafRef.current = requestAnimationFrame(step);
    }
  }

  useEffect(() => {
    if (!outerRef.current || !getInnerRect()) return;

    runningRef.current = true;
    rafRef.current = requestAnimationFrame(step);

    return () => {
      runningRef.current = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, [outerRef, getInnerRect()]);

  return {
    ballStyle: {
      left: `${ballStyleRef.current.left}px`,
      top: `${ballStyleRef.current.top}px`,
    },
  };
}
