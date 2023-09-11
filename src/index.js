import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { PersistGate } from "redux-persist/integration/react";

import "./index.scss";
import App from "./App";
import Footer from "./components/Footer/Footer";
import Navigation from "./pages/navigation/navigation";
import { store, persistor } from "./store/store";
import { stripePromise } from "./utils/stripe/stripe.utils";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Navigation />
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
