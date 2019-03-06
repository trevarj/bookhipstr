import React from "react";
import styled from "styled-components";
import { Subtitle, Text, Column, Button } from "../theme/index";
import experience1 from "../images/experience1.jpg";
import experience2 from "../images/experience2.jpg";
import experience3 from "../images/experience3.jpg";
import experience4 from "../images/experience4.jpg";
import { Link } from "gatsby";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 3em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eaeaea;
  @media (max-width: 720px) {
    text-align: center;
  }
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  margin: 2em 0;
  border-radius: 4px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  border: 1.5px solid transparent;
  transition: 1s;
  &:hover {
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
  }
`;

const StyledExperience = styled(Column)`
  width: 100%;
  height: 100%;
  align-items: center;
  @media (max-width: 720px) {
    text-align: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 50px;
  width: 80%;
  margin: 1em auto 2em auto;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: auto;
`;

const images = [
  {
    image: experience1,
    title: "Activations",
    description:
      "We’re here to take your brand to greater heights. Short-term, Long-term, Multi-site or International, there’s no limit to how we can increase your brand awareness."
  },
  {
    image: experience2,
    title: "Corporate",
    description:
      "There’s no wrong time to incorporate your brand with some added fun; we’d love to be a part of your next holiday party, gala, expo, or conference."
  },
  {
    image: experience3,
    title: "Installments",
    description:
      "Looking for something a little more permanent? We’d love to take your space to the next level – drop us a line and let’s get dreaming on the newest addition to your space!"
  },
  {
    image: experience4,
    title: "Social",
    description:
      "Weddings, Birthdays, Mitzvahs, Parties, Sweet 16s, Anniversaries, Engagements – you name it, we’ll celebrate it with you! We guarantee a good time, every time."
  }
];

function Experience({ image, title, description }) {
  return (
    <StyledExperience>
      <Image alt="Hipstr Experience Images" src={image} />
      <Column width="85%" alignitems="center">
        <Text uppercase large black>
          {title}
        </Text>
        <Text>{description}</Text>
      </Column>
    </StyledExperience>
  );
}

const Experiences = () => (
  <Wrapper>
    <Subtitle large>
      Choose your <span style={{ color: "#ec7673" }}>experience</span>
    </Subtitle>
    <Grid>
      {images.map((key, index) => (
        <Experience
          key={index}
          image={key.image}
          title={key.title}
          description={key.description}
        />
      ))}
    </Grid>
    <Link to="/book-now">
      <Button>Ready to book</Button>
    </Link>
  </Wrapper>
);

export default Experiences;
