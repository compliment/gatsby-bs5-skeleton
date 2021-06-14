import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav, Button } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar collapseOnSelect expand="lg" id="site-navbar" className="sticky-top collapsed">
        {/* <Container> */}
        <div className="container">
          <Link to="/" className="link-no-style">
            <Navbar.Brand>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle  id="navbar-toggler" bsPrefix="navbar-dark navbar-toggler" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-center"
            id="responsive-navbar-nav"
          >
            
          </Navbar.Collapse>
          {/* </Container> */}
        </div>
      </Navbar>
    </>
  )
}

export default CustomNavbar

