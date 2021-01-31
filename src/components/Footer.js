import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-navy-aux text-offwhite-aux">
      <section className="mx-auto w-3/4 pt-6 pb-4">
        <p className="pt-4 pb-1 leading-tight text-center text-sm">
          &copy;2020-{new Date().getFullYear()} How Much Oxalate.
        </p>
        <p className="pb-4 text-center text-sm">
          Made in California with ❤️ by{' '}
          <a
            className="underline"
            href="https://waylonbaumgardner.com?utm_source=HMO"
            title="Waylon Baumgardner"
          >
            Waylon Baumgardner
          </a>
          .
          <br />
          <span className="uppercase">Disclaimer:</span>{' '}
          <span className="text-xs">
            This site is for reference purposes only; evaluate all content with
            a qualified health professional.
          </span>
        </p>

        <aside className="buymeacoffee pb-4">
          <a href="https://www.buymeacoffee.com/waylonrobert">
            <img
              src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=waylonrobert&button_colour=5F7FFF&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=FFDD00"
              alt="Buy me a coffee"
              className="mx-auto w-1/2 sm:w-1/6"
            />
          </a>
        </aside>
      </section>
    </footer>
  );
}
