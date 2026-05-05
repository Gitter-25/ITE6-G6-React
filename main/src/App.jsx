import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/actvities/activity1/Home";
import Timer from "./pages/actvities/activity2/Timer";
import Products from "./pages/actvities/activity3/Product";
import Anime from "./pages/actvities/activity4/anime";
import LandingPage from "./pages/MCO/LandingPage/LandingPage";

const App = () => {

  return (
  
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/products" element={<Products />} />
      <Route path="/anime" element={<Anime />} />
    </Routes>
  
  </BrowserRouter>
  )
}

export default App;