import { useEffect, useState } from "react"
import axios from "axios"

export default function useFetchRecipes(query) {
  const baseUrl = import.meta.env.VITE_API_URL
  const key = import.meta.env.VITE_API_KEY
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseUrl}/complexSearch?apiKey=${key}&query=${query}&diet=vegetarian`)
      if (res) {
        setRecipes(res.data.results)
      }
    } catch (error) {
      console.log(`Something went wrong: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchData()
  }, [])

  return { recipes, loading }
}
