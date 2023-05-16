import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Theme } from "./providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Theme />
    <App />
  </React.StrictMode>
);
