import Header from "../components/Header"
import RecipeDetail from "../components/RecipeDetail"
import Footer from "../components/Footer"

export default function Recipe() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <RecipeDetail />
      <Footer />
    </div>
  )
}
