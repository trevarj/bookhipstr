import React from "react";
import styled from "styled-components";
import { NPAtitleH2 } from "../theme/index";
import Zoom from "react-reveal/Zoom";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin: 2em auto 1em auto;
  padding-top: 2em;
  border-top: 1px solid #ec7673;
`;

export default function NPAcontentHead2({ npacontent }) {
  return (
    <Wrapper>
      <Zoom bottom>
          <NPAtitleH2>{npacontent}</NPAtitleH2>
      </Zoom>
    </Wrapper>
  );
}
