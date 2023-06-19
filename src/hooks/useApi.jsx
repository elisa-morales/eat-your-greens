import { useEffect, useState } from "react"
import axios from "axios"

export default function useApi(id) {
  const baseUrl = import.meta.env.VITE_API_URL
  const key = import.meta.env.VITE_API_KEY

  const [recipeData, setRecipeData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchSingleRecipe = async () => {
    try {
      const res = await axios.get(`${baseUrl}/${id}/information?apiKey=${key}`)
      if (res) {
        setRecipeData(res.data)
      }
    } catch (error) {
      console.log(`Something went wrong: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchSingleRecipe()
  }, [id])

  return { recipeData, loading }
}
