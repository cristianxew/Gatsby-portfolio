import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/cristian.bernal.399/",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/cristian-bernal-52b75415b/",
  },
  {
    id: 3,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/cristian_sa15/?hl=en",
  },
  {
    id: 4,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/cristianxew",
  },
]

const links = data.map(link => {
  return (
    <li key={link.id}>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={link.url}
        className="social-link"
      >
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return <ul className={`${styleClass ? styleClass : ""}`}>{links}</ul>
}
