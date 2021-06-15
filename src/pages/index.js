import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Carousel } from "react-bootstrap"

const IndexPage = () => {
  return (
    <>
      // Using react-bootstrap 
      <Navbar collapseOnSelect expand="lg" id="navbar" bg="dark" className="sticky-top collapsed">
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
         
        </div>
      </Navbar>
      // Using bootstrap directly, not that it matters, anyway.
      <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4">
        <h5 class="text-white h4">Collapsed content</h5>
        <span class="text-muted">Toggleable via the navbar brand.</span>
      </div>
    </div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    </>
  )
}

export default IndexPage