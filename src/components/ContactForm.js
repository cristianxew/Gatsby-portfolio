import React from "react"
import Bottom from "./Bottom/Bottom"

export default class ContactForm extends React.Component {
  constructor() {
    super()
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mrgozgva"
        method="POST"
      >
        <div className="row">
          <div className="col-lg-6 form-item">
            <div className="form-group">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Your Name*"
                required
              ></input>
            </div>
          </div>
          <div className="col-lg-6 form-item">
            <div className="form-group">
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Your Email*"
                required
              ></input>
            </div>
          </div>
          <div className="col-12 form-item">
            <div className="form-group">
              <input
                name="subject"
                type="text"
                className="form-control"
                placeholder="Your Subject*"
                required
              ></input>
            </div>
          </div>
          <div className="col-12 form-item">
            <div className="form-group">
              <textarea
                name="message"
                rows="4"
                className="form-control"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
          </div>
          <div className="col-sm-12 mt-4 text-left">
            {status === "SUCCESS" ? (
              <p className="form-success">Thanks! I will talk to you soon.</p>
            ) : (
              <button id="contact-btn">
                <Bottom>Send Message</Bottom>
              </button>
            )}
            {status === "ERROR" && (
              <p className="form-error">Ooops! There was an error.</p>
            )}
          </div>
        </div>
      </form>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
