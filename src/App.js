import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import "./app.scss";
import "./globals.scss";
import { Cards, ContactUs, Footer, Header, HeroBanner, ItemDetail, Products, Home } from './components';
const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route exact path="/item/:id" element={<ItemDetail />} />
        <Route exact path='/contact' element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
