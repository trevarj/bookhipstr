import React from "react";
import { Link } from "gatsby";
import { Title, Text } from "../theme/index";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { graphql } from "gatsby";

const HomePage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Title pink>TEST</Title>
    <Text>{data.site.siteMetadata.description}</Text>
    <Text>Now go build something great.</Text>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/package:test/">Go to page 2</Link>
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
