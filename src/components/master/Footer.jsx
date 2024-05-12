import Link from "next/link";
import React from "react";
import Subscribe from "../posts/Subscribe";

const Footer = ({ socials, categories }) => {
  return (
    <footer className="py-10 bg-gray-100 text-gray-900">
      <div className="container px-6 mx-auto space-y-6 divide-y dark:divide-gray-600 md:space-y-12 divide-opacity-50">
        <div className="grid lg:grid-cols-12  gap-10 ">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-4">
            <Link
              rel="noopener noreferrer"
              href="/"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
                className="w-8 h-8 text-blue-500"
              >
                <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
              </svg>
            </Link>
            <div className="my-4">
              <p className="mb-3">{socials["about"]}</p>
              <p>{socials["address"]}</p>
            </div>
          </div>
          <div className="col-span-full text-center md:text-left md:col-span-3">
            <p className="mb-3 text-lg font-medium">Category</p>
            <ul>
              {categories.map((item, i) => {
                if (i + 1 <= 3) {
                  return (
                    <li>
                      <Link
                        rel="noopener noreferrer"
                        href={`/category?id=${item["id"]}`}
                        className="hover:text-blue-600"
                      >
                        {item["name"]}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className="col-span-full text-center md:text-left md:col-span-2">
            <p className="mb-3 text-lg font-medium">Category</p>
            <ul>
              {categories.map((item, i) => {
                if (i > 3) {
                  return (
                    <li>
                      <Link
                        rel="noopener noreferrer"
                        href={`/category?id=${item["id"]}`}
                        className="hover:text-blue-600"
                      >
                        {item["name"]}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className="col-span-full text-center md:text-left md:col-span-3">
            <Subscribe />
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span>©2024 All rights reserved</span>
            <Link rel="noopener noreferrer" href="/policy">
              <span>Privacy policy</span>
            </Link>
            <Link rel="noopener noreferrer" href="/terms">
              <span>Terms of service</span>
            </Link>
          </div>
          <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            <Link
              rel="noopener noreferrer"
              href={socials['facebook']}
              target="_blank"
              title="Facebook"
              className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M13 4h2V2h-2a7 7 0 0 0-7 7v2H4v3h4v9h4v-9h3l1-3h-4V7a1 1 0 0 1 1-1z" />
              </svg>
            </Link>

            <Link
              rel="noopener noreferrer"
              href={socials['youtube']}
              target="_blank"
              title="YouTube"
              className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 text-gray-50"
            >
              <img className="w-5 h-5" src="/youtube.svg" alt="" />
            </Link>

            <Link
              rel="noopener noreferrer"
              href={socials['twitter']}
              target="_blank"
              title="Twitter"
              className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path fill="none" d="M0 0h50v50H0z" />
                <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
              </svg>
            </Link>
            <Link
              rel="noopener noreferrer"
              href={socials['linkedin']}
              target="_blank"
              title="LinkedIn"
              className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M20.2 3H3.8C2.9 3 2 3.9 2 4.8v14.4c0 .9.9 1.8 1.8 1.8h16.4c.9 0 1.8-.9 1.8-1.8V4.8c0-.9-.9-1.8-1.8-1.8zM8 18H5V10h3v8zm-1.5-9.5C6.1 8.5 7 7.6 8 7.6s1.5.9 1.5 1.9c0 1-1 1.9-1.9 1.9S6.1 10.5 6.1 9.5zM19 18h-3v-4.9c0-1.2-.8-1.6-1.5-1.6-.8 0-1.1.5-1.3 1h-.1V18h-3v-8h3v1.1c.4-.6 1.1-1.3 2.5-1.3 1.8 0 3.1 1.2 3.1 3.8V18z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
