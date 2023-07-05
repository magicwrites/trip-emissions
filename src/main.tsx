import React from "react";
import ReactDOM from "react-dom/client";
import { worker } from "./mocks/browser";
import App from "./App.tsx";
import "./index.css";

// running mock worker in production is discouraged in the documentation,
// but this is exactly what we need for our exercise here so we roll with it

worker.start();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const testWorker = async () => {
  const response = await fetch("/api/trips");

  if (response.ok) {
    const trips = await response.json();

    console.info({ trips });
  } else {
    console.warn("could not retrieve trips");
  }
};

testWorker();
