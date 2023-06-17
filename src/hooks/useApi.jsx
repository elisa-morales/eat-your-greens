import { useEffect, useState } from "react"
import axios from "axios"

export default function useApi(url) {
  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchData = () => {
    axios
      .get(url)
      .then((res) => {
        setResponse(res.data)
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

  return { response, error, loading }
}
