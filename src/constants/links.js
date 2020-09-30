import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
]

const invalidPaths = ["/", "/about/", "/projects/", "/contact/"]

const isActive = ({ location }) => {
  if (!invalidPaths.includes(location.pathname)) {
    return { className: "active" }
  }

  return null
}

const BlogLink = ({ children, ...props }) => (
  <Link getProps={isActive} {...props}>
    {children}
  </Link>
)

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link activeClassName="active" to={link.url}>
        {link.text}
      </Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
      <li>
        <BlogLink to="/blog/">Blog</BlogLink>
      </li>
      <li>
        <Link activeClassName="active" to="/contact/">
          contact
        </Link>
      </li>
    </ul>
  )
}
