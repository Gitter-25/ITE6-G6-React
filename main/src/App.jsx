import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Count from "./pages/count/Count";
import Timer from "./pages/actvities/activity2/Timer";
import Products from "./pages/actvities/activity3/Product";
import Anime from "./pages/actvities/activity4/anime";

const App = () => {

  return (
  
  <BrowserRouter>
    <Routes>
      <Route path="/count" element={<Count />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/" element={<Timer />} /> */}
      {/* <Route path="/" element={<Products />} /> */}
      <Route path="/" element={<Anime />} />
    </Routes>
  
  </BrowserRouter>
  )
}

export default App;