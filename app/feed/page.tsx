import React from "react";
import jsonData from "@/mock/feeds.json";
import Link from "next/link";
import Feed from "@/model/feed";
import BackButton from "@/components/backButton";
import Image from "next/image";
import { IconPlus } from "@tabler/icons-react";
function ListItem({ feed }: { feed: Feed }) {
  function formatTimeWithAMPM(dateStr: string) {
    const date: Date = new Date(Date.parse(dateStr));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  return (
    <Link href={`/feed/${feed.id}`}>
      <div className="flex items-center justify-between w-[100%] mb-2 p-4 border rounded-2xl border-gray-100">
        {/* <img
          className="object-cover w-10 h-10 mr-4 rounded-full"
          src={feed.img}
          alt="Rounded avatar"
        /> */}
        <Image
          className="object-cover w-10 h-10 mr-4 rounded-full"
          width={30}
          height={30}
          src={feed.img}
          alt="Rounded avatar"
        />
        <div className="w-[100%]">
          <p className="">{feed.title}</p>
          <div className="flex items-center justify-between">
            <span className="">{feed.name}</span>
            <span className="text-sm text-gray-500">
              {formatTimeWithAMPM(feed.datetime)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function page() {
  const feeds: Feed[] = jsonData.map((item) => {
    return {
      id: item.id,
      name: item.name,
      point: item.point,
      profileImg: item.profileImg,
      img: item.img,
      title: item.title,
      description: item.description,
      datetime: item.datetime,
      like: item.like,
      comment: item.comment,
      share: item.share,
      isLike: item.isLike,
    };
  });

  return (
    <div className="flex-col layout !items-start w-auto">
      <div className="flex p-4 justify-between w-[100%]">
        <BackButton />
        <button className="bg-[#ff0000] text-white flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <IconPlus />
          Create
        </button>
      </div>
      <div className="m-2 mb-5">
        <h4 className="mb-4 text-2xl font-bold dark:text-white">Today</h4>
        {feeds.map((item, index) => {
          return <ListItem key={index} feed={item} />;
        })}
      </div>
      <div className="m-2 mb-5">
        <h4 className="mb-4 text-2xl font-bold dark:text-white">Yesterday</h4>
        {feeds.map((item, index) => {
          return <ListItem key={index} feed={item} />;
        })}
      </div>
    </div>
  );
}

export default page;
