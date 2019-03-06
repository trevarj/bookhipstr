import React from "react";
import styled from "styled-components";
import { Text, Subtitle, Column, Row, Button } from "../theme/index";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Slide from "react-reveal/Slide";
import { Link } from "gatsby";

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
    margin: 2em auto;
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
  text-align: center;
  @media (max-width: 720px) {
    width: 95%;
    margin: 4em 0;
    height: 175px;
  }
`;

export default function Location() {
  return (
    <Wrapper>
      <Slide bottom>
        <Subtitle large>
          Choose your <span style={{ color: "#ec7673" }}>location</span>
        </Subtitle>
        <StyledRow>
          <StyledColumn>
            <Text large blue location>
              AZ, CA, CO, CT, D.C., DE, FL, GA, IL, IN, KY, LA, MD, MA, MI, MN,
              MO, NV, NJ, NY, NC, OH, OR, PA, RI, SC, TN, TX, VA, WA, WI, & WV
            </Text>
            <Text large>Don't see your location?</Text>
            <Link to="/book-now">
              <Button>Get in touch</Button>
            </Link>
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
                <Img
                  alt="Hipstr Map of USA territories served"
                  fluid={data.placeholderImage.childImageSharp.fluid}
                />
              )}
            />
            <Subtitle transform="none" margin="1em 0">
              We'll be there for you
            </Subtitle>
          </Div>
        </StyledRow>
      </Slide>
    </Wrapper>
  );
}
