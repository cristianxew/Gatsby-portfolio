import React, { useState } from "react"
import Logo from "../Logo/Logo"
import LogoSm from "../Logo/Logo-sm"
import PageLinks from "../../constants/links"
import SocialLinks from "../../constants/socialLinks"
import { Link } from "gatsby"
import "./navbar.scss"

const Navbar = ({ element, sticky }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  return (
    <nav ref={element} className={`nav-container ${sticky ? "nav-container__sticky" : ""}`}>
      <div className="menu-wrap">
        <div className="logo-sm-container">
          <Link to="/">
            <LogoSm />
          </Link>
        </div>
        <button onClick={toggleMenu}
          className={`hamburger ${menuOpen ? "hamburger__open" : ""}`}>
          <div></div>
        </button>
        <div className="main-menu">
          <div>
            <div className="uls-container">
              <ul>
                <li>
                  <Link to="/">
                    <Logo />
                  </Link>
                </li>
              </ul>
              <PageLinks onClick={toggleMenu} />
              <SocialLinks styleClass="social-box-menu" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
