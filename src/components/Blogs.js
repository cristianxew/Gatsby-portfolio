import React from "react"
import Title from "./Title"
import Bottom from "./Bottom"
import Blog from "./Blog"
import { Link } from "gatsby"
import { FaShare } from "react-icons/fa"
export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className="latest-articles">
      <div className="container">
        <Title title={title} />
        <div className="section-center blogs-center">
          {blogs.map(blog => {
            return <Blog key={blog.id} {...blog} />
          })}
        </div>
        {showLink && (
          <Link to="/blog/">
            <div className="btn-center">
              <Bottom>
                Blog
                <FaShare className="btn-icon" />
              </Bottom>
            </div>
          </Link>
        )}
      </div>
    </section>
  )
}
export default Blogs
