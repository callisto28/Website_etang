import React from "react"
import { useState } from "react"
import "./Nav.css"

function Nav() {
  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }
  // {`navbar ${showLinks ? "show-nav" : "hide-nav"}`}
  return (
    <section className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <nav className="navbar bg-black text-red-200 flex justify-around justify-center space-x-4 md:py-8">
        <div className="navbar__logo"><img src="./img/1200px-Blason_département_fr_Dordogne.svg.png" width="50" height="50" alt="" className="Logo" />
        </div>
        <div>
          <ul className="navbar__links flex space-x-4 md:py-2 text-center  ">
            <li className="navbar__item slideInDown-1 transition duration-700 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ">
              <a href="/" className="navbar__link">
                Accueil
            </a>
            </li>
            <li className="navbar__item slideInDown-2 transition duration-700 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">
              <a href="/service" className="navbar__link">
                Services
            </a>
            </li>
            <li className="navbar__item slideInDown-3 transition duration-700 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">
              <a href="/apropos" className="navbar__link">
                A propos
            </a>
            </li>
            <li className="navbar__item slideInDown-4 transition duration-700 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ">
              <a href="/contact" className="navbar__link">
                Contact
            </a>
            </li>
          </ul>
        </div>
        <button className="navbar__burger " onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </nav>
    </section>
  )
}

export default Nav;