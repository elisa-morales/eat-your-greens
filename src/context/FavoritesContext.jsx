import { createContext, useEffect, useState } from "react"

export const FavoritesContext = createContext()

export default function FavoritesContextProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  const addToFavorites = (id, name, image) => {
    setFavorites([...favorites, { id, name, image }])
  }

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id))
  }

  useEffect(() => {
    const data = localStorage.getItem("Favorites")
    if (data) {
      setFavorites(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("Favorites", JSON.stringify(favorites))
  }, [favorites])

  return <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>{children}</FavoritesContext.Provider>
}
