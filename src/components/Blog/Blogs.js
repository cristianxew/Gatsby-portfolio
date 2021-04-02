import React, { useState, useEffect, useCallback } from "react"
import { Link } from "gatsby"
import { FaReply } from "react-icons/fa"
import Bottom from "../../components/Bottom/Bottom"
import Title from "../Title/Title"
import Blog from "./Blog"
import Pagination from "react-js-pagination"

export const Blogs = ({
  blogs,
  title,
  horizontal,
  vertical,
  showSideBar,
  showButton,
  subtitle,
}) => {
  const [activePage, setActivePage] = useState(1)
  const [currentBlogs, setCurrentBlogs] = useState(null)
  const blogsPerPage = 3
  const pageRange = 10

  useEffect(() => {
    setBlogsToBeDisplayed(activePage * blogsPerPage)
  }, [activePage, blogs.length])

  const setBlogsToBeDisplayed = useCallback(
    lastBlogIndex => {
      const indexOfLastBlog = lastBlogIndex
      const indexOfFirstBlog = indexOfLastBlog - blogsPerPage

      const currentBlogsData = blogs.slice(indexOfFirstBlog, indexOfLastBlog)
      setCurrentBlogs(currentBlogsData)
    },
    [blogs]
  )

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber)
  }
  if (null === currentBlogs) {
    return null
  }

  return (
    <div className={`col-md-${showSideBar ? "8" : "12"}`}>
      <section className="blogs-section">
        {title && <Title title={title} />}
        {subtitle && <h2 className="blog-page-subtitle">{subtitle}</h2>}
        <div className={`${horizontal ? "blogs-horizontal" : "blogs-center"}`}>
          {currentBlogs.map(blog => {
            return <Blog vertical={vertical} key={blog.id} {...blog} />
          })}
        </div>
        {showButton && (
          <Link to="/blog">
            <div className="btn-center">
              <Bottom>
                <FaReply className="btn-icon-left" />
              Blog
            </Bottom>
            </div>
          </Link>
        )}
        <div className="pagination-wrapper">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={blogsPerPage}
            totalItemsCount={blogs.length}
            pageRangeDisplayed={pageRange}
            onChange={handlePageChange}
            itemClass={"page-item"}
            linkClass={"page-link"}
            prevPageText={"Previous"}
            nextPageText={"Next"}
          />
        </div>
      </section>
    </div>
  )
}
export default Blogs
