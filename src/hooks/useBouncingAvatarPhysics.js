// // src/hooks/useBouncingAvatarPhysics.js
// import { useEffect, useRef } from "react";

// export default function useBouncingAvatarPhysics() {
//   const rafRef = useRef(null);

//   useEffect(() => {
//     const avatar = document.querySelector(".bouncing-avatar");
//     const hero = document.querySelector(".hero-container");
//     const card = document.querySelector(".hero-card");

//     if (!avatar || !hero || !card) return;

//     const getHeroRect = () => hero.getBoundingClientRect();
//     const getCardRect = () => card.getBoundingClientRect();

//     // Avatar starting position
//     let x = 50;
//     let y = 50;
//     let dx = 2;
//     let dy = 1.8;

//     function animate() {
//       const heroRect = getHeroRect();
//       const cardRect = getCardRect();
//       const avatarSize = avatar.offsetWidth;

//       // Proposed new position
//       let nextX = x + dx;
//       let nextY = y + dy;

//       // Hero bounds
//       const minX = 0;
//       const minY = 0;
//       const maxX = heroRect.width - avatarSize;
//       const maxY = heroRect.height - avatarSize;

//       // Bounce from hero edges
//       if (nextX <= minX) { nextX = minX; dx *= -1; }
//       if (nextX >= maxX) { nextX = maxX; dx *= -1; }
//       if (nextY <= minY) { nextY = minY; dy *= -1; }
//       if (nextY >= maxY) { nextY = maxY; dy *= -1; }

//       // CARD COLLISION BOX (with padding around card)
//       const padding = 80;

//       const cardBox = {
//         left: cardRect.left - heroRect.left - padding,
//         top: cardRect.top - heroRect.top - padding,
//         right: cardRect.left - heroRect.left + cardRect.width + padding,
//         bottom: cardRect.top - heroRect.top + cardRect.height + padding,
//       };

//       const avatarBox = {
//         left: nextX,
//         top: nextY,
//         right: nextX + avatarSize,
//         bottom: nextY + avatarSize,
//       };

//       // Detect overlap
//       const overlap =
//         avatarBox.left < cardBox.right &&
//         avatarBox.right > cardBox.left &&
//         avatarBox.top < cardBox.bottom &&
//         avatarBox.bottom > cardBox.top;

//       // Bounce off card
//       if (overlap) {
//         const dxSign = dx > 0 ? 1 : -1;
//         const dySign = dy > 0 ? 1 : -1;

//         // Horizontal bounce
//         if (
//           avatarBox.right > cardBox.left &&
//           avatarBox.left < cardBox.left
//         ) {
//           dx = -Math.abs(dx) * dxSign * -1;
//           nextX = cardBox.left - avatarSize - 2;
//         } 
        
//         if (
//           avatarBox.left < cardBox.right &&
//           avatarBox.right > cardBox.right
//         ) {
//           dx = Math.abs(dx) * dxSign * -1;
//           nextX = cardBox.right + 2;
//         }

//         // Vertical bounce
//         if (
//           avatarBox.bottom > cardBox.top &&
//           avatarBox.top < cardBox.top
//         ) {
//           dy = -Math.abs(dy) * dySign * -1;
//           nextY = cardBox.top - avatarSize - 2;
//         }

//         if (
//           avatarBox.top < cardBox.bottom &&
//           avatarBox.bottom > cardBox.bottom
//         ) {
//           dy = Math.abs(dy) * dySign * -1;
//           nextY = cardBox.bottom + 2;
//         }
//       }

//       // Apply new position
//       x = nextX;
//       y = nextY;
//       avatar.style.transform = `translate(${x}px, ${y}px)`;

//       rafRef.current = requestAnimationFrame(animate);
//     }

//     rafRef.current = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(rafRef.current);
//   }, []);
// }
