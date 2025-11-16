import { useEffect, useRef } from "react";

// Smooth Perlin-like noise generator for bubble drift
function noiseGenerator() {
  let t = Math.random() * 1000;
  return () => {
    t += 0.004;
    return (
      (Math.sin(t) +
        Math.sin(t * 1.3 + 1.2) +
        Math.sin(t * 0.7 + 2.1)) / 3
    );
  };
}

export default function useBouncingSkills(
  ballRefs,
  containerRef,
  headingRef,
  options = {}
) {
  const positions = useRef([]);
  const rotations = useRef([]);

  useEffect(() => {
    const balls = ballRefs.current;
    const container = containerRef.current;
    const heading = headingRef.current;

    if (!container || !balls.length) return;

    // Create noise generators for each bubble
    const noiseX = balls.map(() => noiseGenerator());
    const noiseY = balls.map(() => noiseGenerator());

    const containerRect = container.getBoundingClientRect();

    // Auto-size wrapper, inner bubble stays perfect circle
    balls.forEach((ball) => {
      const content = ball.querySelector(".skill-ball span");
      const textWidth = content.offsetWidth;

      const padding = 40;
      const MIN_SIZE = 70;

      let diameter = textWidth + padding;
      if (diameter < MIN_SIZE) diameter = MIN_SIZE;

      ball.style.width = diameter + "px";
      ball.style.height = diameter + "px";

      const inner = ball.querySelector(".skill-ball");
      inner.style.width = "100%";
      inner.style.height = "100%";
    });

    // Initialize positions + rotation
    balls.forEach((ball, i) => {
      const size = ball.offsetWidth;

      positions.current[i] = {
        x: Math.random() * (containerRect.width - size),
        y: Math.random() * (containerRect.height - size - 160) + 160,
      };

      rotations.current[i] = Math.random() * 360;
    });

    function animate() {
      const headingRect = heading.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      balls.forEach((ball, i) => {
        const content = ball.querySelector(".skill-ball");

        let { x, y } = positions.current[i];
        const size = ball.offsetWidth;
        const radius = size / 2;

        // --- 🌊 REAL FLOATING BUBBLE MOTION (smooth & natural) ---
        const driftX = noiseX[i]() * 0.6;   // left-right sway
        const driftY = noiseY[i]() * 0.45;  // up-down floating wave

        x += driftX;
        y += driftY;
        // ---------------------------------------------------------

        // --- Soft container boundaries (no sticking) ---
        const margin = 20;

        if (x <= margin) x = margin;
        if (x + size >= containerRect.width - margin)
          x = containerRect.width - size - margin;

        if (y <= margin) y = margin;
        if (y + size >= containerRect.height - margin)
          y = containerRect.height - size - margin;
        // --------------------------------------------------

        // --- Heading box avoidance (float around heading) ---
        const localHeading = {
          left: headingRect.left - containerRect.left,
          right: headingRect.right - containerRect.left,
          top: headingRect.top - containerRect.top,
          bottom: headingRect.bottom - containerRect.top,
        };

        if (
          x + size > localHeading.left &&
          x < localHeading.right &&
          y + size > localHeading.top &&
          y < localHeading.bottom
        ) {
          y = localHeading.bottom + 25; // gently push downward
        }
        // -----------------------------------------------------

        // --- Soft bubble-to-bubble collision ---
        balls.forEach((otherBall, j) => {
          if (j === i) return;

          const ox = positions.current[j].x;
          const oy = positions.current[j].y;
          const or = otherBall.offsetWidth / 2;

          const dx = x + radius - (ox + or);
          const dy = y + radius - (oy + or);
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < radius + or) {
            const overlap = radius + or - dist;

            x += (dx / dist) * overlap * 0.4;
            y += (dy / dist) * overlap * 0.4;

            positions.current[j].x -= (dx / dist) * overlap * 0.4;
            positions.current[j].y -= (dy / dist) * overlap * 0.4;
          }
        });
        // -------------------------------------------------------

        // --- Gentle rotation ---
        rotations.current[i] += 0.05;
        content.style.transform = `rotate(${rotations.current[i]}deg)`;
        // -------------------------------------------------------

        // Update position & transform
        positions.current[i] = { x, y };
        ball.style.transform = `translate(${x}px, ${y}px)`;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);
}
