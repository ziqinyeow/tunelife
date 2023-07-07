"use client";
import React from "react";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <svg
        className="w-3.5 h-3.5 mr-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 5H1m0 0 4 4M1 5l4-4"
        />
      </svg>
      Back
    </button>
  );
}

export default BackButton;
