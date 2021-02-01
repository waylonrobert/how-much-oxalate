/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Success() {
  return (
    <Layout>
      <SEO title="Message success" />
      <Header />
      <div className="grid grid-cols-1 gap-1 m-12 mx-auto w-3/4">
        <h1 className="mb-4">Thanks for your message!</h1>

        <p>
          Thanks for sending the message - it's on the way to me and I'll get to
          it soon!
        </p>
      </div>
    </Layout>
  );
}
