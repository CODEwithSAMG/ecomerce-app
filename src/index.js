import { createRoot } from 'react-dom/client';
import { AppProvider } from './context/ProductContext';
import { CartProvider } from './context/AddToCartContext';

import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <AppProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AppProvider>
);