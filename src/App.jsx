import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Navigation from "./pages/navigation/navigation";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App