import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
//import axios from "axios"

function Home() {
  return <h1>ciao</h1>
}

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
