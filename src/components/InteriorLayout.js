import React from 'react';
import Footer from './Footer';

export default function InteriorLayout({ children }) {
  return (
    <>
      <main className="mb-24">{children}</main>
      <Footer />
    </>
  );
}
