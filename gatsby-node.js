import { resolve } from 'path';

// const path = require('path');
// const data = require('./src/data/oxalate.json');

// exports.createPages = ({ actions }) => {
//   const { createPage } = actions;
//   const template = path.resolve('./src/templates/group.js');
//   data.forEach((group_object) => {
//     const path = `food-groups/${group_object.slug}`;
//     createPage({
//       path,
//       component: template,
//       context: group_object,
//     });
//   });
// };

async function groupsIntoPages({ graphql, actions }) {
  // query all
  const { data } = await graphql(`
    query {
      groups: allOxalateJson {
        nodes {
          food
          id
          group
          oxalate
          slug
        }
      }
    }
  `);
  data.groups.nodes.forEach((group) => {
    actions.createPage({
      component: resolve('./src/templates/Group.js'),
      path: `/food-groups/${group.slug}`,
      context: {
        name: group.group,
        slug: group.slug,
      },
    });
  });
}

async function ratingsIntoPages({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      ratings: allOxalateJson {
        nodes {
          food
          id
          group
          oxalate
          rating
        }
      }
    }
  `);
  data.ratings.nodes.forEach((rating) => {
    actions.createPage({
      component: resolve('./src/templates/Rating.js'),
      path: `/food-ratings/${rating.rating}`.replace(/\s+/g, '-').toLowerCase(),
      context: {
        name: rating.rating,
        slug: rating.rating,
      },
    });
  });
}

// use Gatsby createPages API
export async function createPages(params) {
  await Promise.all([
    await groupsIntoPages(params),
    await ratingsIntoPages(params),
  ]);
}
