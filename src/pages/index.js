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

const IndexPage = ({data}) => {
  return (
    <Layout>
      <Seo title={'Homepage'}/>
      <article>
        <title>Fabricio Quagliariello</title>
        <section className="w100">
          <h2>Welcome!</h2>
          <p>
            Thanks for cchecking my website.
          </p>
        </section>
        <section>
          <h2>Latest Articles</h2>
          <PostList posts={data.posts.nodes}/>
        </section>
        <section>
          <h2>Mi vision</h2>
          <p>
            Simplicity in Technology, Success in Business.
          </p>
        </section>
      </article>
    </Layout>
  )
}

export default IndexPage
