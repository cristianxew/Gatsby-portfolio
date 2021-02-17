import React from "react"
import { FaPhoneAlt } from "react-icons/fa"
import { SiMinutemailer } from "react-icons/si"
import Layout from "../components/Layout"
import Title from "../components/Title/Title"
import ContactForm from "../components/ContactForm"
import SEO from "../components/SEO"
import "./contact.scss"

const contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or job opportunities"
      />
      <main className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Title title="Get in Touch" />
            </div>
          </div>
          <div className="row contact-sub-container">
            <div className="col-lg-4">
              <div className="contact-info">
                <p>
                  Feel free to get in touch with me. I am always open to
                  discussing new projects, creative ideas or job opportunities.
                </p>
                <div className="info-group">
                  <div className="base-color icon-contact">
                    <FaPhoneAlt className="float-left pt-1" />
                  </div>
                  <div className="mt-3 ml-5 info">
                    <h5 className="mb-0">Call Me On</h5>
                    <p>+48 605095818</p>
                  </div>
                </div>
                <div className="info-group">
                  <div className="base-color icon-contact">
                    <SiMinutemailer className="float-left pt-1" />
                  </div>
                  <div className="mt-3 ml-5 info">
                    <h5 className="mb-0">Email Me At</h5>
                    <a href="mailto:cristianxsa15@gmail.com?subject=Asunto:&body=Mensaje:">
                      <p>cristianxsa15@gmail.com</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-12 contact-form">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default contact
