import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import Provider from './context/Provider';
import Cart from './components/Cart';
import Footer from './components/Footer';

export default function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
      <Footer />
    </Provider>
  );
}
