import React from 'react';
import App from './App';
import { createRoot } from "react-dom/client";
import { AppProvider } from './context/ProductContext';
import "./app.scss"

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);