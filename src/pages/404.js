import React from "react"
import Layout from "../components/layout"


const NotFoundPage = () => (
  <Layout pageInfo={{ pageName: "404" }}>
  
    <h1>Page not found.</h1>
    <br />
    <p>
      <h2>Error 4xx: We can't find the page you're looking for.</h2>
    </p>
    <br></br>
 
  </Layout>
)

export default NotFoundPage
