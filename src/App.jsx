import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
//import axios from "axios"

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
