import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { JobProvider } from "../context/JobsContext.jsx";
import { ThemeProvider } from "../context/ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <JobProvider>
        <App />
      </JobProvider>
    </ThemeProvider>
  </React.StrictMode>
);
