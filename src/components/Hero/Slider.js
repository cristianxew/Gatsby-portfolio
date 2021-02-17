import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const query = graphql`
  {
    keybord: file(relativePath: { eq: "keybord.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    desk: file(relativePath: { eq: "deskt.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    code: file(relativePath: { eq: "code.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const HeroSlider = () => {
  const data = useStaticQuery(query)
  const codeFluid = data.code.childImageSharp.fluid
  const deskFluid = data.desk.childImageSharp.fluid
  const keybordFluid = data.keybord.childImageSharp.fluid

  const settings = {
    className: "slider-container",
    accessibility: false,
    dots: false,
    infinite: true,
    autoplaySpeed: 4000,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    fade: true,
  }

  return (
    <Slider {...settings}>
      <BackgroundImage
        tag="div"
        className="slider-img-container"
        fluid={keybordFluid}
      />

      <BackgroundImage
        tag="div"
        className="slider-img-container"
        fluid={deskFluid}
      />

      <BackgroundImage
        tag="div"
        className="slider-img-container"
        fluid={codeFluid}
      />
    </Slider>
  )
}

export default HeroSlider
