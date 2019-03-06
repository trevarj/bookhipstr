import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "hipstrwhite.png" }) {
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
        alt="Hipstr Company Logo"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);
export default Logo;
