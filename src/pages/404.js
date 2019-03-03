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
      <Subtitle>404 | Not found</Subtitle>
      <Text bold>Maybe you were looking for these links instead:</Text>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      <a href="https://competent-brattain-44ae2d.netlify.com/static/Event-Attendant-Posting-Final-CHICAGO.pdf">
        <Text>Event attendant posting | Chicago</Text>
      </a>
      <a href="https://competent-brattain-44ae2d.netlify.com/static/Event-Attendant-Posting-Final-LA.pdf">
        <Text>Event attendant posting | LA</Text>
      </a>
      <a href="https://competent-brattain-44ae2d.netlify.com/static/Event-Attendant-Posting-Final-NY.pdf">
        <Text>Event attendant posting | NY</Text>
      </a>
      <a href="https://competent-brattain-44ae2d.netlify.com/static/Event-Attendant-Posting-Final-PA.pdf">
        <Text>Event attendant posting | PA</Text>
      </a>
      <a href="https://competent-brattain-44ae2d.netlify.com/static/Event-Attendant-Posting-Final-SD.pdf">
        <Text>Event attendant posting | SD</Text>
      </a>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
