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
    <div className="mb-32">
      <div className="flex p-4">
        <BackButton />
      </div>
      <div className="flex px-6 mb-2 items-center">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={feed.profileImg}
          alt="Rounded avatar"
        />
        <span className="">{feed.name}</span>
      </div>
      <img className="w-full" src={feed.img} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{feed.title}</div>
        <p className="text-gray-700 text-base">{feed.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ❤️ {feed.like}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          💬 {feed.comment}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          📤 {feed.share}
        </span>
      </div>
    </div>
  );
}

export default page;
