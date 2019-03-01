import React from "react";
import { Text, Subtitle, Column } from "../theme/index";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2em 0;
  background: #2b2b2b;
  @media (max-width: 720px) {
    padding: 3em 0;
    margin: 0 auto;
    text-align: center;
  }
`;

const StyledColumn = styled(Column)`
  width: 50%;
  text-align: ${props => props.textalign};
  @media (max-width: 720px) {
    width: 95%;
    margin: 0 auto;
  }
`;

const Content = ({ title, title2, text, type }) => (
  <Wrapper>
    <div style={{ width: 175 }}>
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "meethipstr.png" }) {
              childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        )}
      />
    </div>
    <StyledColumn textalign={type === "package" && "center"}>
      <Slide bottom>
        <Subtitle white>
          <span style={{ color: "#ec7673" }}>{title}</span> {title2}
        </Subtitle>
        <Text white>{text}</Text>
      </Slide>
    </StyledColumn>
  </Wrapper>
);

export default Content;
