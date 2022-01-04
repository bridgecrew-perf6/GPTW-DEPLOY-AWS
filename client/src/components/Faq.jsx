import React, { useState } from "react";

const Faq = ({ question, answer }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="">
      <div className="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20 mt-5 mb-5 dark:bg-primary">
        <div className="lg:w-9/12 md:w-8/12 sm:w-9/12 w-full">
          <div className="bg-white dark:bg-secondaryDark rounded p-6 hover:bg-gray-200 dark:hover:bg-darkSelect">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold leading-none text-gray-800 dark:text-white">
                  {question}
                </h2>
              </div>
              <button
                onClick={() => setDropdown(!dropdown)}
                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                data-test="faq-btn"
              >
                {dropdown ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>

            {dropdown && (
              <ul className="">
                <li>
                  <p className="text-base leading-normal text-gray-600 mt-4 dark:text-white">
                    {answer}
                  </p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
