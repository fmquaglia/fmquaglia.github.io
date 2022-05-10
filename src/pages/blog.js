import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import PostList from "../components/postlist";

export const query = graphql`
  query {
    posts: allMdx {
      nodes {
        frontmatter {
          title
        }
        slug
      }
    }
  }
`;


const BlogPage = ({data}) => {

  return (
    <Layout>
      <Seo title={'Blog'}/>
      <article>
        <title>Blog</title>
        <section>
          <h2>Latest Articles</h2>
          <PostList posts={data.posts.nodes}/>
        </section>
      </article>
    </Layout>
  )
}

export default BlogPage
