import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title/Title"
import ProjectCategoriesMenu from "../components/Project/categoryMenu"
import Projects from "../components/Project/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <>
      <SEO title="Projects" description="Cristian Bernal's Portfolio" />
      <main className="project-page">
        <Title title="Projects" />
        <ProjectCategoriesMenu />
        <Projects showPagination projects={projects} />
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects(sort: { fields: featured, order: DESC }) {
      nodes {
        website
        strapiId
        skills
        project_name
        project_desc
        github
        featured
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
