import React from "react";
import jsonData from "@/mock/feeds.json";
import Feed from "@/model/feed";
import BackButton from "@/components/backButton";

function page({ params }: { params: { id: string } }) {
  const rawFeed: any = jsonData.find((item) => item.id == params.id);
  const feed: Feed = {
    id: rawFeed.id,
    name: rawFeed.name,
    point: rawFeed.point,
    profileImg: rawFeed.profileImg,
    img: rawFeed.img,
    title: rawFeed.title,
    description: rawFeed.description,
    datetime: rawFeed.datetime,
    like: rawFeed.like,
    comment: rawFeed.comment,
    share: rawFeed.share,
    isLike: rawFeed.isLike,
  };

  return (
    <div className="mb-32 flex-col layout !items-start">
      <div className="flex p-4">
        <BackButton />
      </div>
      <div className="flex items-center px-6 mb-2">
        <img
          className="w-10 h-10 mr-4 rounded-full"
          src={feed.profileImg}
          alt="Rounded avatar"
        />
        <span className="">{feed.name}</span>
      </div>
      <img className="w-full" src={feed.img} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{feed.title}</div>
        <p className="text-base text-gray-700">{feed.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          ❤️ {feed.like}
        </span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          💬 {feed.comment}
        </span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          📤 {feed.share}
        </span>
      </div>
    </div>
  );
}

export default page;
