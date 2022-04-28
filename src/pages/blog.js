import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

export const pageQuery = graphql`
  {}
`;

const BlogPage = () => {
  return (
    <Layout>
      <Seo title={'Blog'}/>
      <article>
        <title>Blog</title>
        <h1>
          Blog
        </h1>
      </article>
    </Layout>
  )
}

export default BlogPage
