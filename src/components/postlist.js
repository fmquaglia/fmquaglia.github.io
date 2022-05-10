import * as React from "react";
import { Link } from "gatsby";

const PostList = ({posts}) => {

  return (
    <ul className="posts">
      {
        posts.map((post) => {
          return <li className="post" key={post.slug}>
            <Link to={`/blog/${post.slug}`}>
              {post.frontmatter.title}
            </Link>
          </li>
        })
      }
    </ul>
  )
};

export default PostList;
