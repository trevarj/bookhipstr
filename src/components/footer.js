import React from "react";
import styled from "styled-components";
import { Row, Text, Column } from "../theme/index";
import Logo from "./logowhite";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn
} from "react-icons/fa";

const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  background: #2b2b2b;
  display: flex;
  justify-content: space-between;
  padding: 3em 0;
  @media (max-width: 780px) {
    height: 100%;
    min-height: 100px;
    padding: 6em 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const StyledLogoRow = styled(Row)`
  margin: 0 2em 0 0;
  align-items: center;
  @media (max-width: 780px) {
    margin: 1em auto;
  }
`;

const Div = styled.div`
  width: 200px;
  margin: 0 0 1em 3em;
  @media (max-width: 780px) {
    margin: 1em auto;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Column>
        <Div>
          <Logo />
        </Div>
        <StyledRow copy>
          <Text white>
            &copy; {new Date().getFullYear()} Hipstr | Made with &hearts; in New
            York City
          </Text>
        </StyledRow>
      </Column>
      <StyledRow>
        <StyledLogoRow alignitems="center" margin="0 2em 0 0">
          <a
            href="https://www.linkedin.com/company/hipstr-photo-booth/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn
              size="2em"
              color="#fff"
              style={{ margin: "0 .5em" }}
            />
          </a>
          <a
            href="https://www.facebook.com/hipstrphotobooth/"
            target="_blank"
            rel="noopener noreferrer"
          />
          <FaFacebookF size="2em" color="#fff" style={{ margin: "0 .5em" }} />
          <a
            href="https://www.instagram.com/bookhipstr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size="2em" color="#fff" style={{ margin: "0 .5em" }} />
          </a>
          <a
            href="https://twitter.com/bookhipstr?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size="2em" color="#fff" style={{ margin: "0 .5em" }} />
          </a>
        </StyledLogoRow>
      </StyledRow>
    </Wrapper>
  );
}
