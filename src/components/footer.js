import React from "react";
import styled from "styled-components";
import { Row, Text } from "../theme/index";
import Logo from "./logowhite";

const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  background: #2b2b2b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3em 0;
  @media (max-width: 780px) {
    height: 100%;
    min-height: 100px;
    padding: 6em 0;
  }
`;

const StyledRow = styled(Row)`
  align-items: center;
  justify-content: space-between;
  margin: ${props => props.copy && "0 0 0 3em"};
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;

const Icon = styled.i`
  font-size: 2em;
  margin-right: 0.75em;
  color: #fff;
  @media (max-width: 780px) {
    margin: 0 0.5em;
    font-size: 1.5em;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <div style={{ width: 200, margin: "0 0 1em 3em" }}>
        <Logo />
      </div>
      <StyledRow>
        <Row alignitems="center">
          <a
            href="https://www.linkedin.com/showcase/creative114/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="fab fa-linkedin-in" />
          </a>
          <a
            href="https://www.facebook.com/114brands"
            target="_blank"
            rel="noopener noreferrer"
          />

          <a
            href="https://www.instagram.com/candigitalgroup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="fab fa-instagram" />
          </a>
          <a
            href="https://vimeo.com/channels/1439000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="fab fa-vimeo-v" />
          </a>
        </Row>
      </StyledRow>
      <StyledRow copy>
        <Text white>
          &copy; {new Date().getFullYear()} Hipstr | Made with &hearts; in New
          York City
        </Text>
      </StyledRow>
    </Wrapper>
  );
}
