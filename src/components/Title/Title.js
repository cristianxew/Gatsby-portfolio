import React from "react"
import "./title.scss"

const Title = ({ title, styles }) => {
  return (
    <div className={`title-content ${styles ? styles : ""}`}>
      <h2>{title}</h2>
      <span className="underline"></span>
    </div>
  )
}

export default Title
