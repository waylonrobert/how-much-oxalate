/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'gatsby';

const ListLink = (props) => (
  <li className="inline-block mr-4 font-semibold text-teal-primary text-lg hover:border-teal-primary hover:text-navy-secondary">
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default function Header() {
  return (
    <header className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 m-12 mx-auto w-3/4">
      <Link to="/" title="How Much Oxalate" className="mx-auto sm:m-0">
        <svg
          width="300"
          height="50"
          viewBox="0 0 332 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.5 4.5H47.4V14.1H55.2V4.5H60.1V28.3H55.2V18.6H47.4V28.3H42.5V4.5Z"
            fill="#578096"
          />
          <path
            d="M63.8 19.4V19C63.8 13.6 67.5 9.69998 72.4 9.69998C77.3 9.69998 80.9 13.5 80.9 19V19.4C80.9 24.8 77.3 28.7 72.3 28.7C67.3 28.7 63.8 24.9 63.8 19.4ZM76.2 19.4V19.2C76.2 16.2 74.7 14 72.4 14C70 14 68.6 16.2 68.6 19.2V19.4C68.6 22.3 70.1 24.6 72.4 24.6C74.8 24.5 76.2 22.3 76.2 19.4Z"
            fill="#578096"
          />
          <path
            d="M82.2 10.1H87.1L89.6 20.9L92.4 10.1H96.5L99.4 21L101.9 10.2H106.7L101.8 28.6H97.3L94.4 17.8L91.4 28.6H87L82.2 10.1Z"
            fill="#578096"
          />
          <path
            d="M117.3 4.5H122.5L127.8 14.2L133 4.5H138.2V28.3H133.4V13.1L127.8 22.9H127.7L122.1 13.1V28.2H117.3V4.5Z"
            fill="#578096"
          />
          <path
            d="M142.5 22.5V10.1H147.3V21.1C147.3 23.2 148.3 24.3 149.9 24.3C151.5 24.3 152.6 23.2 152.6 21.1V10.1H157.4V28.3H152.6V25.9C151.6 27.4 150.2 28.7 147.9 28.7C144.4 28.7 142.5 26.3 142.5 22.5Z"
            fill="#578096"
          />
          <path
            d="M160.5 19.5V19.1C160.5 13.7 164 9.79999 168.9 9.79999C171.5 9.79999 173.3 10.7 174.8 12.2L172.2 15.7C171.3 14.8 170.4 14.1 168.9 14.1C166.7 14.1 165.2 16.2 165.2 19.2V19.3C165.2 22.3 166.6 24.4 169 24.4C170.4 24.4 171.3 23.7 172.3 22.7L174.8 25.9C173.3 27.6 171.5 28.7 168.6 28.7C163.9 28.7 160.5 24.8 160.5 19.5Z"
            fill="#578096"
          />
          <path
            d="M177.6 3.79999H182.4V12.6C183.5 11.1 184.8 9.79999 187.1 9.79999C190.5 9.79999 192.5 12.2 192.5 16V28.4H187.7V17.4C187.7 15.3 186.7 14.2 185.1 14.2C183.5 14.2 182.4 15.3 182.4 17.4V28.4H177.6V3.79999Z"
            fill="#578096"
          />
          <path
            d="M203.5 16.6V16.2C203.5 9.09998 208 4.09998 214.3 4.09998C220.6 4.09998 225 9.09998 225 16.2V16.6C225 23.7 220.5 28.7 214.2 28.7C207.9 28.7 203.5 23.8 203.5 16.6ZM219.9 16.5V16.3C219.9 11.6 217.5 8.69998 214.2 8.69998C210.9 8.69998 208.5 11.6 208.5 16.3V16.5C208.5 21.2 210.9 24.1 214.2 24.1C217.6 24.2 219.9 21.2 219.9 16.5Z"
            fill="#578096"
          />
          <path
            d="M235.1 15.4L238 10.1H243L237.7 19L243.2 28.3H238.1L235.1 22.6L232 28.3H227L232.4 19L227.2 10.1H232.3L235.1 15.4Z"
            fill="#578096"
          />
          <path
            d="M244.4 23.1V22.9C244.4 18.9 247 17.1 250.8 17.1C252.3 17.1 253.5 17.4 254.6 17.8V17.3C254.6 15.2 253.3 14.1 251.2 14.1C249.5 14.1 248.1 14.6 247 15.1L245.7 11.3C247.5 10.4 249.3 9.79999 251.9 9.79999C254.4 9.79999 256.3 10.5 257.4 11.7C258.7 13 259.3 14.9 259.3 17.2V28.2H254.6V26.2C253.5 27.6 252 28.5 249.9 28.5C246.8 28.7 244.4 26.6 244.4 23.1ZM254.6 22.3V20.8C253.9 20.5 252.9 20.2 251.9 20.2C250.1 20.2 249 21.1 249 22.7V22.8C249 24.3 250 25 251.3 25.1C253.3 25.1 254.6 24 254.6 22.3Z"
            fill="#578096"
          />
          <path d="M263.1 3.79999H267.9V28.3H263.1V3.79999Z" fill="#578096" />
          <path
            d="M271.1 23.1V22.9C271.1 18.9 273.7 17.1 277.5 17.1C279 17.1 280.2 17.4 281.3 17.8V17.3C281.3 15.2 280 14.1 277.9 14.1C276.2 14.1 274.8 14.6 273.7 15.1L272.4 11.3C274.2 10.4 276 9.79999 278.6 9.79999C281.1 9.79999 283 10.5 284.1 11.7C285.4 13 286 14.9 286 17.2V28.2H281.3V26.2C280.2 27.6 278.7 28.5 276.6 28.5C273.5 28.7 271.1 26.6 271.1 23.1ZM281.3 22.3V20.8C280.6 20.5 279.6 20.2 278.6 20.2C276.8 20.2 275.7 21.1 275.7 22.7V22.8C275.7 24.3 276.7 25 278 25.1C280 25.1 281.3 24 281.3 22.3Z"
            fill="#578096"
          />
          <path
            d="M290.2 23.8V14.2H288.4V10.1H290.2V5.39999H295V10.1H298.6V14.2H295V22.8C295 23.9 295.5 24.4 296.5 24.4C297.2 24.4 298 24.2 298.6 23.9V27.7C297.6 28.2 296.5 28.7 295 28.7C292.3 28.6 290.2 27.5 290.2 23.8Z"
            fill="#578096"
          />
          <path
            d="M300.6 19.4V19.1C300.6 13.7 304 9.79999 308.6 9.79999C313.8 9.79999 316.4 14 316.4 19.5C316.4 19.8 316.4 20.3 316.4 21.1H305.5C305.9 23.5 307.4 24.8 309.4 24.8C310.9 24.8 312.1 24.1 313.2 23L315.7 25.9C314 27.7 311.9 28.8 309.2 28.8C304.3 28.7 300.6 25.1 300.6 19.4ZM311.6 17.8C311.4 15.3 310.3 13.7 308.5 13.7C306.7 13.7 305.6 15.2 305.3 17.8H311.6Z"
            fill="#578096"
          />
          <path
            d="M321.3 14.8L321.5 14.6C325.1 14.3 326.6 13.1 326.6 11.2V11.1C326.6 9.59998 325.5 8.69998 323.7 8.69998C321.9 8.69998 320.5 9.59998 319.5 10.7L316.7 7.29998C318.5 5.39998 320.8 4.09998 323.9 4.09998C328.5 4.09998 331.5 6.69998 331.5 10.9C331.5 14.9 328.8 16.8 325.6 17.6L325.2 20.3H321.9L321.3 14.8ZM320.9 23.1H326.2V28.3H320.9V23.1Z"
            fill="#578096"
          />
          <g clipPath="url(#clip0)">
            <path
              d="M20.7101 17.5345H13.3925"
              stroke="#578096"
              strokeWidth="3"
              strokeMiterlimit="10"
            />
            <path
              d="M5.93689 7.59369L9.8718 15.2564"
              stroke="#578096"
              strokeWidth="3"
              strokeMiterlimit="10"
            />
            <path
              d="M4.14201 8.28402C6.42958 8.28402 8.28402 6.42958 8.28402 4.14201C8.28402 1.85444 6.42958 0 4.14201 0C1.85444 0 0 1.85444 0 4.14201C0 6.42958 1.85444 8.28402 4.14201 8.28402Z"
              fill="#578197"
            />
            <path
              d="M4.14201 6.69625C5.55268 6.69625 6.69625 5.55268 6.69625 4.14201C6.69625 2.73134 5.55268 1.58777 4.14201 1.58777C2.73134 1.58777 1.58777 2.73134 1.58777 4.14201C1.58777 5.55268 2.73134 6.69625 4.14201 6.69625Z"
              fill="white"
            />
            <path
              d="M6.14398 27.4063L10.0789 19.8126"
              stroke="#578096"
              strokeWidth="3"
              strokeMiterlimit="10"
            />
            <path
              d="M4.3491 35.069C6.63667 35.069 8.49112 33.2146 8.49112 30.927C8.49112 28.6394 6.63667 26.785 4.3491 26.785C2.06153 26.785 0.207092 28.6394 0.207092 30.927C0.207092 33.2146 2.06153 35.069 4.3491 35.069Z"
              fill="#578197"
            />
            <path
              d="M4.3491 33.4813C5.75977 33.4813 6.90334 32.3377 6.90334 30.927C6.90334 29.5163 5.75977 28.3728 4.3491 28.3728C2.93843 28.3728 1.79486 29.5163 1.79486 30.927C1.79486 32.3377 2.93843 33.4813 4.3491 33.4813Z"
              fill="white"
            />
            <path
              d="M10.8382 21.2623C13.1258 21.2623 14.9803 19.4079 14.9803 17.1203C14.9803 14.8327 13.1258 12.9783 10.8382 12.9783C8.55067 12.9783 6.69623 14.8327 6.69623 17.1203C6.69623 19.4079 8.55067 21.2623 10.8382 21.2623Z"
              fill="#578197"
            />
            <path
              d="M10.8382 19.6746C12.2489 19.6746 13.3925 18.531 13.3925 17.1203C13.3925 15.7096 12.2489 14.5661 10.8382 14.5661C9.42757 14.5661 8.284 15.7096 8.284 17.1203C8.284 18.531 9.42757 19.6746 10.8382 19.6746Z"
              fill="white"
            />
            <path
              d="M29.0631 7.59369L25.1282 15.2564"
              stroke="#578096"
              strokeWidth="3"
              strokeMiterlimit="10"
            />
            <path
              d="M30.858 8.28402C33.1455 8.28402 35 6.42958 35 4.14201C35 1.85444 33.1455 0 30.858 0C28.5704 0 26.7159 1.85444 26.7159 4.14201C26.7159 6.42958 28.5704 8.28402 30.858 8.28402Z"
              fill="#578197"
            />
            <path
              d="M30.858 6.69625C32.2686 6.69625 33.4122 5.55268 33.4122 4.14201C33.4122 2.73134 32.2686 1.58777 30.858 1.58777C29.4473 1.58777 28.3037 2.73134 28.3037 4.14201C28.3037 5.55268 29.4473 6.69625 30.858 6.69625Z"
              fill="white"
            />
            <path
              d="M28.856 27.4063L24.9211 19.8126"
              stroke="#578096"
              strokeWidth="3"
              strokeMiterlimit="10"
            />
            <path
              d="M30.6509 35.069C32.9384 35.069 34.7929 33.2146 34.7929 30.927C34.7929 28.6394 32.9384 26.785 30.6509 26.785C28.3633 26.785 26.5089 28.6394 26.5089 30.927C26.5089 33.2146 28.3633 35.069 30.6509 35.069Z"
              fill="#578197"
            />
            <path
              d="M30.6509 33.4813C32.0615 33.4813 33.2051 32.3377 33.2051 30.927C33.2051 29.5163 32.0615 28.3728 30.6509 28.3728C29.2402 28.3728 28.0966 29.5163 28.0966 30.927C28.0966 32.3377 29.2402 33.4813 30.6509 33.4813Z"
              fill="white"
            />
            <path
              d="M24.1617 21.2623C26.4493 21.2623 28.3037 19.4079 28.3037 17.1203C28.3037 14.8327 26.4493 12.9783 24.1617 12.9783C21.8742 12.9783 20.0197 14.8327 20.0197 17.1203C20.0197 19.4079 21.8742 21.2623 24.1617 21.2623Z"
              fill="#578197"
            />
            <path
              d="M24.1617 19.6746C25.5724 19.6746 26.716 18.531 26.716 17.1203C26.716 15.7096 25.5724 14.5661 24.1617 14.5661C22.7511 14.5661 21.6075 15.7096 21.6075 17.1203C21.6075 18.531 22.7511 19.6746 24.1617 19.6746Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="35" height="35" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <nav>
        <ul className="m-0 text-center sm:float-right sm:m-3">
          <ListLink to="/about-oxalate/" className="mr-4">
            About oxalate
          </ListLink>
          <ListLink to="/about-this-site/">About this site</ListLink>
        </ul>
      </nav>
    </header>
  );
}
