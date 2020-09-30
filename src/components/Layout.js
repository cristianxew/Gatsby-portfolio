import React from "react"
import Navbar from "./Navbar"
import useSticky from "./hook/useSticky"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const { isSticky, element } = useSticky()
  return (
    <>
      <Navbar element={element} sticky={isSticky}></Navbar>
      {children}
      <Footer />
    </>
  )
}

export default Layout
