import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Splash from "../components/splash";
import Packages from "../components/packages";
import Location from "../components/location";
import Banner from "../components/banner";
import Logos from "../components/logos";
import Experience from "../components/experience";
import Content from "../components/content";
import Trusted from "../components/trusted";
import Testimonials from "../components/testimonials";
import Helmet from "react-helmet";
import favicon from "../images/icon-72x72.png";
import styled from "styled-components";

const Div = styled.div`
  height: 35px;
  width: 100%;
  background: #000;
`;

const HomePage = () => (
  <Layout>
    <Helmet
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
    />
    <SEO
      title="Hipstr Photo Booth"
      keywords={[`photobooth`, `newyork`, `events`, `party`]}
    />
    <Splash
      type="video"
      src="https://player.vimeo.com/video/254001359?background=1"
    />
    <Content
      title="Hipstr Photo Booth"
      title2=""
      text=" Tired of tacky, under-developed and not-fun photo booths, we came up
      with a better way to administer the fun. Read more on how we
      specialize in delivering interactive photo & video activations across
      the USA."
    />
    <Packages />
    <Div />
    <Location />
    <Experience />
    <Banner title="TRUSTED BY GREAT COMPANIES AND GREAT PEOPLE" />
    <Trusted />
    <Logos />
    <Testimonials />
    <Banner type="bottomCta" />
  </Layout>
);

export default HomePage;
