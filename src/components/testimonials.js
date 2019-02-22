import React, { Component } from "react";
import styled from "styled-components";
import { Title, Column, Text, Button } from "../theme/index";
import Zoom from "react-reveal/Zoom";
import { FaRegStar } from "react-icons/fa";

const Wrapper = styled.div`
  min-height: 400px;
  height: 100%;
  padding: 2em 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#fff, #f7f7f7 85%);
`;

const StyledColumn = styled(Column)`
  width: 75%;
  margin: 0 auto;
  text-align: center;
  align-items: center;
`;

export default class Testimonial extends Component {
  state = {
    testimonial:
      "The photos are amazing quality and the props are the BEST in the industry. These guys were working literally all night long and they were still smiling and personable as they were packing up."
  };

  componentDidMount() {
    this.changeTestimonial();
  }

  changeTestimonial() {
    let arr = [
      "The photos are amazing quality and the props are the BEST in the industry. These guys were working literally all night long and they were still smiling and personable as they were packing up.",
      "I highly recommend Hipstr...they even created this insanely awesome book for me with all my guests photos. I have probably looked at it 3000 times!!!",
      "Our guests couldn't stop raving about them even after 2 months have passed since our wedding day",
      "The photos look INCREDIBLE and the props made it so fun. It was such a huge hit at the party that even my 92-year-old great-uncle got in on the action!"
    ];
    let i = 0;
    setInterval(() => {
      if (i < arr.length) {
        this.setState({ testimonial: arr[i] }, () => {
          i++;
        });
      }
      if (i === arr.length) {
        i = 0;
      }
    }, 5000);
  }

  render() {
    const { testimonial } = this.state;
    return (
      <Wrapper>
        <Zoom bottom>
          <StyledColumn>
            <FaRegStar
              size="3em"
              color="#375279"
              style={{ margin: " 0 0 1.5em 0" }}
            />
            <Text large blue>
              {testimonial}
            </Text>
            <Button>Book now</Button>
          </StyledColumn>
        </Zoom>
      </Wrapper>
    );
  }
}
