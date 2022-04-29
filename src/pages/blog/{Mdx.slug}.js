import React from "react";
import { graphql, Link } from "gatsby";
import {MDXProvider} from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import CodeBlock from "../../components/codeblock";

const components = {
  pre: CodeBlock
}

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
        <MDXProvider components={components}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
        <p><Link to={'/blog'}>Back</Link></p>
      </article>
    </Layout>
  );
}

export default BlogPage;
