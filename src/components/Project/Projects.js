import React from "react"
import { Link } from "gatsby"
import { FaShare } from "react-icons/fa"

import Title from "../Title/Title"
import Bottom from "../Bottom/Bottom"
import Project from "../Project/Project"

const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      {title && <Title title={title} />}
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
