import { Outlet } from "react-router-dom"

export default function Header() {
  return (
    <>
      <header className="fixed top-0 px-4 py-3.5  text-2xl z-1 ">
        <div className="flex space-x-[calc(100vw-80px)] text-primary">
          <i className="bx bx-home-alt  hover:text-hoverColor cursor-pointer"></i>
          <i className=" bx bx-bookmark-heart  hover:text-hoverColor cursor-pointer"></i>
        </div>
      </header>
      <Outlet />
    </>
  )
}
