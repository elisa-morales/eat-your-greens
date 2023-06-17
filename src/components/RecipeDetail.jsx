import { useParams } from "react-router-dom"
import useApi from "../hooks/useApi"
import defaultImage from "/src/assets/defaultImage.jpg"

export default function RecipeDetail() {
  const url = import.meta.env.VITE_API_URL
  const key = import.meta.env.VITE_API_KEY
  const { id } = useParams()
  const { response } = useApi(`${url}/${id}/analyzedInstructions?apiKey=${key}`)

  return <h1>ciao</h1>
}
