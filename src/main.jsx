import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/__reset.styles.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);