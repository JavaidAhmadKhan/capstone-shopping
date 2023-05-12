import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Navigation from "./pages/navigation/navigation";
import Authentication from "./pages/authentication/authentication";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" index element={<Authentication />} />
        </Route>
      </Routes>
    </>
  )
}

export default App