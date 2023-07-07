"use client";
import { satoshi } from "@/lib/fonts";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

const tabs = ["Petrol"];

const rewards = [
  {
    id: 0,
    category: "Petrol",
    img: "https://acemalaysia.my/assets/img/Petron.jpg",
    title: "Petron Voucher",
    description: "Get RM 10 cashback when you pay for spend for Min. RM 25.",
  },
  {
    id: 1,
    category: "",
    img: "",
    title: "",
    description: "",
  },
];

export default function page() {
  const [tab, setTab] = useState(tabs[0]);

  return (
    <main className={clsx(["py-10 layout", satoshi.className])}>
      <section className="w-full">
        {/* Tab */}
        <div className="flex gap-4 overflow-y-auto text-sm font-medium no_scrollbar">
          {tabs?.map((t, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setTab(t);
              }}
              className={clsx([
                "px-3 py-1 transition-all border-2 cursor-pointer rounded-2xl hover:border-primary-red hover:text-white hover:bg-primary-red/80",
                tab === t && "bg-primary-red text-white border-primary-red",
              ])}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="grid grid-rows-1 gap-4 mt-10">
          {rewards
            ?.filter((r) => r?.category === tab)
            ?.map((r, i) => (
              <div
                key={i}
                className="flex items-center w-full gap-5 p-3 border"
              >
                <Image
                  src={r?.img}
                  width={80}
                  height={80}
                  className="object-cover rounded-lg"
                  alt={r?.img}
                />
                <div className="py-2">
                  <h3 className="!font-bold">{r?.title}</h3>
                  <h6 className="font-medium text-justify line-clamp-2">
                    {r?.description}
                  </h6>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
