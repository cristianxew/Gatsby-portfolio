import React from "react"
import Image from "gatsby-image"
import { FaGithub, FaShareSquare } from "react-icons/fa"
import "./project.scss"

const Project = ({
  project_desc,
  project_name,
  // features,
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
        <h3>Stack:</h3>
        <div className="project-skills">{skills}</div>
        {/* <h3>Features:</h3>
        <div className="project-features">
          <ul>
            {features.map(item => (
              <li key={item.id}>{item.feature_name}</li>
            ))}
          </ul>
        </div> */}

        <div className="project-links">
          <a rel="noopener noreferrer" target="_blank" href={github}>
            <FaGithub className="project-icon" />
          </a>
          <a rel="noopener noreferrer" target="_blank" href={website}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
