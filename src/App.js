import { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { checkUserSession } from "./store/user/user.action";
import Spinner from "./components/Spinner/Spinner";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  const Navigation = lazy(() => import("./pages/navigation/navigation"));
  const Home = lazy(() => import("./pages/home/home"));
  const Authentication = lazy(() =>
    import("./pages/authentication/authentication")
  );
  const Shop = lazy(() => import("./pages/shop/shop"));
  const Checkout = lazy(() => import("./pages/checkout"));

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </Suspense>
  );
};

export default App;
