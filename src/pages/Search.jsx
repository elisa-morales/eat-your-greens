import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function Search() {
  const [recipes, setRecipes] = useState([])
  const url = import.meta.env.VITE_API_URL
  const key = import.meta.env.VITE_API_KEY
  const { query } = useParams()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    axios
      .get(`${url}/complexSearch?apiKey=${key}&query=${query}`)
      .then((res) => {
        setRecipes(res.data.results)
      })
      .catch((error) => console.log(`Error: ${error}`))
  }

  const recipeElements = recipes.map((recipe) => (
    <div key={recipe.id} className="relative flex flex-col justify-center rounded-md shadow-sm">
      <img className="brightness-50 rounded-md" src={recipe.image} />
      <div className="">
        <h2 className="absolute bottom-5 left-5 pr-5 font-semibold text-white shadow-sm">{recipe.title}</h2>
      </div>
    </div>
  ))

  return (
    <div className="m-5">
      <h1 className="text-primary font-bold">Search results for "egg"</h1>
      <h2 className="mb-6">{recipes.length} results</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{recipeElements}</div>
    </div>
  )
}
