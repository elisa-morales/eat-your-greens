import { BrowserRouter, Routes, Route } from "react-router-dom"
import Blob from "./assets/svg/Blob"
import Waves from "./assets/svg/Waves"
import Home from "./pages/Home"
import Search from "./pages/Search"

//import axios from "axios"

function App() {
  return (
    <BrowserRouter>
      <Blob />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
      <Waves />
    </BrowserRouter>
  )
}

export default App
