import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "hipstr.png" }) {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fadeIn={false}
        critical={true}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);
export default Logo;
