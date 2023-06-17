import Header from "../components/Header"
import Recipes from "../components/Recipes"
import Footer from "../components/Footer"

export default function Search() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Recipes />
      <Footer />
    </div>
  )
}
