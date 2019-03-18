import React from "react";
import styled from "styled-components";
import { Text, Subtitle, Button } from "../theme/index";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background: #303133;
  @media (max-width: 720px) {
    height: 100%;
  }
`;

const VideoWrapper = styled.div`
  width: 70vw;
  position: relative;
  display: flex;
  margin-top: 14em;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  transition: 750ms;
  @media (max-width: 780px) {
    width: 100%;
    align-items: center;
    margin: 10em 0 0 0;
    height: 100%;
  }
  @media (max-width: 500px) {
    margin: 7em 0 0 0;
  }
`;

const Div = styled.div`
  height: 125px;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  height: 100%;
  width: 75%;
  text-align: center;
  @media (max-width: 720px) {
    width: 95%;
    margin: 0 auto;
    text-align: center;
  }
`;

const IframeMobile = styled.iframe`
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`;

const IframeDesktop = styled.iframe`
  @media (max-width: 500px) {
    display: none;
  }
`;

export default function OneSplash() {
  return (
    <Wrapper>
      <Div />
      <StyledColumn>
        <Subtitle one>
          The One <span style={{ color: "#ec7673" }}>Ridiculous</span> Photo
          Booth Package
        </Subtitle>
        <Text one>
          Our all-inclusive package will be a guaranteed good time for your next
          event.
        </Text>
        <Button>Learn more</Button>

        <VideoWrapper>
          <IframeDesktop
            title="One"
            src="https://player.vimeo.com/video/262031484?autoplay=1&title=0&byline=0&portrait=0"
            width="640"
            height="320"
            style={{
              border: 0,
              maxWidth: "97%",
              left: 0,
              right: 0,
              margin: "auto",
              top: "50%",
              transform: "translateY(-50%)"
            }}
          />
          <IframeMobile
            title="One"
            src="https://player.vimeo.com/video/262031484?autoplay=1&title=0&byline=0&portrait=0"
            width="640"
            style={{
              border: 0,
              maxWidth: "97%",
              left: 0,
              right: 0,
              margin: "auto",
              top: "50%",
              transform: "translateY(-50%)"
            }}
          />
        </VideoWrapper>
      </StyledColumn>
    </Wrapper>
  );
}
