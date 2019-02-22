import React from "react";
import styled from "styled-components";
import { Link, graphql, StaticQuery } from "gatsby";
import { Subtitle, Text } from "../theme/index";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0 2em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PackageBox = styled.div`
  width: 300px;
  height: 300px;
  border: 1.5px solid transparent;
  background: ${props => props.background};
  object-fit: contain;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  filter: grayscale(75%);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  transition: 1s;
  &:hover {
    filter: grayscale(0%);
    border: 1.5px solid rgba(253, 111, 110, 0.9);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 25px 50px;
  width: 75%;
  margin: 1em auto 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 400px;
  @media (max-width: 720px) {
    grid-auto-rows: auto;
    width: 100%;
  }
`;

const PackageLink = ({ post }) => {
  return (
    <Link to={post.frontmatter.path}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: ".5em auto"
        }}
      >
        <PackageBox background={`url('${post.frontmatter.image}')`} />
        <div style={{ width: "75%", textAlign: "center", margin: ".75em 0" }}>
          <Text>{post.frontmatter.excerpt}</Text>
        </div>
      </div>
    </Link>
  );
};

const Packages = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                image
                excerpt
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Subtitle>Choose your package</Subtitle>
        <Grid>
          {data.allMarkdownRemark.edges.map(edge => (
            <PackageLink key={edge.node.id} post={edge.node} />
          ))}
        </Grid>
      </Wrapper>
    )}
  />
);

export default Packages;
