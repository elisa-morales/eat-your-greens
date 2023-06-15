import { Outlet } from "react-router-dom"

export default function Footer() {
  return (
    <>
      <footer className="fixed bottom-0">
        <div className="flex px-4 py-3.5 gap-4">
          <p className="text-xs pt-1"> &#169; Elisa Morales </p>

          <div className="flex gap-2 text-primary ">
            <a href="https://www.linkedin.com/in/elisa-morales-dev/" target="_blank">
              <i className="hover:text-hoverColor bx bxl-linkedin"></i>
            </a>

            <a href="https://github.com/elisa-morales" target="_blank">
              <i className="hover:text-hoverColor bx bxl-github"></i>
            </a>

            <a href="https://talent.start2impact.it/profile/elisa-morales" target="_blank">
              <i className="hover:text-hoverColor bx bx-rocket"></i>
            </a>
          </div>
        </div>
      </footer>

      <Outlet />
    </>
  )
}
