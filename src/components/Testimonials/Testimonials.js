import React from "react"
import Slider from "react-slick"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Title from "../Title/Title"
import PersonPlaceHolder from "../../assets/personPlaceHolder.svg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./testimonials.scss"

const query = graphql`
  {
    lars: file(relativePath: { eq: "lars_reisner.jpg" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    christoph: file(relativePath: { eq: "christoph.png" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    france: file(relativePath: { eq: "france.png" }) {
      childImageSharp {
        fixed(width: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    germany: file(relativePath: { eq: "germany.png" }) {
      childImageSharp {
        fixed(width: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    uk: file(relativePath: { eq: "uk.png" }) {
      childImageSharp {
        fixed(width: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Testimonials = () => {
  const data = useStaticQuery(query)
  const larsPhoto = data.lars.childImageSharp.fixed
  const christophPhoto = data.christoph.childImageSharp.fixed
  const franceFlag = data.france.childImageSharp.fixed
  const germanyFlag = data.germany.childImageSharp.fixed
  const ukFlag = data.uk.childImageSharp.fixed
  const settings = {
    className: "slider-container",
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    arrows: false,
    centerMode: false,
  }
  return (
    <section className="testimonials">
      <div className="container">
        <Title title="testimonials" />
        <Slider {...settings}>
          <div className="testimonials__item">
            <div className="testimonials__item__img">
              <Image fixed={larsPhoto} />
            </div>
            <p className="testimonials__item__text">
              <span className="quote">“</span>
              Cristian comprehends complex relationships, recognises what is
              essentials and can quickly point out solutions. He worked
              independently, reliably and precisely. He showed self-initiative
              and outstanding dedication to the projects he worked on and
              fulfilled the responsibilities assigned to him to our full
              satisfaction.<span className="quote">”</span>
            </p>
            <div className="testimonials__item__footer">
              <h6>Lars Reisner</h6>
              <p>
                Department Head, Assistant Services
                <span>Reformationsjubiläum 2017</span>
              </p>
              <Image fixed={germanyFlag} />
            </div>
          </div>
          <div className="testimonials__item">
            <div className="testimonials__item__img">
              <PersonPlaceHolder />
            </div>
            <p className="testimonials__item__text">
              “Cristian is a skilled and diligent developer who got exactly the
              result we wanted. Great work!”
            </p>
            <div className="testimonials__item__footer">
              <h6>Michael</h6>
              <p>ZDRA CEO & Founder</p>
              <Image fixed={ukFlag} />
            </div>
          </div>
          <div className="testimonials__item">
            <div className="testimonials__item__img">
              <Image fixed={christophPhoto} />
            </div>
            <p className="testimonials__item__text">
              “Cristian was always very committed to all the responsibilities given to him. He has helped in the reception of young pilgrims and has worked with them in community activities such as workshops and various tasks.”
            </p>
            <div className="testimonials__item__footer">
              <h6>Brother Christoph</h6>
              <p>Taize - community</p>
              <Image fixed={franceFlag} />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials
