import { Link } from "react-router-dom"
import useDefaultImage from "../hooks/useDefaultImage"

export default function Card(props) {
  const { replaceImage } = useDefaultImage()

  return (
    <div key={props.id}>
      <Link to={`/recipe/${props.id}`}>
        <div className="relative flex flex-col justify-center rounded-md shadow-sm">
          <img className="brightness-50 rounded-md" src={props.image} onError={replaceImage} />
          <div className="text-white shadow-sm">
            <h2 className="absolute bottom-5 left-5 pr-5  hover:text-accent text-2xl font-semibold cursor-pointer">{props.title}</h2>
          </div>
        </div>
      </Link>
    </div>
  )
}
