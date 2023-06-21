import { useContext } from "react"
import { Link } from "react-router-dom"
import { FavoritesContext } from "../context/FavoritesContext"
import useDefaultImage from "../hooks/useDefaultImage"

export default function CardFavorite(props) {
  const { removeFromFavorites } = useContext(FavoritesContext)
  const { replaceImage } = useDefaultImage()

  return (
    <div key={props.id}>
      <div className="relative flex flex-col justify-center rounded-md shadow-sm">
        <img className="brightness-50 rounded-md"
          src={props.image}
          onError={replaceImage}
        />
        <button className="absolute top-5 right-5 button"
          onClick={() => removeFromFavorites(props.id)}
          title="Remove from Favorites">
          <i className="bx bxs-trash-alt"></i>
        </button>
        <div className="text-white shadow-sm">
          <Link to={`/recipe/${props.id}`}>
            <h2 className="absolute bottom-5 left-5 pr-5 hover:text-accent text-2xl font-semibold cursor-pointer" title="Go to the recipe">
              {props.title}
            </h2>
          </Link>
        </div>
      </div>
    </div>
  )
}