import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import "./styles/theme-premium.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="site-bg">
      <App />
    </div>
  </StrictMode>
);
