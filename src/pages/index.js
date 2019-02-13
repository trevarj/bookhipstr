import React from "react";
import { Link } from "gatsby";
import { Title, Text, Subtitle, Column } from "../theme/index";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Splash from "../components/splash";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomePage = ({ data }) => (
  <Layout>
    <Splash />
    <Content>
      <Column width="50%">
        <Subtitle>
          Fun. Modern. Ridiculous.{" "}
          <span style={{ color: "#ec7673" }}>
            And here to guarantee a good time.
          </span>
        </Subtitle>
        <Text>
          Tired of tacky, under-developed and not-fun photo booths, we came up
          with a better way to administer the fun. Read more on how we
          specialize in delivering interactive photo & video activations across
          the USA.
        </Text>
      </Column>
    </Content>
    <SEO title="Home" keywords={[`photobooth`, `newyork`, `events`, `party`]} />
  </Layout>
);

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default HomePage;
