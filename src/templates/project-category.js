import React from "react"
import Projects from "../components/Project/Projects"
import ProjectCategoriesMenu from "../components/Project/categoryMenu"
import Title from "../components/Title/Title"
import SEO from "../components/SEO"

const ProjectCategory = ({
  data: {
    projects: { nodes: projects },
  },
}) => {
  return (
    <>
      <SEO />
      <main className="project-category-page">
        <Title title="Projects" />
        <ProjectCategoriesMenu />
        <Projects showPagination projects={projects} />
      </main>
    </>
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
