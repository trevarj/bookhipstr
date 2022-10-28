import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../images/hipstr.png";
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
  @media (max-width: 920px) {
    margin: 0 auto;
  }
`;

const StyledLink = styled(Link)`
  height: 100%;
  width: 121px;
  border-radius: 0;
  color: #fff;
  margin: 1em 0 1em 1.75em;
  transition: 500ms;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  font-family: "Poppins Bold", sans-serif;
  font-weight: 600;
  outline: none;
  border: 0;
  background: #f16c6d;
  font-family: "Core Circus", sans-serif;
  &:hover {
    background-color: #e35b5c;
  }
`;

const StyledRow = styled(Row)`
  display: flex;
  align-items: center;
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

const Image = styled.img`
  margin: 0 3em 0 0;
  width: 200px;
  @media (max-width: 500px) {
    width: 150px;
    margin: 0;
  }
`;

class Navigation extends Component {
  render() {
    return (
      <Header>
        <Row
          alignitems="center"
          justifycontent="space-between"
          style={{ width: "80%", height: "100%" }}
        >
          <Link to="/">
            <Image src={Logo} alt="Hipstr Photo Booth | Nationwide Photo and Video Activations" />
          </Link>
          <Div>
            <Burger />
          </Div>
          <StyledRow>
            <a href="https://gallery.bookhipstr.com">
              <Text nav>Gallery</Text>
            </a>
            <a href="tel:8442665447">
              <Text bold>844.266.5447</Text>
            </a>
            <StyledLink to="/book-now">Book Now</StyledLink>
          </StyledRow>
        </Row>
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
