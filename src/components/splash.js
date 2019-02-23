import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
// import Logo from "./logo";
// import { Text, Button } from "../theme/index";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${props => props.background};
  @media (max-width: 720px) {
    padding-bottom: 100%;
  }
`;

const StyledImg = styled(Img)`
  max-height: 900px;
`;

export default function Splash({ src, type }) {
  console.log(src);

  return (
    <Wrapper>
      {type === "image" && <StyledImg fluid={src.childImageSharp.fluid} />}
      {type !== "image" && (
        <iframe
          title="{src}"
          src={src}
          width="100%"
          height="100%"
          allowFullScreen
          style={{
            border: 0,
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0
          }}
        />
      )}
    </Wrapper>
  );
}
