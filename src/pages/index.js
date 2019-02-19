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
import Trusted from "../components/Trusted";

const HomePage = () => (
  <Layout>
    <SEO title="Home" keywords={[`photobooth`, `newyork`, `events`, `party`]} />
    <Splash src="https://player.vimeo.com/video/254001359?background=1" />
    <Content
      title="Fun. Modern. Ridiculous."
      title2="And here to guarantee a good time."
      text=" Tired of tacky, under-developed and not-fun photo booths, we came up
      with a better way to administer the fun. Read more on how we
      specialize in delivering interactive photo & video activations across
      the USA."
    />
    <Packages />
    <Location />
    <Experience />
    <Banner title="TRUSTED BY GREAT COMPANIES AND GREAT PEOPLE" />
    <Trusted />
    <Logos />
  </Layout>
);

export default HomePage;
