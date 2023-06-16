import SearchBar from "../components/SearchBar"

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto my-auto px-5 text-center z-0">
        <h1 className="text-primary max-sm:text-[36px] text-[50px] font-bold mb-5">Eat Your Greens!</h1>
        <div className="bg-white p-6 rounded-md shadow-sm">
          <p className="text-justify max-sm:text-sm">
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
      </div>
    </>
  )
}
