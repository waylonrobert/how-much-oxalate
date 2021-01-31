import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <Layout>
      <SEO title="404 Error: Page Not Found" />
      <Header />
      <h1>404 Error: Page Not Found</h1>
      <p className="text-center m-12">
        Sorry, there's no page with that name here. Maybe the link is wrong?
      </p>
    </Layout>
  );
}
