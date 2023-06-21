import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate()

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (inputValue) {
      navigate(`search/${inputValue}`)
      setInputValue("")
    }
  }

  return (
    <form className="flex max-sm:flex-col items-center mt-6 sm:gap-4" 
      onSubmit={handleSubmit}
    >
      <input className="p-2 max-sm:mb-4 max-sm:w-full sm:w-[350px] rounded-md shadow-sm focus:ring-accent focus:ring-1 focus:outline-none bg-[#e5ebdc] placeholder:text-sm" 
        type="text"
        placeholder="Enter keyword..." 
        value={inputValue} 
        onChange={handleChange} 
      />
      <button className="button max-sm:w-full sm:w-[100px] shadow-sm tracking-wider">Search</button>
    </form>
  )
}
