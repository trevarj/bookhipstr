import React from "react";
import styled from "styled-components";
import { Title } from "../theme/index";
import Zoom from "react-reveal/Zoom";

const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #375279;
`;

export default function Banner({ title }) {
  return (
    <Wrapper>
      <Zoom bottom>
        <Title white>{title}</Title>
      </Zoom>
    </Wrapper>
  );
}
