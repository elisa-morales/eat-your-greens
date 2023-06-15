import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-35px)] max-w-[540px] mx-auto my-auto px-5 text-center">
        <h1 className="text-primary text-[40px] font-bold mb-5">Eat Your Greens!</h1>
        <p className="py-4 text-justify max-sm:text-sm">
          Welcome to <span className="bold">Eat Your Greens!</span>
          <br />
          <br />
          Here you will find a wide selection of <span className="bold">vegetarian recipes</span> inspired by culinary traditions from around the world. Join us in the discovery of a world of <span className="bold">healthy and sustainable</span> dishes.
          <br />
          <br />
          Enjoy your meal!
        </p>

        <SearchBar />
      </div>

      <Footer />
    </>
  )
}
