import { useParams } from "react-router-dom"
import useApi from "../hooks/useApi"
import defaultImage from "/src/assets/defaultImage.jpg"

export default function RecipeDetail() {
  const { id } = useParams()
  const { recipeData, loading, error } = useApi(id)

  return (
    <>
      {recipeData && Object.keys(recipeData).length > 0 && (
        <div className="m-5 shadow-sm" key={recipeData.id}>
          <img className="rounded-t-md" src={defaultImage} />
          <div className="bg-white px-5 md:px-6 lg:px-10 rounded-b-md">
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
          </div>
        </div>
      )}
    </>
  )
}
