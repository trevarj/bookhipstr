import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Splash from "../components/splash";
import OneSplash from "../components/onesplash";
import PackageBanner from "../components/packagebanner";
import Testimonials from "../components/testimonials";
import SEO from "../components/seo";

const Grid = styled.div`
  display: grid;
  grid-gap: 50px;
  width: 85%;
  margin: 1em auto 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    width: 95%;
  }
`;

const Information = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  margin-top: 1em;
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
          height: "1000px",
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
      {frontmatter.path !== "/one-ridiculous-photo-booth-package" && (
        <Splash
          type={frontmatter.type}
          src={frontmatter.splash}
          title={frontmatter.title}
          text={frontmatter.subtitle}
        />
      )}
      {frontmatter.path === "/one-ridiculous-photo-booth-package" && (
        <OneSplash />
      )}
      <Grid>
        <Information
          className="package"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <Form type={frontmatter.path} />
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
