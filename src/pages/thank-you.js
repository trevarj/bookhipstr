import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Splash from "../components/splash";
import Content from "../components/content";

const ThankYou = () => (
  <Layout>
    <SEO
      title="Thank you"
      keywords={[`photobooth`, `newyork`, `events`, `party`]}
    />

    <Content
      title="Thank"
      title2="You!"
      text="Your inquiry has been received; we’ll be in touch soon! Make sure to add info@bookhipstr.com as a contact so we don’t end up in your Spam Folder! If you haven’t heard from us within 24 hours, something may have gone terribly wrong. Check your Spam Folder or give us a call!"
    />
  </Layout>
);

export default ThankYou;
