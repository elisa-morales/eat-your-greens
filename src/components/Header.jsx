import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <header className="px-4 py-3.5 text-2xl z-1 shadow-sm">
        <div className="mb-6 text-primary">
          <Link to={"/"}>
            <i className="absolute top-3 left-4 bx bx-home-alt hover:text-hoverColor cursor-pointer"></i>
          </Link>

          <Link to={"/favorites"}>
            <i className="absolute top-3 right-4 bx bx-bookmark-heart  hover:text-hoverColor cursor-pointer"></i>
          </Link>
        </div>
      </header>
    </>
  )
}
