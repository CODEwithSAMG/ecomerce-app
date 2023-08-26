import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './globals.scss';

const Home = lazy(() => import('./components/home/Home'));
const Products = lazy(() => import('./components/products/Products'));
const ItemDetail = lazy(() => import('./components/itemDetail/ItemDetail'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const Footer = lazy(() => import('./components/footer/Footer'));
const Header = lazy(() => import('./components/header/Header'));
const About = lazy(() => import('./components/about/About'));
const AddItem = lazy(() => import('./components/AddItem'));
const Login = lazy(() => import('./auth/Login'));
const Signup = lazy(() => import('./auth/Signup'));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<About />} />
          <Route path='/addItem' element={<AddItem />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
