import React from "react";
import ReactDOM from "react-dom/client";
import { worker } from "./mocks/browser";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// running mock worker in production is discouraged in the documentation,
// but this is exactly what we need for our exercise here so we roll with it

worker.start({ onUnhandledRequest: "bypass" });
