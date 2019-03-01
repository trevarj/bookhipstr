import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
// import Logo from "./logo";
import { Text, Subtitle } from "../theme/index";

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

const StyledImg = styled(BackgroundImage)`
  height: 700px;
  display: flex;
  margin: 0 auto;
  justify-content: flex-end;
  flex-direction: column;
  @media (max-width: 720px) {
    min-height: 500px;
    justify-content: center;
  }
`;

const Div = styled.div`
  height: 85px;
`;

const StyledTextColumn = styled.div`
  width: 35%;
  margin: 0 0 10em 5em;
  @media (max-width: 720px) {
    width: 75%;
    margin: 0 auto;
    text-align: center;
  }
`;

export default function Splash({ src, type, title, text }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Div />
      {type === "image" && (
        <Wrapper>
          <StyledImg fluid={src.childImageSharp.fluid}>
            <StyledTextColumn>
              <Subtitle pink large>
                {title}
              </Subtitle>
              <Text white>{text}</Text>
            </StyledTextColumn>
          </StyledImg>
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
