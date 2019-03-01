import React from "react";
import styled from "styled-components";
import { Column, Text } from "../theme/index";
import Zoom from "react-reveal/Zoom";
import { Link } from "gatsby";

const Wrapper = styled.div`
  min-height: 150px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin: 2em 0;
`;

const StyledColumn = styled(Column)`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 2em 0;
  border-top: 1px solid #ec7673;
  border-bottom: 1px solid #ec7673;
`;

export default function PackageBanner({ title, type }) {
  return (
    <Wrapper>
      <Zoom bottom>
        <StyledColumn>
          <Text>{title}</Text>
        </StyledColumn>
      </Zoom>
    </Wrapper>
  );
}
