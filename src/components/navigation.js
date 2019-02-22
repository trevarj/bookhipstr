import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import Logo from "./logo";
import { Text, Button } from "../theme/index";
import Burger from "./burger";

const Header = styled.header`
  width: 100%;
  height: 85px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: 500ms;
  box-shadow: ${props => props.active && "0 0 10px rgba(0, 0, 0, 0.1)"};
`;

const Row = styled.div`
  width: 375px;
  margin: ${props => props.margin};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;

const StyledLink = styled(Link)`
  height: 100%;
  width: 145px;
  border-radius: 0;
  color: #fff;
  margin: 1em 0;
  transition: 500ms;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  font-family: "Intro Black", sans-serif;
  background-color: rgba(253, 111, 110, 0.9);
  font-weight: 600;
  outline: none;
  border: 0;
  &:hover {
    background-color: rgba(253, 111, 110, 0.8);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  font-family: "Core Circus", sans-serif;
  @media (max-width: 480px) {
    padding: 0 1em;
  }
`;

const StyledRow = styled(Row)`
  margin: 0 2em 0 0;
  @media (max-width: 920px) {
    margin: 0;
  }
`;

class Navigation extends Component {
  state = {
    active: false
  };

  listenScrollEvent = e => {
    if (window.scrollY > 150) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    const { active } = this.state;
    const mobile =
      typeof window !== "undefined" && window.matchMedia("(max-width: 920px)");

    return (
      <Header active={active}>
        <Link to="/">
          <div style={{ width: 200, margin: "0 0 0 2em" }}>
            <Logo />
          </div>
        </Link>
        {mobile.matches && (
          <div style={{ margin: 0 }}>
            <Burger />
          </div>
        )}
        {!mobile.matches && (
          <StyledRow>
            <a href="https://gallery.bookhipstr.com/browse">
              <Text>Gallery</Text>
            </a>
            <a href="tel:8442665447">
              <Text bold>844.266.5447</Text>
            </a>
            <StyledLink to="book-now">Book Now</StyledLink>
          </StyledRow>
        )}
      </Header>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Navigation;
