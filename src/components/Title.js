import React from "react"

const Title = ({ title }) => {
  return (
    <div className="title-content">
      <h2 className="base-color">{title}</h2>
      <span className="underline"></span>
    </div>
  )
}

export default Title
