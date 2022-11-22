import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 5em;
`;

function Form() {
  if (typeof window !== "undefined") {
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
  else {
    return null;
  }
}

const BookNow = () => (
  <Layout>
    <SEO
      title="Book Now"
      keywords={[`photobooth`, `newyork`, `events`, `party`]}
    />

    <div
      style={{
        margin: "0 auto",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Form />
    </div>
  </Layout>
);

export default BookNow;
