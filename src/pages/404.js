import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Bottom from "../components/Bottom"
import { Link } from "gatsby"

import "./404.scss"

const query = graphql`
  {
    file(relativePath: { eq: "Astronaut-big.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Error = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <Layout>
      <main className="error-page">
        <div className="error-content">
          <Image fluid={fluid} className="error-image" />
          <h2>Sorry, This Page is Lost in Space</h2>
          <Link to="/">
            <Bottom>Back Home</Bottom>
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
