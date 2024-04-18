import React, { useState } from "react";
import Home from "./home";
import Courses from "./courses";


function HexagonIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}

function LayoutGridIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}



export default function Sidenav() {
  const [activeLink, setActiveLink] = useState("layout"); // Default active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex">
      <aside className="w-16 flex flex-col items-center bg-white shadow-lg">
        <div className="h-16 flex items-center justify-center w-full">
          <HexagonIcon className="text-green-500 h-8 w-8" />
        </div>
        <ul className="mt-4">
          <li className="mb-6">
            <button
              className={`${
                activeLink === "layout" ? "text-pink-500" : "text-gray-700"
              } h-6 w-6`}
              onClick={() => handleLinkClick("layout")}
            >
              <LayoutGridIcon />
            </button>
          </li>
          <li>
            <button
              className={`${
                activeLink === "book" ? "text-pink-500" : "text-gray-700"
              } h-6 w-6`}
              onClick={() => handleLinkClick("book")}
            >
              <BookIcon />
            </button>
          </li>
        </ul>
      </aside>

      {/* Render main content based on active link */}
      <main className="flex-grow">
        {activeLink === "layout" && <Home />}
        {activeLink === "book" && <Courses />}
      </main>
    </div>
  );
}

