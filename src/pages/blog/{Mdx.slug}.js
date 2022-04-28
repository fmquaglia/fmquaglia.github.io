import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

export const query = graphql`
  query BlogPostById($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }    
`;

const BlogPage = ({data}) => {
  const post = data.mdx;

  return (
    <Layout>
      <Seo title={data.mdx.frontmatter.title}/>
      <article>
        <h1>{data.mdx.frontmatter.title}</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    </Layout>
  );
}

export default BlogPage;
