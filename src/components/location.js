import React from "react";
import styled from "styled-components";
import { Text, Subtitle, Column, Row, Button } from "../theme/index";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em 0;
`;

export default function Location() {
  return (
    <Wrapper>
      <Subtitle>Choose your location</Subtitle>
      <Row justifycontent="space-evenly" width="100%" margin="4em 0">
        <Column width="35%" alignitems="center">
          <Text large blue>
            AZ, CA, CO, CT, D.C., DE, FL, GA, IL, IN, KY, LA, MD, MA, MI, MN,
            MO, NV, NJ, NY, NC, OH, OR, PA, RI, SC, TN, TX, VA, WA, WI, & WV
          </Text>
          <Text large>Don't see your location?</Text>
          <Button>Get in touch</Button>
        </Column>
        <div style={{ width: "35%", height: "400px" }}>
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
        </div>
      </Row>
    </Wrapper>
  );
}
