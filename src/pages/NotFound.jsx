import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col m-auto mx-5 text-center">
        <h1 className="mb-5">Sorry, the page you were looking for was not found.</h1>
        <Link to="/" className="button md:w-[150px] m-auto">
          Return to Home
        </Link>
      </div>
      <Footer />
    </div>
  )
}
