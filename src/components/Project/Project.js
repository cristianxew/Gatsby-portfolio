import React from "react"
import Image from "gatsby-image"
// import { FaGithub, FaShareSquare } from "react-icons/fa"
import "./project.scss"

const Project = ({
  project_desc,
  project_name,
  image,
  skills,
  website,
  github,
}) => {
  return (
    <article className="project">
      {image && (
        <Image fluid={image.childImageSharp.fluid} className="project-img" />
      )}
      <div className="project-info">
        <h3>{project_name}</h3>
        <p className="project-desc">{project_desc}</p>
        <h3>Skills:</h3>
        <div className="project-skills">{skills}</div>
        <div className="project-links">
          <a rel="noopener noreferrer" target="_blank" href={website}>
            Visit website
          </a>
          <a rel="noopener noreferrer" target="_blank" href={github}>
            Github
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
