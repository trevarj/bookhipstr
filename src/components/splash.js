import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { Text, NPAtitle } from "../theme/index";

export const NPAtitleH2 = styled.h2`
  font-size: ${props => (props.large ? "26px" : "22px")};
  font-weight: 700;
  font-family: "Poppins Regular", sans-serif;
  line-height: 1.4em;
  margin: ${props => props.margin || "0.5em 0"};
  color: #FFFFFF;
  letter-spacing: 1px;
  @media (max-width: 500px) {
    font-size: 28px;
  }
`;

export const NPAContentParagraph = styled.p`
  font-size: ${props => (props.large ? "26px" : "15px")};
  font-weight: 400;
  font-family: "Poppins Regular",sans-serif;
  line-height: 26px;
  letter-spacing: 1px;
  color: #fff;
  margin: ${props => props.margin || "0.5em 0"};
  @media (max-width: 500px) {
    font-size: 28px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 720px) {
    min-height: 100%;
  }
  &::after {
    background-position: center;
  }
`;

const VideoWrapper = styled.div`
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
`;

const StyledImg = styled(BackgroundImage)`
  height: 800px;
  display: flex;
  margin: 0 auto;
  justify-content: flex-end;
  flex-direction: column;
  &::after {
    background-position: center;
  }
  @media (max-width: 720px) {
    height: 450px;
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
          <StyledImg
            alt={`Hipstr ${title} Package Splash`}
            fluid={src.childImageSharp.fluid}
          >
            <StyledTextColumn>
                <NPAtitle large white>
                  {<span style={{ color: "#ec7673" }}>Hipstr</span>} {title}
                </NPAtitle>
                {window.location.pathname === "/mosaic" && (
                <NPAtitleH2>An Interactive Photo Mosaic Wall Experience</NPAtitleH2>
                )}
                <Text white>{text}</Text>
            {window.location.pathname === "/mosaic" && (
                <NPAContentParagraph>Instantly enhance your next event with a photo mosaic wall rental that's fun for everyone.</NPAContentParagraph>
            )}
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
