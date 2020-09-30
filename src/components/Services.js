import React from "react"
import Title from "./Title"
import services from "../constants/services"
import "./services.scss"
const Services = () => {
  return (
    <section id="services" className="section-services">
      <div className="container">
        <Title id="services" title="What I do"></Title>
        <div className="row">
          {services.map(service => {
            const { id, icon, title, text } = service
            return (
              <div key={id} className="col-lg-4 col-md-6 col-sm-12">
                <div className="services-item">
                  <div className="services-icon">
                    <i>{icon}</i>
                  </div>
                  <div className="services-content">
                    <h4 className="mb-3">{title}</h4>
                    <p className="font-2-color mb-0">{text}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
