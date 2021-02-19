import React from "react"
// import { Link } from "gatsby"
// import { FaShare } from "react-icons/fa"
// import Bottom from "../Bottom/Bottom"

import Title from "../Title/Title"
import CategoryMenu from "../Blog/CategoryMenu"
//import Blog02 from "../Blog/Blog02"
import Blog from "./Blog"

export const Blogs = ({
  blogs,
  title,
  horizontal,
  vertical,
  showSideBar,
  subtitle,
}) => {
  return (
    <div className={`col-md-${showSideBar ? "8" : "12"}`}>
      <section className="blogs-section">
        {title && <Title title={title} />}
        {subtitle && <h2 className="blog-page-subtitle">{subtitle}</h2>}
        <div className={`${horizontal ? "blogs-horizontal" : "blogs-center"}`}>
          {blogs.map(blog => {
            return <Blog vertical={vertical} key={blog.id} {...blog} />
          })}
        </div>

        {/* {showSideBar && (
            <div className="col-md-4 side-bar-wrapper">
              <h2>Topics</h2>
              <CategoryMenu />
            </div>
          )} */}
      </section>
    </div>
  )
}
export default Blogs
