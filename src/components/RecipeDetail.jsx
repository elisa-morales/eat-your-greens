import { useNavigate, useParams } from "react-router-dom"
import useApi from "../hooks/useApi"
import defaultImage from "/src/assets/defaultImage.jpg"
import ClipLoader from "react-spinners/ClipLoader"
import Ingredients from "./Ingredients"
import Instructions from "./Instructions"

export default function RecipeDetail() {
  const { id } = useParams()
  const { recipeData, loading } = useApi(id)

  const navigate = useNavigate()

  const override = {
    display: "block",
    margin: "250px auto",
  }

  return (
    <div className="md:px-6 lg:px-10">
      <button className="button mx-5 mt-5 md:mt-7 w-[74.42px]" onClick={() => navigate(-1)}>
        Go back
      </button>
      {loading === true && <ClipLoader color="#324a24" cssOverride={override} />}

      {loading === false && recipeData && Object.keys(recipeData).length === 0 && <div className="m-5">No data received. Reload the page or come back later.</div>}

      {recipeData && Object.keys(recipeData).length > 0 && (
        <div className="m-5  sm:shadow-sm lg:shadow-none grid lg:grid-cols-2 lg:gap-8" key={recipeData.id}>
          <img className="rounded-t-md lg:rounded-md lg:shadow-sm" src={defaultImage} />

          <div className="bg-white px-5 md:px-6 lg:px-10 rounded-b-md lg:rounded-md lg:shadow-sm">
            <div className="text-primary flex justify-between py-3">
              <h1 className="max-sm:text-[36px] text-[50px] font-bold">{recipeData.title}</h1>
              <i className="text-2xl bx bx-heart cursor-pointer"></i>
            </div>

            <div className="flex flex-wrap gap-2 text-sm">
              {recipeData.vegan === true ? <div className="label">Vegan</div> : <div className="label">Vegetarian</div>}
              {recipeData.glutenFree === true ? <div className="label">Gluten free</div> : null}
              {recipeData.dairyFree === true ? <div className="label">Dairy free</div> : null}
            </div>

            <div className="py-3">
              <p>Time: {recipeData.readyInMinutes} minutes</p>
              <p>Servings: {recipeData.servings}</p>
            </div>

            <div>
              {recipeData.extendedIngredients.map((ingredient, index) => (
                <Ingredients key={index} id={ingredient.id} name={ingredient.original} />
              ))}
            </div>

            <div className="mt-3 flex flex-col gap-3">{recipeData.analyzedInstructions && recipeData.analyzedInstructions.length && recipeData.analyzedInstructions[0].steps.map((step, index) => <Instructions key={index} description={step.step} />)}</div>
          </div>
        </div>
      )}
    </div>
  )
}
