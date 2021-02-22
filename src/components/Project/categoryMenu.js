import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import "./category-menu.scss"

const ProjectCategoriesMenu = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allStrapiProjectCategories {
            nodes {
              categoryName
              slug
            }
          }
        }
      `}
      render={data => (
        <div className="container">
          <ul className="projects-categories-list">
            <Link
              className="projects-categories-list__item"
              activeClassName="active"
              to="/projects/"
            >
              <li>All</li>
            </Link>
            {data.allStrapiProjectCategories.nodes.map((category, i) => (
              <Link
                key={i}
                className="projects-categories-list__item"
                activeClassName="active"
                to={`/projects/${category.slug}`}
              >
                <li>{category.categoryName}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    />
  )
}

export default ProjectCategoriesMenu
