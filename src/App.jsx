import { BrowserRouter, Routes, Route } from "react-router-dom"
import Blob from "./assets/svg/Blob"
import Waves from "./assets/svg/Waves"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Search from "./pages/Search"

//import axios from "axios"

function App() {
  return (
    <BrowserRouter>
      <Blob />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Waves />
      <Footer />
    </BrowserRouter>
  )
}

export default App
