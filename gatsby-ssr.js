const React = require("react")
const Layout = require("./src/components/Layout").default

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script src="https://unpkg.com/@codersrank/activity@0.9.13/codersrank-activity.min.js"></script>,
    <script src="https://unpkg.com/@codersrank/summary@0.9.11/codersrank-summary.min.js"></script>
  ])
}