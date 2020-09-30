import React from "react"
import Title from "./Title"
import Bottom from "./Bottom"
import Project from "./Project"
import { FaShare } from "react-icons/fa"
import { Link } from "gatsby"
const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <div className="container">
        <Title title={title} />
        <div className="section-center projects-center">
          {projects.map(project => {
            return <Project key={project.id} {...project} />
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
