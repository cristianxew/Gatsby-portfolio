import React, { useEffect, useState, useCallback } from "react"
import Pagination from "react-js-pagination"
import { Link } from "gatsby"
import { FaShare } from "react-icons/fa"
import Title from "../Title/Title"
import Bottom from "../Bottom/Bottom"
import Project from "../Project/Project"

const Projects = ({ projects, title, showLink, showPagination }) => {
  const [activePage, setActivePage] = useState(1)
  const [currentProjects, setCurrentProjects] = useState(null)
  const projectsPerPage = 4
  const pageRange = 5

  useEffect(() => {
    setProjectsToBeDisplayed(activePage * projectsPerPage)
  }, [activePage, projects.length])

  const setProjectsToBeDisplayed = useCallback(
    lastProjectIndex => {
      const indexOfLastProject = lastProjectIndex
      const indexOfFirstProject = indexOfLastProject - projectsPerPage

      const currentProjectsData = projects.slice(
        indexOfFirstProject,
        indexOfLastProject
      )
      setCurrentProjects(currentProjectsData)
    },
    [projects]
  )

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber)
  }
  if (null === currentProjects) {
    return null
  }

  return (
    <section className="section projects">
      {title && <Title title={title} />}
      <div className="container">
        <div className="row">
          {showPagination
            ? currentProjects.map(project => {
                return (
                  <div
                    key={project.id}
                    className="section-center projects-center col-lg-6"
                  >
                    <Project {...project} />
                  </div>
                )
              })
            : projects.map(project => {
                return (
                  <div
                    key={project.id}
                    className="section-center projects-center col-lg-6"
                  >
                    <Project {...project} />
                  </div>
                )
              })}
        </div>
        {showLink && (
          <Link to="/projects/">
            <div className="btn-center">
              <Bottom>
                View all projects
                <FaShare className="btn-icon" />
              </Bottom>
            </div>
          </Link>
        )}
        {showPagination && (
          <div className="pagination-wrapper">
            <Pagination
              activePage={activePage}
              itemsCountPerPage={projectsPerPage}
              totalItemsCount={projects.length}
              pageRangeDisplayed={pageRange}
              onChange={handlePageChange}
              itemClass={"page-item"}
              linkClass={"page-link"}
              prevPageText={"Previous"}
              nextPageText={"Next"}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
