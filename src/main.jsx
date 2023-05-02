import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './index.scss'
import App from './App';
import Footer from './components/Footer/Footer';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <Footer/>
    </React.StrictMode>
  </BrowserRouter>
)