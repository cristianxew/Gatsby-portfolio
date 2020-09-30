import React from "react"
import Title from "./Title"
//import SkillProgress from "./SkillProgress"
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaBootstrap,
  FaFigma,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa"
import { SiMongodb } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io"
import { GrGatsbyjs } from "react-icons/gr"
import "./tech-skills.scss"

export const TechSkills = () => {
  return (
    <section className="section-skills">
      <div className="container">
        <Title title="Technical Skills" />
        <div className="row">
          <div className="col-lg-12">
            <div className="skill-box">
              <div className="skillbar-item">
                <div className="icon-tech">
                  <FaHtml5 className="icon" />
                </div>
                <div className="skillbar-title">
                  <span>html</span>
                </div>
              </div>
              <div className="skillbar-item ">
                <div className="icon-tech">
                  <FaCss3Alt className="icon" />
                </div>
                <div className="skillbar-title">
                  <span>css</span>
                </div>
              </div>
              <div className="skillbar-item ">
                <div className="icon-tech">
                  <IoLogoJavascript className="icon" />
                </div>
                <div className="skillbar-title">
                  <span>javascript</span>
                </div>
              </div>
              <div className="skillbar-item">
                <div className="icon-tech">
                  <FaSass className="icon" />
                </div>
                <div className="skillbar-title">
                  <span>sass</span>
                </div>
              </div>
              <div className="skillbar-item">
                <div className="icon-tech">
                  <FaReact className="icon" />
                </div>
                <div className="skillbar-title">
                  <span>react</span>
                </div>
              </div>
              <div className="skillbar-item ">
                <div className="icon-tech">
                  <GrGatsbyjs className="icon" />
                </div>
                <div className="skillbar-title">
                  <span>Gatsby</span>
                </div>
              </div>
              <div className="skillbar-item">
                <div className="icon-tech">
                  <FaBootstrap className="icon" />
                </div>
                <div className="skillbar-title">
                  <span>bootstrap</span>
                </div>
              </div>
              <div className="skillbar-item">
                <div className="icon-tech">
                  <FaFigma className="icon" />
                </div>
                <div className="skillbar-title">
                  <span>figma</span>
                </div>
              </div>
              <div className="skillbar-item">
                <div className="icon-tech">
                  <FaNodeJs className="icon" />
                </div>
                <div className="skillbar-title">
                  <span>node-js</span>
                </div>
              </div>
              <div className="skillbar-item">
                <div className="icon-tech">
                  <SiMongodb className="icon" />
                </div>
                <div className="skillbar-title">
                  <span>mongodb</span>
                </div>
              </div>
              <div className="skillbar-item">
                <div className="icon-tech">
                  <FaGitAlt className="icon" />
                </div>
                <div className="skillbar-title">
                  <span>git</span>
                </div>
              </div>
              <div className="skillbar-item">
                <div className="icon-tech">
                  <FaGithub className="icon" />
                </div>
                <div className="skillbar-title">
                  <span>github</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechSkills
