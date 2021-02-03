/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <Header />
      <div className="grid grid-cols-1 gap-1 m-12 mx-auto w-3/4">
        <h1 className="mb-4">Contact</h1>

        <p>
          Got a question? Comment? Concern? Fill out this form to contact me.
        </p>
        <div className="mt-8 max-w-md">
          <div className="grid grid-cols-1 gap-6">
            <form
              name="contact"
              method="POST"
              action="/success/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/* honeypot */}
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <label className="block mb-4" htmlFor="name">
                <span className="text-gray-700">Name</span>
                <input
                  id="name"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 focus:ring-teal-primary"
                  placeholder="Your name"
                  name="name"
                />
              </label>
              <label className="block mb-4" htmlFor="email">
                <span className="text-gray-700">Email</span>
                <input
                  id="email"
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300  focus:ring-teal-primary"
                  placeholder="youremail@youremailprovider.com"
                  name="email"
                />
              </label>

              <label className="block mb-4" htmlFor="message">
                <span className="text-gray-700">Message</span>
                <textarea
                  id="message"
                  className="mt-1 block w-full rounded-md border-gray-300 focus:ring-teal-primary"
                  rows="4"
                  placeholder="Your message"
                  name="message"
                />
              </label>
              <button
                type="submit"
                className="bg-navy-secondary hover:bg-teal-secondary hover:border-teal-secondary text-offwhite-aux py-2 px-8 mr-2 rounded-full border border-navy-secondary mt-4 text-center text-sm font-ibmplexmono"
              >
                Send
              </button>
              <input
                type="reset"
                value="Clear"
                className="bg-transparent hover:border-2 text-teal-primary py-2 px-8 rounded-full  border border-teal-secondary hover:bg-teal-secondary hover:text-offwhite-aux mt-4 text-center text-sm font-ibmplexmono"
              />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
