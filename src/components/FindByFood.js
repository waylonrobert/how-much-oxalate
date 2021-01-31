import React from 'react';
import { Link } from 'gatsby';

export default function FindByFood() {
  return (
    <section
      id="food-name"
      className="grid grid-cols-1 gap-1 m-12 mx-auto w-3/4"
    >
      {/* <h2 className="font-semibold text-center text-3xl pt-8">
        Find by food name
      </h2> */}
      {/* <form className="px-8 pt-6 pb-8 mx-auto w-1/2">
        <div className="mb-4">
          <label
            className="block text-navy-secondary text-sm font-regular font-ibmplexserif mb-2"
            htmlFor="foodname"
          >
            Type name of food
            <input
              className="shadow appearance-none border border-navy-secondary w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-ibmplexmono"
              id="foodname"
              type="text"
              placeholder="spinach"
            />
          </label>
        </div>
      </form> */}
      {/* <div className="card___food_blue h-36 border-2 border-navy-secondary w-1/4 mx-auto p-5">
        <h3 className="text-center">Find by Food Group</h3>
      </div> */}

      <h3 className="font-bold leading-tight text-4xl text-center text-navy-aux sm:text-5xl">
        Discover oxalate content in various foods
      </h3>
      <h4 className="pt-5 text-center text-xl">
        Helping kidney stone sufferers find calcium oxalate content in common
        foods. Choose how you'd like to start:
      </h4>
      <ul className="mx-auto text-center sm:m-8 sm:inline">
        <li className="inline sm:mr-6">
          <Link to="/all-foods">
            <button
              type="button"
              className="bg-navy-secondary hover:bg-teal-secondary text-offwhite-aux py-2 px-8 rounded-full  mt-4 text-center text-sm font-ibmplexmono"
            >
              View all foods
            </button>
          </Link>
        </li>
        <li className="inline sm:mr-6">
          <a href="#group">
            <button
              type="button"
              className="bg-navy-secondary hover:bg-teal-secondary text-offwhite-aux py-2 px-8 rounded-full  mt-4 text-center text-sm font-ibmplexmono"
            >
              View by group
            </button>
          </a>
        </li>
        <li className="inline sm:mr-6">
          <a href="#rating">
            <button
              type="button"
              className="bg-navy-secondary hover:bg-teal-secondary text-offwhite-aux py-2 px-8 rounded-full  mt-4 text-center text-sm font-ibmplexmono"
            >
              View by rating
            </button>
          </a>
        </li>
      </ul>
    </section>
  );
}
