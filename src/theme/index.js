import styled, { css } from "styled-components";

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 600;
  margin: 0;
  font-family: "Intro Black", sans-serif;
  color: ${props => (props.pink ? "#ec7673" : "#2b2b2b")};
  ${props =>
    props.white &&
    css`
      color: #fff;
    `}
`;

export const Subtitle = styled.h3`
  font-size: 38px;
  font-weight: 700;
  font-family: "Intro Black", sans-serif;
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
    props.bold &&
    css`
      color: #375279;
      font-weight: 800;
    `};
  ${props =>
    props.large &&
    css`
      color: ${props => (props.blue ? "#375279" : "rgba(253, 111, 110, 0.9)")};
      font-weight: 800;
      font-size: 26px;
      font-family: "Intro Black", sans-serif;
    `};
`;

export const Row = styled.div`
  display: flex;
  align-items: ${props => props.alignitems};
  justify-content: ${props => props.justifycontent};
  width: ${props => props.width};
  margin: ${props => props.margin};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignitems};
  justify-content: ${props => props.justifycontent};
  width: ${props => props.width};
  margin: ${props => props.margin};
`;

export const Button = styled.button`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  border-radius: 4px;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  font-family: "Intro Black", sans-serif;
  font-weight: 600;
  outline: none;
  border: 0;
  background-color: rgba(253, 111, 110, 0.9);
  height: 55px;
  width: 246px;
  color: #fff;
  margin: 0.5em 0;
  transition: 500ms;
  &:hover {
    background-color: rgba(253, 111, 110, 0.8);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  ${props =>
    props.nav &&
    css`
      height: 100%;
      width: 145px;
      border-radius: 0;
      font-family: "Core Circus", sans-serif;
      @media (max-width: 480px) {
        padding: 0 1em;
      }
    `}
`;
