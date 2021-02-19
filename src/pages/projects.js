import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title/Title"
import Layout from "../components/Layout"
import Projects from "../components/Project/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <SEO title="Projects" description="Cristian Bernal's Portfolio" />
      <main className="project-page">
        <Projects title="All Projects" projects={projects} />
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
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
