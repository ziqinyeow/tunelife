import Macbook from "@/components/3d/macbook";
import Watch from "@/components/3d/watch";
import Shoe from "@/components/3d/shoe";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function ListItem({
  name,
  point,
  index,
}: {
  name: string;
  point: number;
  index: number;
}) {
  if (index === 1) {
    return (
      <div className="flex items-center justify-center max-w-lg m-2 mx-auto">
        <div className="p-4 text-3xl text-[#ff0000] font-bold">
          <span>{index + 1}</span>
        </div>
        <div className="flex items-center justify-between w-[100%] m-2 p-4 border border-[#ff0000] rounded-2xl font-bold">
          <div className="flex items-center">
            {/* <img
              className="w-10 h-10 mr-4 rounded-full"
              src={`/images/${index + 1}.jpg`}
              alt="Rounded avatar"
            /> */}
            <Image
              className="object-cover !w-10 !h-10 mr-4 rounded-full"
              width={30}
              height={30}
              src={`/images/2.jpg`}
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
    <div className="flex items-center justify-center max-w-lg m-2 mx-auto">
      <div className="p-4 text-3xl font-bold text-blue-500">
        <span>{index + 1}</span>
      </div>
      <div className="flex items-center justify-between w-[100%] m-2 p-4 border rounded-2xl border-gray-100">
        <div className="flex items-center">
          {/* <img
            className="object-cover w-10 h-10 mr-4 rounded-full"
            src={`/images/${index + 1}.jpg`}
            alt="Rounded avatar"
          /> */}
          <Image
            className="object-cover !w-10 !h-10 mr-4 rounded-full"
            width={30}
            height={30}
            src={`/images/${(index %4)+1}.jpg`}
            alt="Rounded avatar"
          />
          <span className="">{name}</span>
        </div>
        <span className="text-xl font-semibold text-yellow-600">{point}</span>
      </div>
    </div>
  );
}

function page() {
  const nameList = [
    "Farhana",
    "Ali Imran",
    "Elvis Lim Yi Han",
    "Low Wei King",
    "Tan Boon",
    "Ali",
    "Aishah",
    "Azman",
    "Nurul Iman",
    "Kamal",
    "Norliana",
    "Hafiz",
    "Norhayati",
    "Mohamad",
    "Nurul Afiqah",
    "Hasan",
    "Zainab",
    "Firdaus",
    "Salmah",
    "Hamid",
    "Rozana",
    "Hakim",
    "Aina",
    "Rizwan",
    "Nadia",
    "Harith",
    "Norain",
    "Farhan",
    "Mira",
    "Rahman",
    "Liyana",
    "Rizal",
    "Zara",
    "Razak",
    "Nurul",
    "Razali",
    "Siti Aisyah",
    "Aziz",
    "Nurul Amira",
    "Ibrahim",
    "Nurul Azmi",
    "Wan",
    "Nurul Fazliana",
    "Syed",
    "Nurul Hafiza",
  ];
  return (
    <div>
      <div className="flex items-center justify-between max-w-lg p-2 mx-auto mt-5 mb-4">
        <p className="text-xl font-bold">
          <span className="text-[#ff0000]">Leaderb</span>
          <span>oard</span>
        </p>
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
      <div className="flex-col layout mb-14 !items-start">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center w-full h-36">
            <Watch />
            <div className="flex flex-col items-center text-xs font-medium">
              <div className="text-base text-red-500">2nd</div>
              <div>Apple Watch Ultra</div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full h-36">
            <Macbook />
            <div className="flex flex-col items-center text-xs font-medium">
              <div className="text-base text-red-500">1st</div>
              <div>Macbook Pro 14&apos;</div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full h-36">
            <Shoe />
            <div className="flex flex-col items-center text-xs font-medium">
              <div className="text-base text-red-500">3rd</div>
              <div>Nike Air Jordan</div>
            </div>
          </div>
        </div>
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
