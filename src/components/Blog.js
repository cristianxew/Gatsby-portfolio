import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import "./blog.scss"

const Blog = ({ id, title, image, date, slug, desc, category }) => {
  return (
    <Link to={`/blogs/${slug}`} key={id} className="blog">
      <article>
        {image && (
          <Image fluid={image.childImageSharp.fluid} className="blog-img" />
        )}
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc} </p>
          <div className="blog-footer">
            <span>{category}</span>
            <p> {date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Blog
