import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql, Link } from "gatsby";

export const query = graphql`
  query AllPosts {
    allMdx {
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
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <Seo title={'Blog'}/>
      <article>
        <title>Blog</title>
        <h1>
          Blog
        </h1>
        <ul>
          {
            posts.map((post) => {
              return <li>
                <Link to={post.slug} key={post.slug}>
                  {post.frontmatter.title}
                </Link>

              </li>
            })
          }
        </ul>
      </article>
    </Layout>
  )
}

export default BlogPage
