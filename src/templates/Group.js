/* eslint-disable no-nested-ternary */
import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import InteriorLayout from '../components/InteriorLayout';
import Header from '../components/Header';

export default function GroupFoodPage({ data }) {
  return (
    <InteriorLayout>
      <SEO title={`${data.foods.nodes[0].group} - Food Groups`} />
      <Header />
      <section className="grid grid-cols-1 gap-1 m-12 mx-auto w-full px-4 sm:w-3/4">
        <h1>Food Groups - {data.foods.nodes[0].group}</h1>

        <p className="text-center mt-6">
          The following{' '}
          <span className="bg-yellow-200 p-1">
            <strong>{data.foods.totalCount}</strong>
          </span>{' '}
          results are sorted top to bottom by <em>highest</em> amount of calcium
          oxalate in milligrams.
        </p>
        {
          // TODO: using graphql aliases or if/thens, create div columns for each rating to display data. OR consider a button to do a route change to display data for each rating
        }
        {
          // TODO: maybe do an on-page filter here
        }
        {data.foods.nodes.map((food) => (
          // <li key={food.id}>
          //   <p>{food.group}</p>
          //   {food.food} - {food.group} -{' '}
          //   {food.oxalate > 0 ? (
          //     <span>{food.oxalate}mg</span>
          //   ) : (
          //     <span>None</span>
          //   )}{' '}
          //   -{' '}
          //   {food.rating === 'Moderate' ? (
          //     <span className="color-red">{food.rating}</span>
          //   ) : (
          //     <span>{food.rating}</span>
          //   )}
          // </li>
          // TODO: could probably make this a component since it is repeated in two files
          <div
            key={food.id}
            className={
              food.rating === 'Very High'
                ? 'card___food_red h-36 border-2 border-navy-secondary mx-auto p-5 w-full h-auto mt-12 sm:w-2/4'
                : food.rating === 'High'
                ? 'card___food_redRock h-36 border-2 border-navy-secondary mx-auto p-5 w-full h-auto mt-12 sm:w-2/4'
                : food.rating === 'Moderate'
                ? 'card___food_orange h-36 border-2 border-navy-secondary mx-auto p-5 w-full h-auto mt-12 sm:w-2/4'
                : food.rating === 'Low'
                ? 'card___food_yellow h-36 border-2 border-navy-secondary mx-auto p-5 w-full h-auto mt-12 sm:w-2/4'
                : food.rating === 'Very Low'
                ? 'card___food_green h-36 border-2 border-navy-secondary mx-auto p-5 w-full h-auto mt-12 sm:w-2/4'
                : food.rating === 'Little or None'
                ? 'card___food_blue h-36 border-2 border-navy-secondary mx-auto p-5 w-full h-auto mt-12 sm:w-2/4'
                : ''
            }
          >
            <table>
              <tr className="border-b border-gray-accent">
                <td className="text-xl font-ibmplexmono text-navy-secondary uppercase pb-1 pr-4">
                  Food
                </td>
                <td className="text-xl border-l border-gray-accent font-ibmplexmono text-teal-primary pb-1 pl-2 w-full">
                  {food.food}
                </td>
              </tr>
              <tr className="border-b border-gray-accent">
                <td className="text-xl font-ibmplexmono text-navy-secondary uppercase pt-1 pb-1 pr-4">
                  Group
                </td>
                <td className="text-xl border-l border-gray-accent font-ibmplexmono text-teal-primary pt-1 pb-1 pl-2 w-full">
                  {food.group}
                </td>
              </tr>
              <tr className="border-b border-gray-accent">
                <td className="text-xl font-ibmplexmono text-navy-secondary uppercase pt-1 pb-1 pr-4">
                  Serving
                </td>
                <td className="text-xl border-l border-gray-accent font-ibmplexmono text-teal-primary pt-1 pb-1 pl-2 w-full">
                  {food.serving}
                </td>
              </tr>
              <tr className="border-b border-gray-accent">
                <td className="text-xl font-ibmplexmono text-navy-secondary uppercase pt-1 pb-1 pr-4">
                  Oxalate
                </td>
                <td className="text-xl border-l border-gray-accent font-ibmplexmono text-teal-primary pt-1 pb-1 pl-2 w-full">
                  {food.oxalate}
                  {'mg'}
                </td>
              </tr>
              <tr>
                <td className="text-xl font-ibmplexmono text-navy-secondary uppercase pt-1 pb-1 pr-4">
                  Rating
                </td>
                <td className="text-xl border-l border-gray-accent font-ibmplexmono text-teal-primary pt-1 pb-1 pl-2 w-full">
                  <span
                    className={
                      food.rating === 'Very High'
                        ? 'text-red-accent'
                        : food.rating === 'High'
                        ? 'text-redRock-accent'
                        : food.rating === 'Moderate'
                        ? 'text-orange-accent'
                        : food.rating === 'Low'
                        ? 'text-yellow-accent'
                        : food.rating === 'Very Low'
                        ? 'text-green-accent'
                        : food.rating === 'Little or None'
                        ? 'text-blue-accent'
                        : ''
                    }
                  >
                    <Link
                      to={`/food-ratings/${food.rating}`
                        .replace(/\s+/g, '-')
                        .toLowerCase()}
                      title={`${food.rating} food ratings`}
                      className="border-b-2 border-dotted border-gray-accent"
                    >
                      {food.rating}
                    </Link>
                  </span>
                </td>
              </tr>
            </table>
          </div>
        ))}
        <p className="text-center mt-4 font-ibmplexmono">
          <small>
            Source:{' '}
            <a
              className="underline"
              href="https://regepi.bwh.harvard.edu/health/nutrition.html"
              title="Harvard T.H. Chan School of Public Health"
            >
              Harvard T.H. Chan School of Public Health
            </a>
          </small>
        </p>
      </section>
    </InteriorLayout>
  );
}

export const query = graphql`
  query($slug: String!) {
    foods: allOxalateJson(
      filter: { slug: { eq: $slug } }
      sort: { order: DESC, fields: oxalate }
    ) {
      nodes {
        id
        food
        group
        oxalate
        rating
        serving
        slug
      }
      totalCount
    }
  }
`;
