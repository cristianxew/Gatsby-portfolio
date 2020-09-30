import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import SvgAbout from "../components/SvgAbout"
import Bottom from "../components/Bottom"
import SEO from "../components/SEO"
import { Link } from "gatsby"
import Image from "gatsby-image"
import "./about.scss"

const About = ({
  data: {
    allStrapiAbout: { nodes },
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  const { title, info, image } = nodes[0]
  return (
    <Layout>
      <SEO
        title="about"
        description="my name is Cristian, I am a simple, dreamy, and technology loving-person. I specialize in building modern web applications with high-quality features. I'm very passionate about programming and I am constantly practicing and improving my skills. Apart from coding my favorite things to do are playing guitar, traveling, and kayaking."
      />
      <main className="about-page">
        <section className="about-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Title title={title} />{" "}
              </div>
              <div className="col-lg-10 about-info font-2-color">{info}</div>
              <div className="col-lg-12">
                <SvgAbout />
              </div>
              <div className="foto-container">
                <div className="square">
                  <Image fluid={fluid} />
                </div>
                <div className="circle"></div>
                <div className="circle-2"></div>
                <div className="circle-3"></div>
                <div className="floating"></div>
                <div className="photo-about">
                  <Image fluid={image.childImageSharp.fluid} />
                </div>
              </div>
              <div className="col-lg-7  col-md-12">
                <div className="personal-item ">
                  <h3 className="base-color my-3">Personal Info</h3>
                  <div className="row">
                    <div className="col-lg-6 personal-info">
                      <ul className="list-unstyled">
                        <li>
                          <p>
                            First Name : <span> Cristian Leonardo</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Last Name : <span> Bernal Arciniegas</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Phone : <span> +48 605 095 818</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            City : <span> Warsaw, Poland</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6  personal-info">
                      <ul className="list-unstyled">
                        <li>
                          <p>
                            Age : <span> 25</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Nationality : <span> Colombian</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Mail : <span> cristianxsa15@gmail.com</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Freelance : <span> Available</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="personal-info-bottoms">
                  <div className="button-border mt-3 mb-lg-0 mr-4">
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/1hpMeALDOcwPSK1R4Cd1rWf7kkTIA2l6r/view?usp=sharing"
                      rel="noopener noreferrer"
                    >
                      <Bottom>Download Cv</Bottom>
                    </a>
                  </div>
                  <div className="button-border mt-3 mb-lg-0 to-contact">
                    <Link to="/contact/">
                      <Bottom>Hire Me</Bottom>
                    </Link>
                  </div>
                </div>
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
    file(relativePath: { eq: "element_square.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About
