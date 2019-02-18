import React from "react";
import { Text, Subtitle, Column } from "../theme/index";
import styled from "styled-components";

const ContentDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5em 0;
  @media (max-width: 720px) {
    padding: 3em 0;
    margin: 0 auto;
  }
`;

const StyledColumn = styled(Column)`
  width: 50%;
  @media (max-width: 720px) {
    width: 95%;
    margin: 0 auto;
  }
`;

const Content = () => (
  <ContentDiv>
    <StyledColumn>
      <Subtitle>
        Fun. Modern. Ridiculous.{" "}
        <span style={{ color: "#ec7673" }}>
          And here to guarantee a good time.
        </span>
      </Subtitle>
      <Text>
        Tired of tacky, under-developed and not-fun photo booths, we came up
        with a better way to administer the fun. Read more on how we specialize
        in delivering interactive photo & video activations across the USA.
      </Text>
    </StyledColumn>
  </ContentDiv>
);

export default Content;
