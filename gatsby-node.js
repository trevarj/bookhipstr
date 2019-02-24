const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const package = path.resolve(`src/templates/package.js`);

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors, "ERROR");
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: package,
        context: {} // additional data can be passed via context
      });
    });
  });
};
