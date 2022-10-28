import React from "react";
import styled from "styled-components";
import { Link, graphql, StaticQuery } from "gatsby";
import { NPAtitleH2, Text, Button } from "../theme/index";

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
  width: 85%;
  background: ${props => props.background};
  object-fit: contain;
  background-size: cover;
  background-position: center;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 50px;
  width: 80%;
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
  padding: 2em 1em;
  width: 100%;
  height: 100%;
  background: #fff;
  border: 1.5px solid transparent;
  transition: 1s;
  &:hover {
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  }
`;
let NPAaltText = null
const PackageLink = ({ post }) => {
  switch(post.frontmatter.path){
  case '/mosaic': 
    NPAaltText = 'Hipstr Mosaic Wall Package'
    break;
  case '/hipstr-array-plus': 
    NPAaltText = 'Hipstr Array Plus'
    break;
  case '/one-ridiculous-photo-booth-package': 
    NPAaltText = "Hipstr's One Ridiculous Photo Booth Package"
    break;
  case '/flow-cam-package': 
    NPAaltText = 'Hipstr Flow Cam'
    break;
  case '/videography': 
    NPAaltText = 'Hipstr Videography'
    break;
  case '/photography': 
    NPAaltText = 'Hipstr photography'
    break;
  case '/gif-package': 
    NPAaltText = 'Hipstr Gif Photo Booth'
    break;
  case '/installments': 
    NPAaltText = 'Hipstr Retail Installments'
    break;
  case '/hashtag-printing': 
    NPAaltText = 'Hipstr Hashtag Instant Print'
    break;
  default: 
    break;
}
  return (
    <Link to={post.frontmatter.path}>
      {console.log(post.frontmatter.path)}
      <PackageWrapper>
        <PackageImage
          alt={NPAaltText !== null ? NPAaltText : `Hipstr ${post.title} Package Image`}
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
                key
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Wrapper>
          <NPAtitleH2 large>
            Choose your <span style={{ color: "#ec7673" }}>activation</span>
          </NPAtitleH2>
          <Text style={{ marginBottom: "1em" }}>Click to learn more!</Text>
          <Grid>
            {data.allMarkdownRemark.edges.map(edge => (
              <PackageLink key={edge.node.id} post={edge.node} />
            ))}
          </Grid>
          <div style={{ margin: "3em 0 1em 0" }}>
            <Link to="/book-now">
              {" "}
              <Button>Learn more</Button>
            </Link>
          </div>
        </Wrapper>
      );
    }}
  />
);

export default Packages;
