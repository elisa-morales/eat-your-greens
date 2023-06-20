import Header from "../components/Header"
import RecipeElement from "../components/RecipeElement"
import Footer from "../components/Footer"

export default function Recipe() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <RecipeElement />
      <Footer />
    </div>
  )
}
