import React from "react"
import { useState } from "react"
// import "./Nav.css"

function Nav() {
  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }
  // {`navbar ${showLinks ? "show-nav" : "hide-nav"}`}
  return (
    <nav className="bg-blanc-200 flex content-center justify-center space-x-4 md:py-8">
      <div className="flex items-center">Logo</div>
      <ul className="flex space-x-4 md:py-2 text-center">
        <li className="navbar__item slideInDown-1 ">
          <a href="/" className="navbar__link">
            Accueil
          </a>
        </li>
        <li className="navbar__item slideInDown-2 ">
          <a href="/apropos" className="navbar__link">
            A propos
          </a>
        </li>
        <li className="navbar__item slideInDown-3">
          <a href="/service" className="navbar__link">
            service
          </a>
        </li>
        <li className="navbar__item slideInDown-4">
          <a href="/contact" className="navbar__link">
            contact
          </a>
        </li>
       </ul>
      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  )
}

export default Nav;