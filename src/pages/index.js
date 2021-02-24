import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero/Hero"
import Services from "../components/Service/Services"
import TechSkills from "../components/TechSkills/TechSkills"
import Projects from "../components/Project/Projects"
import LatestArticles from "../components/Blog/LatestArticles"
import SEO from "../components/SEO"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <Services />
      <Projects projects={projects} title="Featured projects" showLink />
      <LatestArticles blogs={blogs} title="Latest Articles" />
      <TechSkills />
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }, limit: 4) {
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
    allStrapiBlogs(sort: { order: DESC, fields: date }, limit: 3) {
      nodes {
        slug
        desc
        date(formatString: "DD/MM/YYYY")
        id
        title
        tag
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
