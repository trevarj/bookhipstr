import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import Logo from "./logo";
import { Text, Button } from "../theme/index";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #2b2b2b;
`;

export default function Splash() {
  return <Wrapper />;
}
