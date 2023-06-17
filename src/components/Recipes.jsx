import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import defaultImage from "/src/assets/defaultImage.jpg"

export default function Recipes() {
  const url = import.meta.env.VITE_API_URL
  const key = import.meta.env.VITE_API_KEY
  const { query } = useParams()

  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchData = () => {
    axios
      .get(`${url}/complexSearch?apiKey=${key}&query=${query}`)
      .then((res) => {
        setRecipes(res.data.results)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const recipeElements = recipes.map((recipe) => (
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
      <div className="md:px-6 lg:px-10">
        <h1 className="text-primary font-bold">Search results for "{query}"</h1>
        <h2 className="mb-6">{recipes.length} results</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">{recipeElements}</div>
      </div>
    </div>
  )
}
