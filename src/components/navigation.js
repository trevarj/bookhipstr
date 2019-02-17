import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import Logo from "./logo";
import { Text, Button } from "../theme/index";

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
    return (
      <Header active={active}>
        <Link to="/">
          <div style={{ width: 200, margin: "0 0 0 2em" }}>
            <Logo />
          </div>
        </Link>
        <Row margin="0 2em 0 0">
          <a href="https://gallery.bookhipstr.com/browse">
            <Text>Gallery</Text>
          </a>
          <a href="tel:8442665447">
            <Text bold>844.266.5447</Text>
          </a>
          <Button nav>Contact Us</Button>
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
