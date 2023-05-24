import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Authentication from "./pages/authentication/authentication";
import Shop from "./pages/shop/shop";


const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="auth" index element={<Authentication />} />
        <Route path="shop" index element={<Shop />} />
      </Routes>
    </>
  )
}

export default App