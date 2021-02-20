import React, { useState, useEffect } from "react"
import Title from "../Title/Title"
import Blog from "./Blog"
import Pagination from "react-js-pagination"
// import { Link } from "gatsby"
// import { FaShare } from "react-icons/fa"
// import Bottom from "../Bottom/Bottom"
// import CategoryMenu from "../Blog/CategoryMenu"
//import Blog02 from "../Blog/Blog02"

export const Blogs = ({
  blogs,
  title,
  horizontal,
  vertical,
  showSideBar,
  subtitle,
}) => {
  const [activePage, setActivePage] = useState(1)
  const [currentBlogs, setCurrentBlogs] = useState(null)
  const blogsPerPage = 3
  const pageRange = 10

  useEffect(() => {
    /* const activePage = 1
    setActivePage(activePage) */

    /* eslint-disable */
    setBlogsToBeDisplayed(
      activePage * blogsPerPage
    ) /* eslint-disable no-alert, no-console */
  }, [blogs.length])

  useEffect(() => {
    /* eslint-disable */
    setBlogsToBeDisplayed(activePage * blogsPerPage)
  }, [activePage])

  const setBlogsToBeDisplayed = lastBlogIndex => {
    const indexOfLastProduct = lastBlogIndex // e.g. 6
    const indexOfFirstProduct = indexOfLastProduct - blogsPerPage // e.g. 6-6 = 0 ( when product per page is 6 )

    // Get all the products from index of first product, to index of last product
    const currentBlogsData = blogs.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    ) // e.g. products from index 0 to 6 ( 6 items ).
    setCurrentBlogs(currentBlogsData)
  }

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
