import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import CristianBernalResume from "../../static/CristianBernalResume.pdf"
import Image from "gatsby-image"
import Title from "../components/Title/Title"
import Bottom from "../components/Bottom/Bottom"
import SEO from "../components/SEO"
import "./about.scss"

const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  const { title, info, image } = nodes[0]

  return (
    <>
      <SEO
        title="about"
        description="I specialize in building modern web applications with high-quality features. I'm very passionate about programming and I am constantly practicing and improving my skills. Apart from coding my favorite things to do are playing guitar, traveling, and kayaking."
      />
      <main className="about-page">
        <section className="about-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="photo-about">
                  <Image fluid={image.childImageSharp.fluid} />
                </div>
              </div>
              <div className="col-lg-7">
                <Title title={title} />{" "}
                <div className="col-lg-12 about-info">{info}</div>
                <div className="personal-info-bottoms">
                  <div className="mt-3 mb-lg-0 mr-4">
                    <a
                      download="CristianBernalResume.pdf"
                      href={CristianBernalResume}
                      rel="noopener noreferrer"
                    >
                      <Bottom>Download Cv</Bottom>
                    </a>
                  </div>
                  <div className="mt-3 mb-lg-0 to-contact">
                    <Link to="/contact/">
                      <Bottom>Hire Me</Bottom>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-5 codersrank-wrapper">
                <h2>Codersrank Profile</h2>
                <codersrank-summary
                  username="cristianxew"
                  branding="false"
                ></codersrank-summary>
              </div>
              <div className="col-md-12 mt-5 codersrank-wrapper">
                <codersrank-activity
                  username="cristianxew"
                  labels
                  tooltip
                  weeks="46"
                ></codersrank-activity>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        title
        info
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

export default About
