import React from "react"
import Logo from "./Logo"
import LogoSm from "./Logo-sm"
import PageLinks from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { Link } from "gatsby"
import "./navbar.scss"

const Navbar = ({ element, sticky }) => {
  return (
    <nav ref={element} className={`nav-container ${sticky ? "sticky" : ""}`}>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler"></input>
        <div className="hamburger">
          <div></div>
        </div>
        <div className="logo-sm-container">
          <Link to="/">
            <LogoSm />
          </Link>
        </div>
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
              <PageLinks />
              <SocialLinks styleClass="social-box-menu" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
