import React from "react";
import styled from "styled-components";
import { Text, Subtitle, Column, Row, Button } from "../theme/index";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Slide from "react-reveal/Slide";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4em 0 2em 0;
  @media (max-width: 720px) {
    text-align: center;
  }
`;

const StyledRow = styled(Row)`
  width: 100%;
  margin: 4em 0;
  justify-content: space-evenly;
  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const StyledColumn = styled(Column)`
  width: 35%;
  align-items: center;
  height: 375px;
  @media (max-width: 720px) {
    width: 95%;
    height: 100%;
  }
`;

const Div = styled.div`
  width: 35%;
  height: 375px;
  @media (max-width: 720px) {
    width: 95%;
    margin: 4em 0 2em 0;
    height: 175px;
  }
`;

export default function Location() {
  return (
    <Wrapper>
      {/* <Slide bottom> */}
      <Subtitle>Choose your location</Subtitle>
      <StyledRow justifycontent="space-evenly" width="100%" margin="4em 0">
        <StyledColumn width="35%" alignitems="center">
          <Text large blue>
            AZ, CA, CO, CT, D.C., DE, FL, GA, IL, IN, KY, LA, MD, MA, MI, MN,
            MO, NV, NJ, NY, NC, OH, OR, PA, RI, SC, TN, TX, VA, WA, WI, & WV
          </Text>
          <Text large>Don't see your location?</Text>
          <Button>Get in touch</Button>
        </StyledColumn>
        <Div>
          <StaticQuery
            query={graphql`
              query {
                placeholderImage: file(relativePath: { eq: "location.png" }) {
                  childImageSharp {
                    fluid(maxWidth: 300) {
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
        </Div>
      </StyledRow>
      {/* </Slide> */}
    </Wrapper>
  );
}
