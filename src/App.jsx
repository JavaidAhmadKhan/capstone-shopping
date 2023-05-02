import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Navigation from "./pages/navigation/navigation";
import Signin from "./pages/signin/signin";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="sign-in" index element={<Signin />} />
        </Route>
      </Routes>
    </>
  )
}

export default App