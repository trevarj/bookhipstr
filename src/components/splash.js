import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
// import Logo from "./logo";
// import { Text, Button } from "../theme/index";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 720px) {
    min-height: 100%;
  }
`;

const VideoWrapper = styled.div`
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
`;

const StyledImg = styled(Img)`
  height: 700px;
  @media (max-width: 720px) {
    min-height: 500px;
  }
`;

const Div = styled.div`
  height: 85px;
  @media (max-width: 720px) {
    height: 85px;
  }
`;

export default function Splash({ src, type }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Div />
      {type === "image" && (
        <Wrapper>
          <StyledImg fluid={src.childImageSharp.fluid} />
        </Wrapper>
      )}
      {type !== "image" && (
        <VideoWrapper>
          <iframe
            title={src}
            src={src}
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
        </VideoWrapper>
      )}
    </div>
  );
}
