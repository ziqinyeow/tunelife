import Link from "next/link";
import React from "react";

function ListItem({
  name,
  point,
  index,
}: {
  name: string;
  point: number;
  index: number;
}) {
  if (index == 1) {
    return (
      <div className="flex justify-center items-center m-2">
        <div className="p-4 text-3xl text-[#ff0000] font-bold">
          <span>{index + 1}</span>
        </div>
        <div className="flex items-center justify-between w-[100%] m-2 p-4 border border-[#ff0000] rounded-2xl font-bold">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={`/images/${index + 1}.jpg`}
              alt="Rounded avatar"
            />
            <span className="">{name}</span>
          </div>
          <span className="text-[#ff0000] text-xl">{point}</span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center m-2">
      <div className="p-4 text-3xl text-blue-500 font-bold">
        <span>{index + 1}</span>
      </div>
      <div className="flex items-center justify-between w-[100%] m-2 p-4 border rounded-2xl border-gray-100">
        <div className="flex items-center">
          <img
            className="object-cover w-10 h-10 rounded-full mr-4"
            src={`/images/${index + 1}.jpg`}
            alt="Rounded avatar"
          />
          <span className="">{name}</span>
        </div>
        <span className="text-yellow-600 font-semibold text-xl">{point}</span>
      </div>
    </div>
  );
}

function page() {
  const nameList = [
    "Farhana",
    "Fatimah",
    // "Tan Boon",
    "Elvis Lim Yi Han",
    "Low Wei King",
  ];
  return (
    <div>
      <div className="flex justify-end p-4">
        <Link href="/feed">
          <button
            type="button"
            className="text-white bg-[#ff0000] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Feeds
            <svg
              className="w-3.5 h-3.5 ml-2"
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
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </Link>
      </div>
      {nameList.map((name, index) => {
        return (
          <ListItem
            key={index}
            name={name}
            point={1000 - index * 10}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default page;
