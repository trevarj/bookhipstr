import React from "react";
import styled from "styled-components";
import { Link, graphql, StaticQuery } from "gatsby";
import { Subtitle } from "../theme/index";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PackageBox = styled.div`
  width: 100%;
  height: 100%;
  border: 1.5px solid transparent;
  background: ${props => props.background};
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
  grid-gap: 50px;
  width: 80%;
  margin: 1em auto 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 400px;
`;

const PackageLink = ({ post }) => {
  console.log(post);

  return (
    <Link to={post.frontmatter.path}>
      <PackageBox background={`url('${post.frontmatter.image}')`} />
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
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Subtitle>Packages</Subtitle>
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
