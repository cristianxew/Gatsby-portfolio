import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import "./categoryMenu.scss"

const CategoryMenu = () => (
  <StaticQuery
    query={graphql`
      query {
        allStrapiCategories {
          nodes {
            name
            slug
          }
        }
      }
    `}
    render={data => (
      <ul className="blog-sidebar">
        {data.allStrapiCategories.nodes.map((category, i) => (
          <li key={i}>
            <Link to={`/category/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    )}
  />
)

export default CategoryMenu
