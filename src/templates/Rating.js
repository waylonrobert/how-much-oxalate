/* eslint-disable no-nested-ternary */
import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import InteriorLayout from '../components/InteriorLayout';
import Header from '../components/Header';

export default function RatingFoodPage({ data }) {
  return (
    // TODO: fix SEO; figure out way to count result set; link Groups to group page
    <InteriorLayout>
      <SEO title={`${data.ratings.nodes[0].rating} - Oxalate Ratings`} />
      <Header />
      <section className="grid grid-cols-1 gap-1 m-12 mx-auto w-3/4">
        <h1>Oxalate Ratings - {data.ratings.nodes[0].rating}</h1>

        <p
          className={
            data.ratings.nodes[0].rating === 'Little or None'
              ? 'hidden'
              : 'text-center mt-6'
          }
        >
          The following{' '}
          <span className="bg-yellow-200 p-1">
            <strong>{data.ratings.totalCount}</strong>
          </span>{' '}
          results are sorted top to bottom by <em>highest</em> amount of calcium
          oxalate in milligrams.
        </p>

        <p
          className={
            data.ratings.nodes[0].rating === 'Little or None'
              ? 'text-center mt-6'
              : 'hidden'
          }
        >
          The following{' '}
          <span className="bg-yellow-200 p-1">
            <strong>{data.ratings.totalCount}</strong>
          </span>{' '}
          results contain foods with little or no measurable oxalate.
        </p>

        {data.ratings.nodes.map((food) => (
          <div
            key={food.id}
            className={
              food.rating === 'Very High'
                ? 'card___food_red h-36 border-2 border-navy-secondary mx-auto p-5 w-full sm:w-2/4'
                : food.rating === 'High'
                ? 'card___food_redRock h-36 border-2 border-navy-secondary mx-auto p-5 w-full sm:w-2/4'
                : food.rating === 'Moderate'
                ? 'card___food_orange h-36 border-2 border-navy-secondary mx-auto p-5 w-full sm:w-2/4'
                : food.rating === 'Low'
                ? 'card___food_yellow h-36 border-2 border-navy-secondary mx-auto p-5 w-full sm:w-2/4'
                : food.rating === 'Very Low'
                ? 'card___food_green h-36 border-2 border-navy-secondary mx-auto p-5 w-full sm:w-2/4'
                : food.rating === 'Little or None'
                ? 'card___food_blue h-36 border-2 border-navy-secondary mx-auto p-5 w-full sm:w-2/4'
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
                  <Link
                    to={`/food-groups/${food.slug}`}
                    className="border-b-2 border-dotted border-gray-accent"
                    title={`${food.group} food groups`}
                  >
                    {food.group}
                  </Link>
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
    ratings: allOxalateJson(
      filter: { rating: { eq: $slug } }
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
