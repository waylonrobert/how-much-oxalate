import React from 'react';
import { Link } from 'gatsby';

export default function FindByBestAndWorst() {
  return (
    <article id="food-group" className="container bg-teal-primary max-w-full">
      <h2
        id="food-group-heading"
        className="font-semibold text-center text-3xl text-offwhite-aux pt-8"
      >
        Find by best &amp; worst
      </h2>
      <p className="text-center text-offwhite-aux pt-4">
        Browse here to get some quick results for your diet planning!
      </p>
      <section className="grid grid-cols-1 gap-1 pb-8 mx-auto w-3/4">
        <ul className="w-3/5 mx-auto inline text-center">
          <li className="mr-6 inline">
            <Link to="/top-10-best-foods" title="Top 10 Best Foods">
              <button
                type="button"
                className="bg-navy-secondary hover:bg-teal-secondary text-offwhite-aux py-2 px-8 rounded-full  mt-4 text-center text-sm font-ibmplexmono"
              >
                Top 10 Best Foods
              </button>
            </Link>
          </li>
          <li className="mr-6 inline">
            <Link to="/top-10-worst-foods" title="Top 10 Worst Foods">
              <button
                type="button"
                className="bg-navy-secondary hover:bg-teal-secondary text-offwhite-aux py-2 px-8 rounded-full  mt-4 text-center text-sm font-ibmplexmono"
              >
                Top 10 Worst Foods
              </button>
            </Link>
          </li>
        </ul>
        <ul className="w-3/5mx-auto mb-8 inline text-center">
          <li className="mr-6 inline">
            <Link to="/top-10-best-vegetables" title="Top 10 Best Vegetables">
              <button
                type="button"
                className="bg-navy-secondary hover:bg-teal-secondary text-offwhite-aux py-2 px-8 rounded-full  mt-4 text-center text-sm font-ibmplexmono"
              >
                Top 10 Best Vegetables
              </button>
            </Link>
          </li>
          <li className="mr-6 inline">
            <Link to="/top-10-worst-vegetables" title="Top 10 Worst Vegetables">
              <button
                type="button"
                className="bg-navy-secondary hover:bg-teal-secondary text-offwhite-aux py-2 px-8 rounded-full  mt-4 text-center text-sm font-ibmplexmono"
              >
                Top 10 Worst Vegetables
              </button>
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
