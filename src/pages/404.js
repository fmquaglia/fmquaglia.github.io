import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <article>
        <title>Not found</title>
        <h1>Page not found</h1>
        <p>
          <code>
            /dev/null
          </code>
        </p>
      </article>
    </Layout>
  )
}

export default NotFoundPage
