import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";


const Seo = ({title, description, meta=[]}) => {
  const {site} = useStaticQuery(
    graphql`{
      site {
        siteMetadata {
          title,
          siteUrl,
          description
        }
      }
    }`
  );

  const metaDescription = description || site.siteMetadata.description;

  return <Helmet
    title={title}
    htmlAttributes={{lang: 'en'}}
    titleTemplate={`%s | ${site.siteMetadata.title}`}
    meta={[
      {
        name: `description`,
        content: metaDescription
      },
      {
        name: 'og:title',
        content: title
      },
      {
        name: 'og:description',
        content: metaDescription
      },
      {
        name: 'og:type',
        content: 'website'
      }
    ].concat(meta)}
  />
}

export default Seo;
