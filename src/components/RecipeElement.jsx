import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useFetchId from "../hooks/useFetchId"
import useDefaultImage from "../hooks/useDefaultImage"
import defaultImage from "/src/assets/defaultImage.jpg"
import ClipLoader from "react-spinners/ClipLoader"
import GoBackBtn from "./GoBackBtn"
import Ingredients from "./Ingredients"
import Instructions from "./Instructions"
import { FavoritesContext } from "../context/FavoritesContext"

export default function RecipeElement() {
  const { id } = useParams()
  const { recipeData, loading } = useFetchId(id)
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext)
  const [isFavorite, setIsFavorite] = useState(false)
  const { replaceImage } = useDefaultImage()

  function toggleFavorite() {
    if (isFavorite) {
      removeFromFavorites(recipeData.id)
    } else if (!isFavorite) {
      addToFavorites(recipeData.id, recipeData.title, recipeData.image)
    }
    setIsFavorite(!isFavorite)
  }

  useEffect(() => {
    favorites.find((item) => item.id === Number(id))
    ? setIsFavorite(true)
    : setIsFavorite(false)
  }, [favorites, id])

  const heartIcon = isFavorite ? "bx bxs-heart" : "bx bx-heart"

  const override = {
    display: "block",
    margin: "200px auto",
  }

  return (
    <div className="md:px-6 lg:px-10">
      <div className="mx-5 mt-5">
        <GoBackBtn />
      </div>

      {loading &&
      <ClipLoader
        color="#324a24"
        cssOverride={override}
      />
      }

      {!loading && 
        recipeData && 
        Object.keys(recipeData).length === 0 && 
        <div className="m-5 text-sm">No data received. Reload the page or come back later.
        </div>
      }

      {recipeData &&
      Object.keys(recipeData).length > 0 && (
        <div className="m-5 sm:shadow-sm lg:shadow-none grid lg:grid-cols-2 lg:gap-8" 
          key={recipeData.id}
        >
        
        <img className="rounded-t-md lg:rounded-md lg:shadow-sm w-full"
            src={recipeData.image
              ? recipeData.image
              : defaultImage
            }
            onError={replaceImage} 
          />

          <div className="bg-white p-5 md:px-6 lg:px-10 rounded-b-md lg:rounded-md lg:shadow-sm">
            <div className="text-primary flex justify-between">
              <h1 className="max-sm:text-[36px] text-[50px] font-bold">{recipeData.title}</h1>
              <i className={`${heartIcon} text-2xl cursor-pointer`}
                onClick={toggleFavorite}
                title={isFavorite
                ? "Remove from Favorites"
                : "Add to Favorites"
                }>
              </i>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-sm">
              {recipeData.vegan === true
                ? <div className="label">Vegan</div>
                : <div className="label">Vegetarian</div>
                }
              {recipeData.glutenFree === true
                ? <div className="label">Gluten free</div>
                : null
              }
              {recipeData.dairyFree === true
                ? <div className="label">Dairy free</div>
                : null
              }
            </div>

            <div className="py-2 text-sm">
              <p className="my-2 bold">
                <i className="bx bxs-time-five"></i> ready in {recipeData.readyInMinutes} minutes
              </p>
              <p className="bold">
                <i className="bx bxs-bowl-hot"></i> {recipeData.servings} servings
              </p>
            </div>

            <div className="mt-3">
              <h2 className="bold">Ingredients</h2>
              {recipeData.extendedIngredients.map((ingredient, index) => (
                <Ingredients
                  key={index} 
                  id={ingredient.id} 
                  name={ingredient.original} 
                />
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-3">
              <h2 className="bold">Instructions</h2>
              {recipeData.analyzedInstructions && 
                recipeData.analyzedInstructions.length && 
                  recipeData.analyzedInstructions[0].steps.map((step, index) => 
                    <Instructions 
                      key={index} 
                      number={step.number} 
                      description={step.step} 
                    />
                  )
              }
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
