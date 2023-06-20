import Header from "../components/Header"
import FavoriteElement from "../components/FavoriteElement"
import Footer from "../components/Footer"

export default function Favorites() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <FavoriteElement />
      <Footer />
    </div>
  )
}
