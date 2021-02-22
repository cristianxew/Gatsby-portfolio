import React from "react"
import { Link } from "gatsby"

const LinksData = [
  {
    id: 1,
    text: "home",
    url: "/",
    isPartiallyActive: false,
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
    isPartiallyActive: false,
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
    isPartiallyActive: true,
  },
  {
    id: 4,
    text: "blog",
    url: "/blog/",
    isPartiallyActive: true,
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
    isPartiallyActive: false,
  },
]

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {LinksData.map(link => (
        <li key={link.id}>
          <Link
            partiallyActive={link.isPartiallyActive}
            activeClassName="active"
            to={link.url}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  )
}
