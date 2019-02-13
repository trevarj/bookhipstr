import styled, { css } from "styled-components";

export const Title = styled.h2`
  font-size: 60px;
  font-weight: 600;
  font-family: "Intro Black", sans-serif;
  color: ${props => (props.pink ? "#ec7673" : "#2b2b2b")};
`;

export const Subtitle = styled.h3`
  font-size: 38px;
  font-weight: 700;
  font-family: "Intro Book", sans-serif;
  color: ${props => (props.pink ? "#ec7673" : "#2b2b2b")};
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: "Intro Book", sans-serif;
  color: #2b2b2b;
`;
