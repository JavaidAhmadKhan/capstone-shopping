import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './index.scss'
import App from './App';
import Footer from './components/Footer/Footer';
import Navigation from './pages/navigation/navigation';

import { UserProvider } from './contexts/user.context';
import { CartProvider } from './contexts/cart.context';
import { CategoriesProvider } from './contexts/categories.context';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <Navigation />
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
      <Footer />
    </BrowserRouter>
  </React.StrictMode >
)