import React from "react"
import { Link } from "gatsby"
import { FaShare } from "react-icons/fa"

import Title from "../Title/Title"
import Bottom from "../Bottom/Bottom"
//import Blog02 from "../Blog/Blog02"
import Blog from "./Blog"

export const LatestArticles = ({ blogs, title }) => {
  return (
    <section className="latest-articles">
      <div className="container">
        <Title title={title} />
        <div className="blogs-center">
          {blogs.map(blog => {
            return <Blog key={blog.id} vertical {...blog} />
          })}
        </div>

        <Link to="/blog/">
          <div className="btn-center">
            <Bottom>
              Blog
              <FaShare className="btn-icon" />
            </Bottom>
          </div>
        </Link>
      </div>
    </section>
  )
}
export default LatestArticles
