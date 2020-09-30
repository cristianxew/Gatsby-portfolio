import React from "react"
import TypedText from "./Typed-text"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import "./hero.scss"
import Bottom from "./Bottom"

const Hero = () => {
  return (
    <header className="hero full-screen">
      <ul className="hero-slider">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="text-center hero-content">
        <div className="col-lg-12">
          <div className="hero-content text-center">
            <h3 className="dark-color mb-0">Hello,</h3>
            <div className="typed-text">
              <h1 className="base-color hero-title">I'M / </h1>
              <TypedText
                strings={["Cristian Bernal", "A Full-stack Web Developer"]}
              />
            </div>
            <p className="hero-desc mx-auto dark-color">
              I am a Full-stack web developer based in Warsaw. I'm very
              passionate about programming and developing beautiful and
              efficient web applications
            </p>
            <Link to="/contact/">
              <Bottom>Hire Me</Bottom>
            </Link>
            <SocialLinks styleClass="social-links social-links__hero" />
          </div>
        </div>
      </div>
      <a href="#services">
        <div className="scroll-down">
          <span></span>
        </div>
      </a>
    </header>
  )
}

export default Hero
