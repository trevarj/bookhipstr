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
  flex-direction: column;
  align-items: center;
  padding: 3em 0;
  @media (max-width: 780px) {
    height: 100%;
    min-height: 100px;
    padding: 6em 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const StyledRow = styled(Row)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;

const StyledLogoRow = styled(Row)`
  align-items: flex-start;
  margin: 1.5em 0 0 0;
  border-top: 1px solid #fff;
  padding: 1em 0 0 0;
  @media (max-width: 780px) {
    margin: 1em auto;
  }
`;

const Div = styled.div`
  width: 200px;
  @media (max-width: 780px) {
    margin: 1em auto;
  }
`;

const StyledColumn = styled(Column)`
  margin: 0 0 0 5em;
  @media (max-width: 780px) {
    margin: 0 auto;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <StyledRow>
        <StyledColumn>
          <Div>
            <Logo />
          </Div>
          <StyledLogoRow>
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
            >
              <FaFacebookF
                size="2em"
                color="#fff"
                style={{ margin: "0 .5em" }}
              />
            </a>
            <a
              href="https://www.instagram.com/bookhipstr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size="2em"
                color="#fff"
                style={{ margin: "0 .5em" }}
              />
            </a>
            <a
              href="https://twitter.com/bookhipstr?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size="2em" color="#fff" style={{ margin: "0 .5em" }} />
            </a>
          </StyledLogoRow>
        </StyledColumn>
      </StyledRow>
      <Text white>
        &copy; {new Date().getFullYear()} Hipstr Photobooth All rights reserved
      </Text>
    </Wrapper>
  );
}
