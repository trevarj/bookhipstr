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
  line-height: 1.4em;
  color: ${props => (props.pink ? "#ec7673" : "#2b2b2b")};
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: "Intro Book", sans-serif;
  color: ${props => (props.white ? "#fff" : "#2b2b2b")};
  margin: 0;
  line-height: 2em;
  ${props =>
    props.phone &&
    css`
      color: #375279;
      font-weight: 800;
    `};
`;

export const Row = styled.div`
  display: flex;
  align-items: ${props => props.alignitems};
  justify-content: ${props => props.justifycontent};
  width: ${props => props.width};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignitems};
  justify-content: ${props => props.justifycontent};
  width: ${props => props.width};
`;

export const Button = styled.button`
  background-color: rgba(253, 111, 110, 0.9);
  height: 100%;
  font-family: "Core Circus", sans-serif;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-family: "Intro Black", sans-serif;
  font-weight: 600;
  outline: none;
  border: 0;
  @media (max-width: 480px) {
    padding: 0 1em;
  }
`;
