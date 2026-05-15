import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/actvities/activity1/Home";
import Timer from "./pages/actvities/activity2/Timer";
import Products from "./pages/actvities/activity3/Product";
import Anime from "./pages/actvities/activity4/Anime";
import LandingPage from "./pages/MCO/LandingPage/LandingPage";

import Perito from "./pages/portfolio/Perito/Perito";
import Delda from "./pages/portfolio/Delda/Delda";
import Laudiana from "./pages/portfolio/Laudiana/Laudiana";
import Rubante from "./pages/portfolio/Rubante/Rubante";


const App = () => {

  return (
  
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/products" element={<Products />} />
      <Route path="/anime" element={<Anime />} />

      <Route path="/perito" element={<Perito />} />
      <Route path="/delda" element={<Delda />} />
      <Route path="/laudiana" element={<Laudiana />} />
      <Route path="/rubante" element={<Rubante />} />


    </Routes>
  
  </BrowserRouter>
  )
}

export default App;