import React from "react";
import styled from "styled-components";
// import Logo from "./logo";
// import { Text, Button } from "../theme/index";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 56.75%;
`;

export default function Splash({ src }) {
  return (
    <Wrapper>
      <iframe
        title="Stop Being Average"
        src={src}
        width="100%"
        height="100%"
        allowFullScreen
        style={{
          border: 0,
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0
        }}
      />
    </Wrapper>
  );
}
