import { useEffect, useRef } from "react";
export default function useBouncingBall({ outerRef, ballRadius, getInnerRect }) {
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
