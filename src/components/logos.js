import React from "react";
import styled from "styled-components";
import { Column, Text, Subtitle } from "../theme/index";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

// const Grid = styled.div`
//   display: grid;
//   margin: 2em auto;
//   margin-top: 1em;
//   grid-template-columns: repeat(4, 1fr);
//   grid-auto-rows: 185px;
//   height: 100%;
//   width: 85%;
//   max-width: 1600px;
//   @media (max-width: 780px) {
//     width: 100%;
//     margin: 0;
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

// const Image = styled.img`
//   width: 85%;
//   align-self: center;
//   justify-self: center;
// `;

const StyledColumn = styled(Column)`
  align-items: center;
  margin: 4em 0 2em 0;
  text-align: center;
  @media (max-width: 780px) {
    width: 95%;
  }
`;

export default function Logos() {
  return (
    <Wrapper>
      <StyledColumn>
        <Subtitle logo margin="0 0 .5em 0">
          Storytelling is the most powerful tool to empower your brand.
        </Subtitle>
        <Text logo margin="0">
          Here are a few brands that have trusted us
        </Text>
      </StyledColumn>
      {/* <Grid>
        {logos &&
          logos.map((key, index) => {
            return <Image src={key} alt="Creative114 Logo" key={index} />;
          })}
      </Grid> */}
      <div
        style={{
          width: "25%",
          height: "750px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        {/* <StaticQuery
          query={graphql`
            query {
              placeholderImage: file(relativePath: { eq: "logos1.png" }) {
                childImageSharp {
                  fluid(maxWidth: 250) {
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
        <StaticQuery
          query={graphql`
            query {
              placeholderImage: file(relativePath: { eq: "logos2.png" }) {
                childImageSharp {
                  fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `}
          render={data => (
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          )}
        /> */}
      </div>
    </Wrapper>
  );
}
