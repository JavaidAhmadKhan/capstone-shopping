import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './index.scss'
import App from './App';
import Footer from './components/Footer/Footer';
import Navigation from './pages/navigation/navigation';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Navigation />
      <App />
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
)