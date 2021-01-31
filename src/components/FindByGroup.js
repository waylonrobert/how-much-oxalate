/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export default function FindByGroup() {
  const data = useStaticQuery(graphql`
    query {
      groups: allGroupsJson {
        nodes {
          group
          id
          slug
        }
      }
    }
  `);
  return (
    <article id="food-group" className="container bg-teal-primary max-w-full">
      <a id="group" />
      <h2
        id="food-group-heading"
        className="font-semibold text-center text-3xl mt-8 text-offwhite-aux pt-8"
      >
        Find by food group
      </h2>

      <p className="text-center text-offwhite-aux pt-4">
        Browse here to get all results based on food group
      </p>
      <section className="grid grid-cols-1 gap-1 pb-8 mx-auto w-3/4">
        <ul className="w-3/5 m-8 mx-auto inline text-center">
          {data.groups.nodes.map((food) => (
            <li key={food.id} className="inline sm:mr-6">
              <Link to={`/food-groups/${food.slug}`}>
                <button
                  type="button"
                  className="bg-navy-secondary hover:bg-teal-secondary text-offwhite-aux py-2 px-8 rounded-full  mt-4 text-center text-sm font-ibmplexmono"
                >
                  {food.group}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
