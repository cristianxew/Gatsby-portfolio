import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import "./blog.scss"

const Blog02 = ({ id, title, image, date, slug, desc, tag }) => {
  return (
    <Link to={`/blogs/${slug}`} key={id} className="blog02">
      <article>
        <div className=" ">
          {image && (
            <Image fluid={image.childImageSharp.fluid} className="blog02-img" />
          )}
        </div>
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc} </p>
          <div className="blog-footer">
            <span>{tag}</span>
            <p> {date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Blog02
