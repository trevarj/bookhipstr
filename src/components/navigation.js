import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import Logo from "./logo";
import { Text, Row } from "../theme/index";
import Burger from "./burger";

const Header = styled.header`
  width: 100%;
  height: 85px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: 500ms;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledLink = styled(Link)`
  height: 100%;
  width: 125px;
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
  font-family: "Poppins Bold", sans-serif;
  font-weight: 700;
  background-color: rgba(253, 111, 110, 0.9);
  outline: none;
  border: 0;
  letter-spacing: 1px;
  &:hover {
    background-color: rgba(253, 111, 110, 0.8);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 480px) {
    padding: 0 1em;
  }
`;

const StyledRow = styled(Row)`
  display: flex;
  width: 400px;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  margin: 0 0 0 3em;
  @media (max-width: 920px) {
    margin: 0;
    display: none;
  }
`;

const Div = styled.div`
  margin: 0;
  display: none;
  @media (max-width: 920px) {
    display: block;
  }
`;

class Navigation extends Component {
  // state = {
  //   active: false
  // };

  // listenScrollEvent = e => {
  //   if (window.scrollY > 150) {
  //     this.setState({ active: true });
  //   } else {
  //     this.setState({ active: false });
  //   }
  // };

  // componentDidMount() {
  //   window.addEventListener("scroll", this.listenScrollEvent);
  // }

  render() {
    return (
      <Header>
        <Link to="/">
          <div style={{ width: 200, margin: "0 3em 0 0" }}>
            <Logo />
          </div>
        </Link>

        <Div>
          <Burger />
        </Div>
        <StyledRow>
          <a href="https://gallery.bookhipstr.com/browse">
            <Text nav>Gallery</Text>
          </a>
          <a href="tel:8442665447">
            <Text bold>844.266.5447</Text>
          </a>
          <StyledLink to="/book-now">Book Now</StyledLink>
        </StyledRow>
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
