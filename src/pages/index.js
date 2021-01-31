import React from 'react';
// import FindByBestAndWorst from '../components/FindByBestAndWorst';
import FindByFood from '../components/FindByFood';
import FindByGroup from '../components/FindByGroup';
import FindByRating from '../components/FindByRating';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <FindByFood />
      <FindByGroup />
      <FindByRating />
      {/* <FindByBestAndWorst /> */}
    </Layout>
  );
}
