import React from "react";
import styled from "styled-components";
import { Title, Column } from "../theme/index";
import Zoom from "react-reveal/Zoom";

const Wrapper = styled.div`
  min-height: 200px;
  height: 100%;
  padding: 1em 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #375279;
`;

const StyledColumn = styled(Column)`
  width: 75%;
  margin: 0 auto;
  text-align: center;
`;

export default function Banner({ title }) {
  return (
    <Wrapper>
      <Zoom bottom>
        <StyledColumn>
          <Title white>{title}</Title>
        </StyledColumn>
      </Zoom>
    </Wrapper>
  );
}
