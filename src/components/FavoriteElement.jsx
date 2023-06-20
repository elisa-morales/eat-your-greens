import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"
import GoBackBtn from "./GoBackBtn"
import CardFavorite from "./CardFavorite"

export default function FavoriteElement() {
  const { favorites } = useContext(FavoritesContext)

  const favoriteItems = favorites.map((favorite) => <CardFavorite key={favorite.id} id={favorite.id} image={favorite.image} title={favorite.name} />)

  return (
    <div className="m-5">
      <div className="md:px-6 lg:px-10">
        <div className="md:flex md:justify-between items-start">
          <GoBackBtn />
          <div>
            <h1 className="text-primary font-bold ">My favorite recipes</h1>
            <h2 className="md:text-right mb-5">{favorites.length} recipes</h2>
          </div>
        </div>
        {favoriteItems.length === 0 && (
          <div className="text-sm">
            <p>No favorite recipes yet.</p>
          </div>
        )}
        {favoriteItems.length > 0 && <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">{favoriteItems}</div>}
      </div>
    </div>
  )
}
