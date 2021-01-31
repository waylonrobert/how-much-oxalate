/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { graphql } from 'gatsby';
// import HeaderBody from '../components/HeaderBody';
import SEO from '../components/SEO';
import InteriorLayout from '../components/InteriorLayout';
import Header from '../components/Header';

// TODO: add sorting option for table
// TODO: make the table better on mobile
export default function AllFoods({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <InteriorLayout>
      <SEO title="All Foods" />
      <Header />
      <form className="px-8 pt-6 pb-8 mx-auto w-1/2">
        <div className="mb-4">
          <label
            className="block text-navy-secondary text-sm font-regular font-ibmplexserif mb-2"
            htmlFor="foodname"
          >
            Food name
            <input
              className="shadow appearance-none border border-navy-secondary w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-ibmplexmono"
              id="foodname"
              type="text"
              placeholder="Type in food name (i.e. spinach)"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </label>
          {/* <p>{data.food.totalCount}</p> */}
        </div>
      </form>

      {/* <p>
        Sort by name: <Link to="/all-foods-sort-food">Food</Link> |{' '}
        <Link to="#">Rating</Link>
      </p> */}
      <div className="tablewrap">
        <table className="table-auto mx-auto">
          <thead>
            <tr>
              <th className="bg-teal-soft-accent border-0 text-left px-8 py-4">
                Food
              </th>
              <th className="bg-teal-soft-accent border-0 text-left px-8 py-4">
                Group
              </th>
              <th className="bg-teal-soft-accent border-0 text-left px-8 py-4">
                Serving
              </th>
              <th className="bg-teal-soft-accent border-0 text-left px-8 py-4">
                Oxalate
              </th>
              <th className="bg-teal-soft-accent border-0 text-left px-8 py-4">
                Rating
              </th>
            </tr>
          </thead>
          <tbody>
            {data.food.nodes
              // eslint-disable-next-line array-callback-return
              .filter((foods) => {
                if (searchTerm === '') {
                  return foods;
                }
                // convert search term to lowercase
                if (
                  foods.food.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return foods;
                }
              })
              .map((foods) => (
                <tr className="border-solid border-red-600" key={foods.id}>
                  <td className="border px-8 py-4">{foods.food}</td>
                  <td className="border px-8 py-4">{foods.group}</td>
                  <td className="border px-8 py-4">{foods.serving}</td>
                  <td className="border px-8 py-4">
                    {foods.oxalate}
                    {'mg'}
                  </td>
                  <td
                    className={
                      foods.rating === 'Very High'
                        ? 'text-red-accent border px-8 py-4'
                        : foods.rating === 'High'
                        ? 'text-redRock-accent border px-8 py-4'
                        : foods.rating === 'Moderate'
                        ? 'text-orange-accent border px-8 py-4'
                        : foods.rating === 'Low'
                        ? 'text-yellow-accent border px-8 py-4'
                        : foods.rating === 'Very Low'
                        ? 'text-green-accent border px-8 py-4'
                        : foods.rating === 'Little or None'
                        ? 'text-blue-accent border px-8 py-4'
                        : 'border px-8 py-4'
                    }
                  >
                    {foods.rating}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
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
    </InteriorLayout>
  );
}
export const query = graphql`
  query {
    food: allOxalateJson(sort: { order: DESC, fields: oxalate }) {
      nodes {
        food
        id
        group
        oxalate
        rating
        serving
      }
      totalCount
    }
  }
`;
