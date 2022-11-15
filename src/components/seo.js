import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import favicon96 from "../images/icon-96x96.png";
import favicon72 from "../images/icon-72x72.png";

function SEO({ description, lang, meta, keywords, title }) {
  if (typeof window !== "undefined") {
    const NPAslug = window.location.pathname
    let NPAseoTitle = null
    let NPAseoDescription = null
    switch (NPAslug) {
      case '/hipstr-array-plus':
        NPAseoTitle = 'Hipstr Array Plus | 3D Photo Booth | Hipstr'
        NPAseoDescription = 'Hipstr Array Plus is a multi-camera setup that takes single, frozen moments and creates 3-D photo booth animations for instant social media sharing. Learn more!'
        break;
      case '/mosaic':
        NPAseoTitle = 'Photo Mosaic Wall | Hipstr'
        NPAseoDescription = "Not your average event photo wall; we're an experience. Elevate your next event with an interactive photo wall."
        break;
      case '/one-ridiculous-photo-booth-package':
        NPAseoTitle = 'Ultimate Photo Booth Package | Photo Booth Bundle | Hipstr'
        NPAseoDescription = "Hipstr's photo booth package is not your average photo booth rental, we are an experience. Located in many cities, visit our website to learn more today."
        break;
      default:
        break;
    }
    return (
      <StaticQuery
        query={detailsQuery}
        render={data => {
          const metaDescription =
            NPAseoDescription !== null ? NPAseoDescription : description || data.site.siteMetadata.description;
          return (
            <Helmet
              htmlAttributes={{
                lang
              }}
              link={[
                {
                  rel: "shortcut icon",
                  type: "image/png",
                  sizes: "96x96",
                  href: `${favicon96}`
                },
                {
                  rel: "shortcut icon",
                  type: "image/png",
                  sizes: "72x72",
                  href: `${favicon72}`
                },
                {
                  rel: "canonical",
                  href: `${window.location.href}`
                }
              ]}
              title={title}
              titleTemplate={NPAseoTitle !== null ? NPAseoTitle : `%s | ${data.site.siteMetadata.title}`}
              meta={[
                {
                  name: `description`,
                  content: metaDescription
                },
                {
                  property: `og:title`,
                  content: title
                },
                {
                  property: `og:description`,
                  content: metaDescription
                },
                {
                  property: `og:type`,
                  content: `website`
                },
                {
                  name: `twitter:card`,
                  content: `summary`
                },
                {
                  name: `twitter:creator`,
                  content: data.site.siteMetadata.author
                },
                {
                  name: `twitter:title`,
                  content: title
                },
                {
                  name: `twitter:description`,
                  content: metaDescription
                }
              ]

                .concat(
                  keywords.length > 0
                    ? {
                      name: `keywords`,
                      content: keywords.join(`, `)
                    }
                    : []
                )
                .concat(meta)}
            />
          );
        }}
      />
    );
  }
  else {
    return null;
  }
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
