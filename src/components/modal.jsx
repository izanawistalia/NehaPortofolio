// src/components/Modal.jsx
import React, { useEffect } from "react";
import "../styles/theme-premium.css";

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop fade-in" onClick={onClose}>
      <div className="modal card" onClick={(e) => e.stopPropagation()}>
        <button aria-label="Close" className="modal-close" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}
