import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Splash from "../components/splash";
// import Content from "../components/content";
import PackageBanner from "../components/packagebanner";
import Testimonials from "../components/testimonials";
import SEO from "../components/seo";

const Grid = styled.div`
  display: grid;
  grid-gap: 50px;
  width: 80%;
  margin: 1em auto 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 720px;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    width: 95%;
  }
`;

const Information = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 2em;
`;

function Form() {
  return (
    <Div>
      <iframe
        id="JotFormIFrame-80186446884165"
        onLoad={typeof window !== "undefined" && window.parent.scrollTo(0, 0)}
        allowtransparency="true"
        allowFullScreen
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/81706122684153"
        frameBorder="0"
        style={{
          width: "10px",
          minWidth: "100%",
          height: "714px",
          border: "none"
        }}
        scrolling="no"
      />
    </Div>
  );
}

export default function Package({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        keywords={[`photobooth`, `newyork`, `events`, `party`]}
      />
      <Splash
        type={frontmatter.type}
        src={frontmatter.splash}
        title={frontmatter.title}
        text={frontmatter.subtitle}
      />
      {/* <Content
        type="package"
        title={frontmatter.title}
        text={frontmatter.subtitle}
      /> */}
      <Grid>
        <Information
          className="package"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Form />
      </Grid>
      <PackageBanner title={frontmatter.tagline} />
      <Testimonials />
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
        image
        tagline
        type
        subtitle
        splash {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
