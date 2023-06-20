import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"

export default function FavoriteElement() {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext)

  console.log(favorites)

  return (
    <>
      <h1>ciao</h1>
    </>
  )
}

/*   const prova = favorites.map((item) => (
    <div key={item.id}>
      <p>{item.name}</p>
      <img src={item.image} height="200px" />
      <p onClick={() => removeFromFavorites(item.id)}>click</p>
    </div> */
