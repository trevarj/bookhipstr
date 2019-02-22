import React from "react";
import Popup from "reactjs-popup";
import { Link } from "gatsby";
import styled from "styled-components";

function BurgerIcon({ open, ...props }) {
  return (
    <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
      <div className="bar1" key="b1" />
      <div className="bar2" key="b2" />
      <div className="bar3" key="b3" />
    </div>
  );
}

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
`;

const StyledLi = styled.li`
  margin: 1.5em 0;
  font-size: 1.4em;
  font-family: "Intro Book", sans-serif;
  list-style: none;
`;

function BurgerMenu({ close }) {
  return (
    <div className="menu">
      <StyledUl>
        <Link to="/">
          <StyledLi onClick={close}>Home</StyledLi>
        </Link>
        <a href="https://gallery.bookhipstr.com/browse">
          <StyledLi onClick={close}>Gallery</StyledLi>
        </a>
        <Link to="/about">
          <StyledLi onClick={close}>Contact</StyledLi>
        </Link>
      </StyledUl>
    </div>
  );
}

const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "100%",
  border: "none"
};

export default function Burger() {
  return (
    <div>
      <Popup
        modal
        overlayStyle={{ background: "rgba(255,255,255,0.98" }}
        contentStyle={contentStyle}
        closeOnDocumentClick={false}
        trigger={open => <BurgerIcon open={open} />}
      >
        {close => <BurgerMenu close={close} />}
      </Popup>
    </div>
  );
}
