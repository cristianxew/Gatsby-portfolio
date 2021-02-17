import React from "react"
import { Link } from "gatsby"
import { FaShare } from "react-icons/fa"

import Title from "../Title/Title"
import Bottom from "../Bottom/Bottom"
import CategoryMenu from "../Blog/CategoryMenu"
//import Blog02 from "../Blog/Blog02"
import Blog from "./Blog"

export const Blogs = ({ blogs, title, showLink, horizontal }) => {
  return (
    <section className="latest-articles">
      <div className="container">
        <Title title={title} />
        <div className="row">
          <div className="col-md-8">
            <div
              className={`${horizontal ? "blogs-horizontal" : "blogs-center"}`}
            >
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
          <div className="col-md-4">
            <CategoryMenu />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Blogs
