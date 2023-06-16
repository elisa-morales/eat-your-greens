export default function Footer() {
  return (
    <>
      <footer className="">
        <div className="flex gap-3 fixed bottom-0">
          <p className="text-xs pt-1"> &#169; Elisa Morales</p>
          <p>―</p>

          <div className="flex gap-6 text-primary text-lg">
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
    </>
  )
}
