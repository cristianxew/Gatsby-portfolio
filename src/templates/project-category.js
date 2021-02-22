import React from "react"
import Projects from "../components/Project/Projects"
import ProjectCategoriesMenu from "../components/Project/categoryMenu"
import Title from "../components/Title/Title"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const ProjectCategory = ({
  data: {
    projects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <SEO />
      <main className="project-category-page">
        <Title title="Portfolio" />
        <ProjectCategoriesMenu />
        <Projects projects={projects} />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ProjectCategories($slug: String!) {
    projects: allStrapiProjects(
      filter: { project_category: { slug: { eq: $slug } } }
    ) {
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

export default ProjectCategory
