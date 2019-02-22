import React from "react";
import { Text, Subtitle, Column } from "../theme/index";
import styled from "styled-components";
import Slide from "react-reveal/Slide";

const ContentDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5em 0;
  @media (max-width: 720px) {
    padding: 3em 0;
    margin: 0 auto;
    text-align: center;
  }
`;

const StyledColumn = styled(Column)`
  width: 50%;
  text-align: ${props => props.textalign};
  @media (max-width: 720px) {
    width: 95%;
    margin: 0 auto;
  }
`;

const Content = ({ title, title2, text, type }) => (
  <ContentDiv>
    <StyledColumn textalign={type === "package" && "center"}>
      <Slide bottom>
        <Subtitle>
          {title} <span style={{ color: "#ec7673" }}>{title2}</span>
        </Subtitle>
        <Text>{text}</Text>
      </Slide>
    </StyledColumn>
  </ContentDiv>
);

export default Content;
