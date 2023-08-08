import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './globals.scss';

const Home = lazy(() => import('./components/home/Home'));
const Products = lazy(() => import('./components/products/Products'));
const ItemDetail = lazy(() => import('./components/itemDetail/ItemDetail'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const Footer = lazy(() => import('./components/footer/Footer'));
const Header = lazy(() => import('./components/header/Header'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
