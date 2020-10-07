import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import Bottom from "../components/Bottom"
import SocialLinks from "../constants/socialLinks"
import SEO from "../components/SEO"
import Comments from "../components/Comments"
import { FaReply } from "react-icons/fa"
import ReactMarkdown from "react-markdown"
import "./blog-template.scss"

const ComponentName = ({ data }) => {
  const { content, image, title, desc, date, category, slug, id } = data.blog
  return (
    <Layout>
      <SEO title={title} description={desc} />
      <section className="blog-template">
        <div className="container blog-content-container">
          <Image
            className="blog-template-top-img"
            fluid={image.childImageSharp.fluid}
          />
          <Image
            className="blog-header-photo"
            fluid={data.photo.nodes[0].image.childImageSharp.fluid}
          />
          <header className="blog-header-top">
            <div className="blog-header-top-left">
              <h5>#{category}</h5>
              <span>{date}</span>
            </div>
            <div className="blog-header-top-rigth">
              <SocialLinks styleClass="social-links-blog" />
            </div>
          </header>
          <h1 className="blog-title">{title}</h1>
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <Comments slug={slug} identifier={id} title={title} />
        </div>
        <Link to="/blog">
          <div className="btn-center">
            <Bottom>
              <FaReply className="btn-icon-left" />
              Blog
            </Bottom>
          </div>
        </Link>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
      date(formatString: "DD/MM/YYYY")
      category
      slug
      id
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    photo: allStrapiAbout {
      nodes {
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

export default ComponentName
