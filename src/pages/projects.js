import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <SEO
        title="Projects"
        description="Cristian Bernal Latest Projects: Sk-shop, N4tours, Covid-19-tracker, Venues Finder, Easy-find, Voluntarios-Taize"
      />
      <main className="project-page">
        <Projects projects={projects} title="All Projects" />
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
        features {
          feature_name
          id
        }
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
