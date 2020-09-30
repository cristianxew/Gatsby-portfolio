import React, { Component } from "react"

import Typed from "typed.js"

class TypedText extends Component {
  componentDidMount() {
    const { strings } = this.props
    const options = {
      strings: strings,
      typeSpeed: 100,
      backDelay: 2000,
      backSpeed: 80,
      loop: true,
    }
    this.typed = new Typed(this.el, options)
  }
  componentWillUnmount() {
    this.typed.destroy()
  }
  render() {
    return (
      <h1
        className="hero-title"
        style={{ whiteSpace: "pre" }}
        ref={el => {
          this.el = el
        }}
      ></h1>
    )
  }
}

export default TypedText
