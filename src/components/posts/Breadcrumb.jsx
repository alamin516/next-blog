import Link from "next/link";
import React from "react";

const Breadcrumb = ({title}) => {
  return (
    <nav aria-label="breadcrumb" className="mb-2">
      <ol className="inline-flex items-center space-x-4 rounded bg-secondary-50 px-4 py-2 text-sm font-medium text-gray-800">
        <li className="inline-flex items-center">
          <Link href="/" className="text-secondary-500 hover:text-secondary-600">
            Home
          </Link>
        </li>
        <li className="inline-flex items-center space-x-4">
          <svg
            className="h-6 w-6 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <Link href={'#'} className="text-secondary-500 hover:text-secondary-600">
            {title}
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
