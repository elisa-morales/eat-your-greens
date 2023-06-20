import { useNavigate, useParams } from "react-router-dom"
import useFetchRecipes from "../hooks/useFetchRecipes"
import Card from "./Card"
import ClipLoader from "react-spinners/ClipLoader"

export default function Recipes() {
  const { query } = useParams()
  const { recipes, loading } = useFetchRecipes(query)
  const navigate = useNavigate()

  const override = {
    display: "block",
    margin: "200px auto",
  }

  const recipeElements = recipes.map((recipe) => <Card key={recipe.id} id={recipe.id} image={recipe.image} title={recipe.title} />)

  return (
    <div className="m-5">
      {recipes.length === 0 && loading === true && <ClipLoader color="#324a24" cssOverride={override} />}

      {recipes.length === 0 && loading === false && (
        <div className="text-sm">
          <p>No recipes founded.</p>
        </div>
      )}

      {recipes.length > 0 && (
        <div className="md:px-6 lg:px-10">
          <div className="md:flex md:justify-between items-start">
            <button className="button mb-2 md:my-2" onClick={() => navigate(-1)}>
              Go back
            </button>
            <div>
              <h1 className="text-primary font-bold ">Search results for "{query}"</h1>
              <h2 className="md:text-right mb-5">{recipes.length} results</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">{recipeElements}</div>
        </div>
      )}
    </div>
  )
}
