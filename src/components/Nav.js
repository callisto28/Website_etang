import React from "react"
import { useState } from "react"
import "./Nav.css"

function Nav() {
  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="navbar__logo">Logo</div>
      <ul className="navbar__links">
        <li className="navbar__item slideInDown-1 ">
          <a href="/" className="navbar__link">
            Accueil
          </a>
        </li>
        <li className="navbar__item slideInDown-3">
          <a href="/" className="navbar__link">
            Service
          </a>
        </li>
        <li className="navbar__item slideInDown-4">
          <a href="/" className="navbar__link">
            A propos
          </a>
        </li>
        <li className="navbar__item slideInDown-5">
          <a href="/" className="navbar__link">
            Contact
          </a>
        </li>
      </ul>
      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  )
}

export default Nav
