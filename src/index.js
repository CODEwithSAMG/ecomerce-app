import App from './App';
import { createRoot } from "react-dom/client";

import { AppProvider } from './context/ProductContext';

const root = createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);