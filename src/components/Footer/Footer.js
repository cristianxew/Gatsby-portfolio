import React from "react"
import "./footer.scss"
import SocialLinks from "../../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <SocialLinks styleClass="social-links" />
      <p>
        © Copyright {new Date().getFullYear()} |
        <span className="base-color"> CristianBernal </span>
        All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
