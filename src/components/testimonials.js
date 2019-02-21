import React, { Component } from "react";
import styled from "styled-components";
import { Title } from "../theme/index";

const Wrapper = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #375279;
`;

export default class Testimonial extends Component {
  state = {
    testimonial: null
  };

  changeTestimonial() {
    let arr = ["Test", "Test2"];
    let arrayLength = arr.length;
    setInterval(() => {
      for (let i = 0; i < arrayLength; i++) {
        this.setState({ testimonial: arr[i] });
      }
    }, 1000);
    return this.state.testimonial;
  }

  render() {
    return (
      <Wrapper>
        <Title>{this.changeTestimonial()}</Title>
      </Wrapper>
    );
  }
}
