import { useNavigate } from "react-router-dom"

export default function GoBackBtn() {
  const navigate = useNavigate()

  return (
    <button className="button mb-2 md:my-2"
      onClick={() => navigate(-1)}>
      Go back
    </button>
  )
}
