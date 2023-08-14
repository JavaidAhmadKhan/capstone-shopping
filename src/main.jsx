import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';

import "./index.scss";
import App from "./App";
import Footer from "./components/Footer/Footer";
import Navigation from "./pages/navigation/navigation";
import { store } from './store/store';
import { stripePromise } from "./utils/stripe/stripe.utils";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode >
);
