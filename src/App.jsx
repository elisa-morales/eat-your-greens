import { BrowserRouter, Routes, Route } from "react-router-dom"
import Blob from "./assets/svg/Blob"
import Waves from "./assets/svg/Waves"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Recipe from "./pages/Recipe"
import Favorites from "./pages/Favorites"
import FavoritesContextProvider from "./context/FavoritesContext"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <FavoritesContextProvider>
        <Blob />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Waves />
      </FavoritesContextProvider>
    </BrowserRouter>
  )
}

export default App
