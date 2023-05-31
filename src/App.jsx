import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Authentication from "./pages/authentication/authentication";
import Shop from "./pages/shop/shop";
import Checkout from "./pages/checkout";


const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App