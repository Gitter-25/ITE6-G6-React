import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Count from "./pages/count/Count";


const App = () => {

  return (
  
  <BrowserRouter>
    <Routes>
      <Route path="/count" element={<Count />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  
  </BrowserRouter>
  )
}

export default App;