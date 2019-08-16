import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Text, Subtitle } from "../theme/index";
import { Link } from "gatsby";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 275px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 | Not found" />
    <div style={{ height: "75px" }} />
    <Wrapper>
      <h1>This page does not exist</h1>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
