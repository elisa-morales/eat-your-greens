import { Link, useParams } from "react-router-dom"
import useApi from "../hooks/useApi"
import defaultImage from "/src/assets/defaultImage.jpg"

export default function prova() {
  const url = import.meta.env.VITE_API_URL
  const key = import.meta.env.VITE_API_KEY
  const { query } = useParams()
  const { response, error, loading } = useApi(`${url}/complexSearch?apiKey=${key}&query=${query}&diet=vegetarian`)

  const recipeElements = response.map((recipe) => (
    <div key={recipe.id} className="relative flex flex-col justify-center rounded-md shadow-sm">
      <img className="brightness-50 rounded-md" src={recipe.image ? recipe.image : defaultImage} />
      <div className="text-white shadow-sm">
        <i className="absolute top-5 right-5 text-2xl bx bx-heart cursor-pointer"></i>
        <Link to={`/recipe/${recipe.id}`}>
          <h2 className="absolute bottom-5 left-5 pr-5 text-2xl font-semibold cursor-pointer">{recipe.title}</h2>
        </Link>
      </div>
    </div>
  ))

  return (
    <div className="m-5">
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          {error && <p>Error: {error}</p>}
          {response && (
            <div className="md:px-6 lg:px-10">
              <h1 className="text-primary font-bold">Search results for "{query}"</h1>
              <h2 className="mb-6">{response.length} results</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">{recipeElements}</div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
