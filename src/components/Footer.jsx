export default function Footer() {
  return (
    <>
      <footer className="flex mt-auto gap-3 py-3.5 px-4">
        <p className="text-xs pt-1"> &#169; Elisa Morales</p>
        <p>―</p>

        <div className="flex gap-6 text-primary text-lg">
          <a href="https://www.linkedin.com/in/elisa-morales-dev/" target="_blank" title="LinkedIn">
            <i className="hover:text-hoverColor bx bxl-linkedin"></i>
          </a>

          <a href="https://github.com/elisa-morales" target="_blank" title="GitHub">
            <i className="hover:text-hoverColor bx bxl-github"></i>
          </a>

          <a href="https://talent.start2impact.it/profile/elisa-morales" target="_blank" title="start2impact University">
            <i className="hover:text-hoverColor bx bx-rocket"></i>
          </a>
        </div>
      </footer>
    </>
  )
}
