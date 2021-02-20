import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import Title from "../components/Title/Title"
//import SvgAbout from "../components/About/SvgAbout"
import Bottom from "../components/Bottom/Bottom"
import SEO from "../components/SEO"
import "./about.scss"
import CodersrankSummary from "@codersrank/summary"
import CodersRankActivity from "@codersrank/activity"
//window.customElements.define("codersrank-summary", CodersrankSummary)

if (window !== undefined) {
  window.customElements.define("codersrank-activity", CodersRankActivity)
}

const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  const { title, info, image } = nodes[0]

  useEffect(() => {
    //window.customElements.define("codersrank-activity", CodersRankActivity)
  }, [])

  return (
    <Layout>
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
                      target="_blank"
                      href="https://drive.google.com/file/d/1TA0iVtWcAkw8drcM5PvvIiOn2SA0EzQz/view?usp=sharing"
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
                <h2>Codersrank</h2>
                <codersrank-summary
                  show-avatar="false"
                  username="cristianxew"
                  branding="false"
                  show-header="false"
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
    </Layout>
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
