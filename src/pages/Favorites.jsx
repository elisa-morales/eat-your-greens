import Header from "../components/Header"
import Footer from "../components/Footer"

import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"

export default function Favorites() {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext)

  const prova = favorites.map((item) => (
    <div key={item.id}>
      <p>{item.name}</p>
      <img src={item.image} height="200px" />
      <p onClick={() => removeFromFavorites(item.id)}>click</p>
    </div>
  ))
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {prova}
      <Footer />
    </div>
  )
}
