import { useParams } from "react-router-dom"
import useApi from "../hooks/useApi"
import defaultImage from "/src/assets/defaultImage.jpg"

export default function RecipeDetail() {
  const { id } = useParams()
  const { recipeData, loading, error } = useApi(id)

  console.log(loading)

  return <h1>ciao</h1>
}
