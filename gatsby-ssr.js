const React = require("react")
const Layout = require("./src/components/Layout").default

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
