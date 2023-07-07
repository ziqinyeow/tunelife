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
