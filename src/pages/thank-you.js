import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Content from "../components/content";
import ThankYouWrapper from "../components/thankyouwrapper";

const ThankYou = () => (
  <Layout>
    <SEO
      title="Thank you"
      keywords={[`photobooth`, `newyork`, `events`, `party`]}
    />
    <div style={{ height: "85px" }} />
    <ThankYouWrapper />
  </Layout>
);

export default ThankYou;
