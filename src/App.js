import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import "./globals.scss";
import { ContactUs, Footer, Header, ItemDetail, Products } from './components';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route exact path="/item/:id" element={<ItemDetail />} />
          <Route exact path='/contact' element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
