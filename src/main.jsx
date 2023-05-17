import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './index.scss'
import App from './App';
import Footer from './components/Footer/Footer';
import Navigation from './pages/navigation/navigation';

import { UserProvider } from './contexts/user.context';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
      <Navigation />
        <App />
      </UserProvider>
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
)