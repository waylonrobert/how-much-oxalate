/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function AboutOxalate() {
  return (
    <Layout>
      <SEO
        title="About oxalate"
        description="Learn more about oxalate as it relates to kidney stones"
      />
      <Header />
      <div className="grid grid-cols-1 gap-1 m-12 mx-auto w-3/4">
        <h1 className="mb-4">About oxalate</h1>
        <h2 className="text-left mt-4">What is oxalate?</h2>
        <p>
          Oxalic acid is an organic compound found in many plant species that
          forms <em className="p-0 bg-transparent">oxalate</em> when it binds to
          minerals. It's very common for the term
          <em className="p-0 bg-transparent">oxalate</em> and
          <em className="p-0 bg-transparent">oxalic acid</em> to mean the same
          thing in terms of nutrition.
          <sup>
            <a className="underline text-blue-accent" href="#ref1">
              1
            </a>
          </sup>
        </p>
        <h2 className="text-left mt-4">What is calcium oxalate?</h2>
        <p>
          Calcium is a mineral found in different types of foods, such as dairy
          and fruits. When oxaclic acid binds with calcium, calcium oxalate
          forms. In most humans, calcium oxalate forms in the kidneys where
          oxalic acid and calcium meet.
          <sup>
            <a className="underline text-blue-accent" href="#ref2">
              2
            </a>
          </sup>
        </p>
        <h2 className="text-left mt-4">
          How does calcium oxalate affect kidneys?
        </h2>
        <p>
          Calcium oxalate is known to cause stones in kidneys (though it's
          unclear <em className="p-0 bg-transparent">why</em> it happens in some
          people and not others). Kidney stones caused by calcium oxalate occurs
          when they form crystals inside the kidney (which itself is generally
          caused by a lack of sufficient fluid in the kidney). More recent
          research suggests that while many foods do contain oxalic acid, the
          body also produces oxalic acid, and this is why it's medically
          recommended to calcium oxalate kidney stone patients to avoid or
          reduce ingestion of foods that contain oxalic acid.
          <sup>
            <a className="underline text-blue-accent" href="#ref3">
              3
            </a>
          </sup>
        </p>
        <h2 className="text-left mt-4">
          What should calcium oxalate kidney stone patients do?
        </h2>
        <p>
          <em className="p-0 bg-transparent">
            Quick disclaimer: this is not medical advice; evaluate all
            statements with a qualified health professional.
          </em>
        </p>
        <p>
          More recent research suggests that while many foods do contain oxalic
          acid, the body also produces oxalic acid. For that reason, many
          medical professionals recommended that calcium oxalate kidney stone
          patients do two things to help reduce the risk of forming stones:
          <sup>
            <a className="underline text-blue-accent" href="#ref4">
              4
            </a>
          </sup>
          <ol className="list-decimal mt-3 pl-10">
            <li className="mt-2">
              Avoid or reduce ingestion of foods that contain oxalic acid
            </li>
            <li className="mt-2">Consume more water</li>
          </ol>
        </p>

        <hr className="mt-4 mb-4" />

        <ul className="list-none text-sm">
          <li>
            <a id="ref1" title="Reference 1" />
            <sup>1</sup> Noonan, S. C., &amp; Savage, G. P. (1999).{' '}
            <a
              className="underline text-blue-accent"
              href="https://pubmed.ncbi.nlm.nih.gov/24393738/"
              title="Oxalate content of foods and its effect on humans"
            >
              Oxalate content of foods and its effect on humans
            </a>
            .{' '}
            <em className="p-0 bg-transparent">
              Asia Pacific journal of clinical nutrition
            </em>
            , 8(1), 64–74.
          </li>
          <li className="mt-3">
            <a id="ref2" title="Reference 2" />
            <sup>2</sup> Heaney, R. P., &amp; Weaver, C. M. (1989).{' '}
            <a
              className="underline text-blue-accent"
              href="https://pubmed.ncbi.nlm.nih.gov/2801588/"
              title="Oxalate: effect on calcium absorbability"
            >
              Oxalate: effect on calcium absorbability
            </a>
            .{' '}
            <em className="p-0 bg-transparent">
              The American journal of clinical nutrition
            </em>
            , 50(4), 830–832.
          </li>
          <li className="mt-3">
            <a id="ref3" title="Reference 3" />
            <sup>3</sup> Worcester, E. M., &amp; Coe, F. L. (2010).{' '}
            <a
              className="underline text-blue-accent"
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3192488/"
              title="Clinical Practice Calcium Kidney Stones"
            >
              Clinical practice calcium kidney stones
            </a>
            .{' '}
            <em className="p-0 bg-transparent">
              The New England journal of medicine
            </em>
            , 363(10), 954–963.
          </li>
          <li className="mt-3">
            <a id="ref4" title="Reference 4" />
            <sup>4</sup> Gul, Z., &amp; Monga, M. (2014).{' '}
            <a
              className="underline text-blue-accent"
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4265710/"
              title="Medical and Dietary Therapy for Kidney Stone Prevention"
            >
              Medical and dietary therapy for kidney stone prevention
            </a>
            . <em className="p-0 bg-transparent">Korean journal of urology</em>,
            55(12), 775–779.
          </li>
        </ul>
      </div>
    </Layout>
  );
}
