import React from "react";
import styled from "styled-components";
import { Title } from "../theme/index";

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
      <Title white>{title}</Title>
    </Wrapper>
  );
}
