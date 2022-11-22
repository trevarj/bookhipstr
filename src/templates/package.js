import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Splash from "../components/splash";
import OneSplash from "../components/onesplash";
import PackageBanner from "../components/packagebanner";
import Testimonials from "../components/testimonials";
import SEO from "../components/seo";
import NPAcontentHead2 from "../components/npacontenthead2";
import NPAcontentHead3 from "../components/npacontenthead3";
import { Button } from "../theme";

export const NPAContentParagraph = styled.p`
  font-size: ${props => (props.large ? "26px" : "15px")};
  font-weight: 400;
  font-family: "Poppins Regular",sans-serif;
  line-height: 26px;
  letter-spacing: 1px;
  margin: ${props => props.margin || "0.5em 0"};
  @media (max-width: 500px) {
    font-size: 28px;
  }
`;

const Wrapper = styled.div`
  min-height: 150px;
  height: 100%;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin: 2em auto;
  flex-direction: column;
`;

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
      {frontmatter.path === "/mosaic" && (
        <Wrapper>
          <NPAcontentHead2 npacontent={frontmatter.npasubheadH2b} />
              <NPAContentParagraph>Ready to elevate your next corporate event or party with the ultimate interactive photo booth experience? A photo mosaic wall is the perfect way for guests to capture high-quality photos and contribute to a mosaic in real time.</NPAContentParagraph>
              <NPAContentParagraph>A print or digital photo mosaic wall is ideal for bringing your logo or image to life at your next event. The mosaic generation process is easy and interactive at the same time. Guests will love getting their pictures taken and contributing to the big picture. As your event progresses, they will see how their individual photos transition into a larger image.</NPAContentParagraph>
              <NPAContentParagraph>A photo mosaic wall event is perfect for encouraging engagement at events. Create fun memories along with a keepsake from your event.</NPAContentParagraph>
          <NPAcontentHead3 npacontent={frontmatter.npasubheadH3a} />
              <NPAContentParagraph>Creating a mosaic board is simple when you have the right technology at your fingertips. A printed photo mosaic wall works similarly to your average photo booth. Guests can snap a picture in front of branded wall decor, with friends, props, etc.</NPAContentParagraph>
              <NPAContentParagraph>From there, the station prints photos as stickers specially filtered. Guests can place their photo sticker on a predetermined square and watch the larger logo or image come to life.</NPAContentParagraph>
              <NPAContentParagraph>Digital photo mosaic walls are another option. They can broadcast the images directly to a screen to create virtual mosaics that are perfect for sharing on social media.</NPAContentParagraph>
          <NPAcontentHead2 npacontent={frontmatter.npasubheadH2c} />
              <NPAContentParagraph>A mosaic wall is so much more than your average photo booth. It creates a sense of comradery as guests or team members add their image to create a larger picture. A photo mosaic wall event is also the perfect opportunity to ensure your brand stands out against the rest.</NPAContentParagraph>
              <NPAContentParagraph>Use an event photo wall at a conference, charity event, or another corporate event. Brand your wall decor, props, and more to create cohesion. And, of course, you can have the wall mosaic transformed into your logo!</NPAContentParagraph>
              <NPAContentParagraph>Not only is a photo mosaic wall fun for everyone, but it also gives your company the perfect keepsake. Share images of your wall mosaic online and make sure to display it in the office or breakroom so everyone will be reminded of the fun times.</NPAContentParagraph>
          <NPAcontentHead2 npacontent={frontmatter.npasubheadH2d} />
              <NPAContentParagraph>Hipstr's Mosaic Wall is the most interactive photo activation ever…experience how it can make your event more engaging.</NPAContentParagraph>
              <NPAContentParagraph>We guarantee a good time, every time.</NPAContentParagraph>
              <Button><a href="https://bookhipstr.com/book-now/">Book Now</a></Button>
        </Wrapper>
      )}
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
        npasubheadH2a
        npasubheadH2b
        npasubheadH2c
        npasubheadH2d
        npasubheadH3a
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
