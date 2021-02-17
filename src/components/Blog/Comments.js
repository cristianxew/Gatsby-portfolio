import React from "react"
import { Disqus } from "gatsby-plugin-disqus"

const Comments = ({ slug, identifier, title }) => {
  let disqusConfig = {
    url: `https://cristianbernal.com/blogs/${slug}`,
    identifier: identifier,
    title: title,
  }
  return (
    <>
      <h4 className="comment-start">{title}</h4>
      <Disqus config={disqusConfig} />
    </>
  )
}

export default Comments
