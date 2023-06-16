import { useEffect, useState } from "react"
import axios from "axios"

export default function Search() {
  const [recipes, setRecipes] = useState([])
  const url = import.meta.env.VITE_API_URL
  const key = import.meta.env.VITE_API_KEY

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    axios
      .get(`${url}/complexSearch?apiKey=${key}&query=egg`)
      .then((res) => {
        setRecipes(res.data.results)
      })
      .catch((error) => console.log(`Error: ${error}`))
  }

  const recipeElements = recipes.map((recipe) => (
    <div key={recipe.id} className="flex flex-col justify-center p-3 pb-6 bg-white rounded-md shadow-sm">
      <img src={recipe.image} />
      <div className="">
        <h3 className="">{recipe.title}</h3>
      </div>
    </div>
  ))

  return (
    <div className="m-10">
      <h1>Blabl</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">{recipeElements}</div>
    </div>
  )
}
