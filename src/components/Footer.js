import React from "react"
import "./footer.scss"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <SocialLinks styleClass="social-links" />
      <h5>
        © Copyright {new Date().getFullYear()} |
        <span className="base-color"> CristianBernal </span>
        All Rights Reserved
      </h5>
    </footer>
  )
}

export default Footer
