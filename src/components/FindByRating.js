/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export default function FindByRating() {
  const data = useStaticQuery(graphql`
    query {
      ratings: allRatingsJson {
        nodes {
          rating
          id
          slug
        }
      }
    }
  `);
  return (
    <article
      id="food-rating"
      className="container max-w-full bg-blue-desaturated"
    >
      <a id="rating" />
      <h2
        id="food-rating-heading"
        className="font-semibold text-offwhite-aux text-center text-3xl pt-8"
      >
        Find by Oxalate rating
      </h2>
      <p className="text-center px-2 pt-4 text-offwhite-aux">
        Browse here to get all results based on oxalate rating
      </p>
      <section className="grid grid-cols-1 gap-1 pb-8 mx-auto w-3/4">
        <ul className="w-3/5 m-8 mx-auto inline text-center">
          {data.ratings.nodes.map((rating) => (
            <li key={rating.id} className="inline sm:mr-6">
              <Link to={`/food-ratings/${rating.slug}`}>
                <button
                  type="button"
                  className="bg-navy-secondary hover:bg-teal-secondary text-offwhite-aux py-2 px-8 rounded-full  mt-4 text-center text-sm font-ibmplexmono"
                >
                  {rating.rating}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
