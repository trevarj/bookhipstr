import React from "react";
import styled from "styled-components";
import { Title, Column, Button } from "../theme/index";
import Reveal from "react-reveal/Reveal";
import { Link } from "gatsby";

const Wrapper = styled.div`
  min-height: 150px;
  height: 100%;
  padding: 1em 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.background};
`;

const StyledColumn = styled(Column)`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

export default function Banner({ title, type }) {
  return (
    <Wrapper background={type === "bottomCta" ? "#fff" : "#000"}>
      <Reveal effect="fadeIn">
        <StyledColumn>
          <Title white>{title}</Title>
        </StyledColumn>
      </Reveal>
      {type === "bottomCta" && (
        <Link to="/book-now">
          <Button>Get in touch</Button>
        </Link>
      )}
    </Wrapper>
  );
}
