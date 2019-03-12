import React from "react";
import styled from "styled-components";
import { Column, Text } from "../theme/index";
import Zoom from "react-reveal/Zoom";
import { Link } from "gatsby";

const Wrapper = styled.div`
  min-height: 150px;
  height: 100%;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin: 2em auto;
  border-top: 1px solid #ec7673;
  border-bottom: 1px solid #ec7673;
`;

const StyledColumn = styled(Column)`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 2em 0;
`;

export default function PackageBanner({ title }) {
  return (
    <Wrapper>
      <Zoom bottom>
        <StyledColumn>
          <Text italic>{title}</Text>
          <Text italic>
            We guarantee a good time,{" "}
            <span style={{ color: "#ec7673" }}>every time</span>
          </Text>
        </StyledColumn>
      </Zoom>
    </Wrapper>
  );
}
