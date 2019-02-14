import React from "react";
import { Text, Subtitle, Column } from "../theme/index";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Splash from "../components/splash";
import styled from "styled-components";
import Packages from "../components/packages";

const Content = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomePage = () => (
  <Layout>
    <SEO title="Home" keywords={[`photobooth`, `newyork`, `events`, `party`]} />
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
    <Packages />
  </Layout>
);

export default HomePage;
