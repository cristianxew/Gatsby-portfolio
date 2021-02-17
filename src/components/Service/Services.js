import React from "react"
import Title from "../Title/Title"
import services from "../../constants/services"
import "./services.scss"

const Services = () => {
  return (
    <section className="section-services">
      <div className="container">
        <Title id="services" title="What I Do"></Title>
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
                    <h3 className="mb-3">{title}</h3>
                    <p className="mb-0">{text}</p>
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
