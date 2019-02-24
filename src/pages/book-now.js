import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Splash from "../components/splash";
import Content from "../components/content";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

function Form() {
  return (
    <Div>
      <iframe
        id="JotFormIFrame-80186446884165"
        onload="window.parent.scrollTo(0,0)"
        allowtransparency="true"
        allowfullscreen="true"
        allow="geolocation; microphone; camera"
        src="https://form.jotform.me/71083496556465"
        frameborder="0"
        style={{
          width: "10px",
          minWidth: "100%",
          height: "100%",
          minHeight: "1900px",
          border: "none"
        }}
        scrolling="no"
      />
    </Div>
  );
}

const BookNow = () => (
  <Layout>
    <SEO
      title="Book Now"
      keywords={[`photobooth`, `newyork`, `events`, `party`]}
    />

    <Content
      title="Fun. Modern. Ridiculous."
      title2="And here to guarantee a good time."
      text=" Tired of tacky, under-developed and not-fun photo booths, we came up
      with a better way to administer the fun. Read more on how we
      specialize in delivering interactive photo & video activations across
      the USA."
    />
    <div
      style={{ margin: "0 auto", display: "flex", justifyContent: "center" }}
    >
      <Form />
    </div>
  </Layout>
);

export default BookNow;
