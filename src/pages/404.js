import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";

// markup
const NotFoundPage = () =>
  (
    <Layout>
      <Seo title={'Page not found'}/>
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

export default NotFoundPage;
