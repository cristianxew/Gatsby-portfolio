import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import "./blog.scss"

const Blog = ({ id, title, image, date, slug, desc, tag, vertical }) => {
  return (
    <Link
      to={`/blog/${slug}`}
      key={id}
      className={`${vertical ? "blog-vertical" : "blog-horizontal"}`}
    >
      <article>
        <div className="blog-img-container">
          {image && (
            <Image fluid={image.childImageSharp.fluid} className="blog-img" />
          )}
        </div>
        <div className="blog-card">
          <h3>{title}</h3>
          <p>{desc.substring(0, 120)}... </p>
          <div className="blog-footer">
            <span>{tag}</span>
            <p> {date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Blog
