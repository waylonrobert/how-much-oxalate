/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function AboutThisSite() {
  return (
    // TODO: make an aside for disclaimer
    <Layout>
      <SEO title="About this site" />
      <Header />
      <div className="grid grid-cols-1 gap-1 m-12 mx-auto w-3/4">
        <h1 className="mb-4">About this site</h1>
        <h2 className="text-left mt-4">
          What is <em className="p-0 bg-transparent">How Much Oxalate?</em>
        </h2>
        <p>
          <em className="p-0 bg-transparent">How Much Oxalate?</em> is a
          reference site designed with the following three goals in mind:
          <ol className="list-decimal mt-3 pl-10">
            <li>
              Help calcium oxalate kidney stone sufferers easily find the
              oxalate content in various foods and drinks
            </li>
            <li className="mt-2">
              Highlight oxalate content in foods based on food groups
            </li>
            <li className="mt-2">
              Highlight oxalate content in foods based on a{' '}
              <a href="#ratings" className="underline text-blue-accent">
                rating system
              </a>
            </li>
          </ol>
        </p>
        <h2 className="text-left mt-4">How do I interpret the data?</h2>
        <p>
          Oxalate content in food and drink is measured in{' '}
          <em className="p-0 bg-transparent">milligrams</em>. There are three
          important elements to understand when parsing the data shared on this
          site:
          <ol className="list-decimal mt-3 pl-10">
            <li>
              Follow the rating system that's based on oxalate content. See
              table below (from lowest to highest measured in{' '}
              <em className="p-0 bg-transparent">mg</em>):
              <a id="ratings" title="Ratings" />
              <table className="table-auto border mt-4 mb-4 sm:w-1/2">
                <thead className="p-6 bg-teal-soft-accent">
                  <th className="px-2">Rating</th>
                  <th className="px-2">Oxalate (mg)</th>
                </thead>
                <tbody className="border">
                  <tr className="border">
                    <td className="px-2">Little or none</td>
                    <td className="border-l px-2">0-1mg</td>
                  </tr>
                  <tr className="border">
                    <td className="px-2">Very Low</td>
                    <td className="border-l px-2">1-2mg</td>
                  </tr>
                  <tr className="border">
                    <td className="px-2">Low</td>
                    <td className="border-l px-2">3-4mg</td>
                  </tr>
                  <tr className="border">
                    <td className="px-2">Moderate</td>
                    <td className="border-l px-2">5-9mg</td>
                  </tr>
                  <tr className="border">
                    <td className="px-2">High</td>
                    <td className="border-l px-2">10-12mg</td>
                  </tr>
                  <tr className="border">
                    <td className="px-2">Very High</td>
                    <td className="border-l px-2">13mg+</td>
                  </tr>
                </tbody>
              </table>
            </li>

            <li className="mt-2">
              Review the serving size (specific measurement units are provided
              for each item)
            </li>
            <li className="mt-2">
              Understand the relationship between the serving size and oxalate
              content:
              <span className="font-ibmplexmono block mt-4 p-1 border w-1/2 text-center">
                <em className="p-0 bg-transparent">A</em> serving measurement ={' '}
                <em className="p-0 bg-transparent">B</em>mg oxalate
              </span>
              <br />
              (i.e.{' '}
              <em className="p-0 bg-transparent">
                1 cup of raisins = 3mg oxalate
              </em>
              )
            </li>
          </ol>
        </p>
        <h2 className="text-left mt-4">Where does the data come from?</h2>
        <p>
          Though there are many sources of oxalate content in foods available,
          the one most cited in academic research is Harvard University's Howard
          T.H. Chan School of Public Health's oxalate food list.
          <sup>
            <a href="#ref1" className="underline text-blue-accent">
              1
            </a>
          </sup>{' '}
          This data is freely available. The dataset used on this site is
          unchanged from its source.
        </p>

        <h2 className="text-left mt-4">
          Is this site meant to provide health or medical advice?
        </h2>
        <p>
          No, not at all. This site is for reference only. Evaluate all content
          with a qualified health professional.
        </p>

        <h2 className="text-left mt-4">
          Who can I contact about this site if I have a question or comment?
        </h2>
        <p>You can contact me by filling out this form.</p>
        <hr className="mt-4 mb-4" />

        <ul className="list-none text-sm">
          <li>
            <a id="ref1" title="Reference 1" />
            <sup>1</sup> (2008).{' '}
            <a
              className="underline text-blue-accent"
              href="https://regepi.bwh.harvard.edu/health/nutrition.html"
              title="Oxalate content of foods "
            >
              Oxalate content of foods
            </a>
            .{' '}
            <em className="p-0 bg-transparent">
              Department of Nutrition, Harvard T.H. Chan School of Public Health
            </em>
            .
          </li>
        </ul>
      </div>
    </Layout>
  );
}
