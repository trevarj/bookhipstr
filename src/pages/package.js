import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Splash from "../components/splash";
import Content from "../components/content";

export default function Package({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Splash src={frontmatter.video} />
      <Content
        type="package"
        title={frontmatter.title}
        text={frontmatter.subtitle}
      />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        subtitle
        image
        video
      }
    }
  }
`;
