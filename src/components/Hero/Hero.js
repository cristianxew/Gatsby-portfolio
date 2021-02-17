import React from "react"
import { Link } from "gatsby"
//import TypedText from "./Typed-text"
import BackgroundWave from "../../assets/waves.svg"
import SocialLinks from "../../constants/socialLinks"
import HeroSlider from "./Slider"
import Bottom from "../Bottom/Bottom"
import "./hero.scss"

const Hero = () => {
  return (
    <header className="hero full-screen">
      <HeroSlider />
      <div className="text-center hero-content">
        <div className="col-lg-12">
          <div className="hero-content text-center">
            {/* <h1 className="dark-color mb-0">Hey, I'M Cristian</h1> */}
            <div className="typed-text">
              <h1 className="hero-title">
                <span className="base-color">Hey,</span> I'm Cristian
              </h1>
            </div>
            <p className="hero-desc mx-auto dark-color">
              A passionate front-end web developer based in Warsaw that love
              implementing designs that inspire and attract people
            </p>
            <Link to="/contact/">
              <Bottom>Hire Me</Bottom>
            </Link>
            <SocialLinks styleClass="social-links social-links__hero" />
          </div>
        </div>
      </div>
      <a className="scroll-down" href="#services">
        <span></span>
      </a>
      <div class="custom-shape-divider-bottom-1613594390">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </header>
  )
}

export default Hero
