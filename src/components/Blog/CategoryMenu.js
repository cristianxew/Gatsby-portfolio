import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { FaArrowAltCircleRight } from "react-icons/fa"
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
      <div className="col-md-4 side-bar-wrapper">
        <h2>Topics</h2>
        <ul className="blog-sidebar">
          {data.allStrapiCategories.nodes.map((category, i) => (
            <li key={i}>
              <Link to={`/category/${category.slug}`}>
                <div>
                  <div className="icon">
                    <FaArrowAltCircleRight />
                  </div>
                  <span>{category.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  />
)

export default CategoryMenu
