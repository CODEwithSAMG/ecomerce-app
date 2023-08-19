import { createRoot } from 'react-dom/client';
import { AppProvider } from './context/ProductContext';

import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);