import React from "react"
import { Link } from "gatsby"
import { FaShare } from "react-icons/fa"

import Title from "../Title/Title"
import Bottom from "../Bottom/Bottom"
import Project from "../Project/Project"

const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      {title && (
        <div className="projects__title">
          <div class="custom-shape-divider-top-1613594118">
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
          <Title styles="title-content__inverted" title={title} />
        </div>
      )}
      <div className="container">
        <div className="row">
          {projects.map(project => {
            return (
              <div className="section-center projects-center col-lg-6">
                <Project key={project.id} {...project} />
              </div>
            )
          })}
        </div>
        {showLink && (
          <Link to="/projects/">
            <div className="btn-center">
              <Bottom>
                View all projects
                <FaShare className="btn-icon" />
              </Bottom>
            </div>
          </Link>
        )}
      </div>
    </section>
  )
}

export default Projects
