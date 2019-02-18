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

const HomePage = () => (
  <Layout>
    <SEO title="Home" keywords={[`photobooth`, `newyork`, `events`, `party`]} />
    <Splash />
    <Content />
    <Packages />
    <Location />
    <Experience />
    <Banner title="TRUSTED BY GREAT COMPANIES AND GREAT PEOPLE" />
    <Logos />
  </Layout>
);

export default HomePage;
