import React from "react"
import { Link, PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage: React.FC<PageProps> = (props: PageProps) => (
  <Layout>
    <SEO title="Contact Me" />
    <h2>Contact Me</h2>
    <p>Email: </p>
    <p>LinkedIn: </p>
    <p>GitHub: </p>
    <p>GitConnected: </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
