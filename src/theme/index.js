import styled, { css } from "styled-components";

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 600;
  margin: 0;
  font-family: "Poppins Bold", sans-serif;
  color: ${props => (props.pink ? "#ec7673" : "#2b2b2b")};

  ${props =>
    props.white &&
    css`
      color: #fff;
      font-size: 28px;
      line-height: 2em;
      @media (max-width: 500px) {
        font-size: 22px;
      }
    `}
`;

export const Subtitle = styled.h3`
  font-size: ${props => (props.large ? "32px" : "26px")};
  font-weight: 700;
  font-family: "Poppins Bold", sans-serif;
  line-height: 1.4em;
  margin: ${props => props.margin || "0.5em 0"};
  text-transform: ${props => props.transform || "uppercase"};
  color: ${props =>
    props.pink ? "#ec7673" : props.white ? "#fff" : "#2b2b2b"};
  ${props =>
    props.testimonial &&
    css`
      font-size: 29px;
      color: #fff;
      line-height: 51px;
    `};
  @media (max-width: 500px) {
    font-size: 28px;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 400;
  font-family: "Poppins Regular", sans-serif;
  color: ${props => (props.white ? "#fff" : "#000")};
  margin: 0;
  line-height: 26px;
  letter-spacing: 1px;
  ${props =>
    props.bold &&
    css`
      color: #375279;
      font-weight: 800;
      font-family: "Poppins Bold", sans-serif;
    `};
  ${props =>
    props.large &&
    css`
      color: ${props =>
        props.blue
          ? "#375279"
          : props.black
          ? "#000"
          : "rgba(253, 111, 110, 0.9)"};
      font-weight: 700;
      font-size: ${props => (props.location ? "24px" : "32px")};
      text-transform: ${props => props.uppercase && "uppercase"};
      line-height: 32px;
      margin: ${props => props.margin || "0.75em 0"};
      font-family: " Poppins Bold", sans-serif;
      @media (max-width: 500px) {
        font-size: 22px;
      }
    `};
  ${props =>
    props.nav &&
    css`
      text-transform: uppercase;
      font-weight: 400;
      font-family: "Poppins Regular", sans-serif;
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
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  font-family: "Poppins Regular", sans-serif;
  font-weight: 600;
  outline: none;
  border: 0;
  background-color: rgba(253, 111, 110, 0.9);
  height: 47px;
  width: 220px;
  color: #fff;
  margin: 1em 0;
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
