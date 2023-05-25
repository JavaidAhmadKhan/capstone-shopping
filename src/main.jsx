import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './index.scss'
import App from './App';
import Footer from './components/Footer/Footer';
import Navigation from './pages/navigation/navigation';

import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';
import { CartProvider } from './contexts/cart.context';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <Navigation />
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
      <Footer />
    </BrowserRouter>
  </React.StrictMode >
)