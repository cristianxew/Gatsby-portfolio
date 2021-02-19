import React from "react"
import Title from "../Title/Title"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaWordpress,
} from "react-icons/fa"
import {
  SiMongodb,
  SiApollographql,
  SiFirebase,
  SiStrapi,
  // SiTypescript,
} from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io"
import { GrGatsbyjs, GrGraphQl } from "react-icons/gr"
import "./tech-skills.scss"

export const TechSkills = () => {
  var settings = {
    className: "slider-container",
    accessibility: true,
    dots: false,
    infinite: true,
    autoplaySpeed: 4000,
    speed: 3000,
    slidesToShow: 12,
    slidesToScroll: 2,
    autoplay: true,
    pauseOnHover: true,
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  }

  return (
    <section className="section-skills">
      <Title title="Technologies I work with" />
      <Slider {...settings}>
        <FaHtml5 />
        <FaCss3Alt />
        <FaSass />
        <IoLogoJavascript />
        <FaReact />
        <GrGraphQl />
        <SiApollographql />
        <GrGatsbyjs />
        <FaNodeJs />
        <SiFirebase />
        <FaWordpress />
        <SiMongodb />
        <FaGitAlt />
        <FaGithub />
        <SiStrapi />
        <FaFigma />
        {/*  <SiTypescript /> */}
      </Slider>
    </section>
  )
}

export default TechSkills
