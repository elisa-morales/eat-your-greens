import { useEffect } from "react"
import axios from "axios"

function App() {
  const url = import.meta.env.VITE_API_KEY

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    axios
      .get(url)
      .then((res) => {
        const datini = res.data.results
        console.log(datini)
      })
      .catch((error) => console.log(`Error: ${error}`))
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline">la mia app funzionaa</h1>
    </>
  )
}

export default App
