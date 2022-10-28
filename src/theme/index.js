import styled, { css } from "styled-components";

export const NPAtitle = styled.h1`
  font-size: ${props => (props.large ? "32px" : "26px")};
  font-weight: 700;
  font-family: "Poppins Bold", sans-serif;
  line-height: 1.4em;
  margin: ${props => props.margin || "0.5em 0"};
  text-transform: ${props => props.transform || "uppercase"};
  color: ${props => (props.pink ? "#ec7673" : props.white ? "#fff" : "#000")};
  ${props =>
    props.testimonial &&
    css`
      font-size: 29px;
      color: #fff;
      line-height: 51px;
    `};
  ${props =>
    props.banner &&
    css`
      font-size: 24px;
      color: #fff;
      line-height: 42px;
      font-weight: 400;
      text-transform: none;
      font-family: "Poppins Regular", sans-serif;
    `};
  ${props =>
    props.one &&
    css`
      font-size: 48px;
      color: #fff;
      line-height: 42px;
      font-weight: 600;
      text-transform: none;
      font-family: "Poppins Regular", sans-serif;
    `};
  @media (max-width: 500px) {
    font-size: 28px;
  }
`;

export const NPAtitleH2 = styled.h2`
  font-size: ${props => (props.large ? "32px" : "26px")};
  font-weight: 700;
  font-family: "Poppins Bold", sans-serif;
  line-height: 1.4em;
  margin: ${props => props.margin || "0.5em 0"};
  text-transform: ${props => props.transform || "uppercase"};
  color: ${props => (props.pink ? "#ec7673" : props.white ? "#fff" : "#000")};
  ${props =>
    props.testimonial &&
    css`
      font-size: 29px;
      color: #fff;
      line-height: 51px;
    `};
  ${props =>
    props.banner &&
    css`
      font-size: 24px;
      color: #fff;
      line-height: 42px;
      font-weight: 400;
      text-transform: none;
      font-family: "Poppins Regular", sans-serif;
    `};
  ${props =>
    props.one &&
    css`
      font-size: 48px;
      color: #fff;
      line-height: 42px;
      font-weight: 600;
      text-transform: none;
      font-family: "Poppins Regular", sans-serif;
    `};
  @media (max-width: 500px) {
    font-size: 28px;
  }
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 600;
  margin: ${props => props.margin || "0"};
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
  color: ${props => (props.pink ? "#ec7673" : props.white ? "#fff" : "#000")};
  ${props =>
    props.testimonial &&
    css`
      font-size: 29px;
      color: #fff;
      line-height: 51px;
    `};
  ${props =>
    props.banner &&
    css`
      font-size: 24px;
      color: #fff;
      line-height: 42px;
      font-weight: 400;
      text-transform: none;
      font-family: "Poppins Regular", sans-serif;
    `};
  ${props =>
    props.one &&
    css`
      font-size: 48px;
      color: #fff;
      line-height: 42px;
      font-weight: 600;
      text-transform: none;
      font-family: "Poppins Regular", sans-serif;
    `};
  @media (max-width: 500px) {
    font-size: 28px;
  }
`;

export const NPAparagraph = styled.p`
  font-size: ${props => (props.large ? "32px" : "26px")};
  font-weight: 700;
  font-family: "Poppins Bold", sans-serif;
  line-height: 1.4em;
  margin: ${props => props.margin || "0.5em 0"};
  text-transform: ${props => props.transform || "uppercase"};
  color: ${props => (props.pink ? "#ec7673" : props.white ? "#fff" : "#000")};
  ${props =>
    props.testimonial &&
    css`
      font-size: 29px;
      color: #fff;
      line-height: 51px;
    `};
  ${props =>
    props.banner &&
    css`
      font-size: 24px;
      color: #fff;
      line-height: 42px;
      font-weight: 400;
      text-transform: none;
      font-family: "Poppins Regular", sans-serif;
    `};
  ${props =>
    props.one &&
    css`
      font-size: 48px;
      color: #fff;
      line-height: 42px;
      font-weight: 600;
      text-transform: none;
      font-family: "Poppins Regular", sans-serif;
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
    props.one &&
    css`
      font-size: 24px;
      color: #fff;
      line-height: 42px;
      font-weight: 600;
      text-transform: none;
      font-family: "Poppins Regular", sans-serif;
    `};
  ${props =>
    props.bold &&
    css`
      color: #375279;
      font-weight: 800;
      font-family: "Poppins Bold", sans-serif;
    `};
  ${props =>
    props.italic &&
    css`
      font-style: italic;
      line-height: 38px;
      font-size: 16px;
    `};
  ${props =>
    props.package &&
    css`
      font-weight: 800;
      font-family: "Poppins Bold", sans-serif;
      margin-top: 0.75em;
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
      font-family: "Poppins Bold", sans-serif;
      @media (max-width: 500px) {
        font-size: 22px;
      }
    `};
  ${props =>
    props.nav &&
    css`
      margin: 0 1.75em;
      text-transform: uppercase;
      font-weight: 400;
      font-family: "Poppins Regular", sans-serif;
    `};
  ${props =>
    props.thankyou &&
    css`
      line-height: 54px;
      font-size: 24px;
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
  background-color: #f16c6d;
  height: 47px;
  width: 220px;
  color: #fff;
  margin: 1em 0;
  transition: 250ms;
  border: 0.5px solid transparent;
  &:hover {
    background-color: rgba(0, 0, 0, 0);
    border: 0.5px solid #f16c6d;
    color: #f16c6d;
  }
`;
