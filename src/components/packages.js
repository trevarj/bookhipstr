import React from "react";
import styled from "styled-components";
import { Link, graphql, StaticQuery } from "gatsby";
import { Subtitle, Text, Button } from "../theme/index";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 4em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eaeaea;
  text-align: center;
`;

const PackageImage = styled.img`
  width: 300px;
  height: 300px;
  background: ${props => props.background};
  object-fit: contain;
  background-size: cover;
  background-position: center;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 50px;
  width: 75%;
  margin: 1em auto 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  @media (max-width: 720px) {
    grid-auto-rows: auto;
    width: 85%;
  }
`;

const PackageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5em 1em;
  width: 100%;
  height: 100%;
  background: #fff;
  border: 1.5px solid transparent;
  transition: 1s;
  &:hover {
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  }
`;

const PackageLink = ({ post }) => {
  return (
    <Link to={post.frontmatter.path}>
      <PackageWrapper>
        <PackageImage
          alt={`Hipstr ${post.title} Package Image`}
          src={post.frontmatter.image}
        />
        <div style={{ width: "75%", textAlign: "center", margin: ".75em 0" }}>
          <Text>{post.frontmatter.excerpt1}</Text>
          <Text package>{post.frontmatter.excerpt2}</Text>
        </div>
      </PackageWrapper>
    </Link>
  );
};

const Packages = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                image
                excerpt1
                excerpt2
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Subtitle large>
          Choose your <span style={{ color: "#ec7673" }}>activation</span>
        </Subtitle>
        <Text style={{ marginBottom: "1em" }}>Click to learn more!</Text>
        <Grid>
          {data.allMarkdownRemark.edges.map(edge => (
            <PackageLink key={edge.node.id} post={edge.node} />
          ))}
        </Grid>
        <div style={{ margin: "3em 0 1em 0" }}>
          <Button>Learn more</Button>
        </div>
      </Wrapper>
    )}
  />
);

export default Packages;
