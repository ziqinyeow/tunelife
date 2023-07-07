"use client";
import Coin from "@/components/3d/coin";
import { mono, satoshi } from "@/lib/fonts";
import clsx from "clsx";
import { MoveUpRight, Swords } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const quests = [
  {
    id: 1,
    category: "Health",
    img: "https://plus.unsplash.com/premium_photo-1665203429251-856b32d99a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "30 Mins Jogging",
    description:
      "Enjoy the joyness of jogging and maintain a healthy lifestyle.",
    coins: 20,
  },
];

export default function Quest() {
  return (
    <main className={clsx(["pb-10 pt-5 layout", satoshi.className])}>
      <section className="w-full">
        <div className="flex items-center gap-3 mb-8">
          <Swords className="text-[#ff0000] w-5 h-5" />
          <p className={clsx(["text-xl font-bold", mono.className])}>
            <span className="text-[#ff0000]">Que</span>
            <span>sts</span>
          </p>
        </div>
        <div className="grid grid-rows-1 gap-4 mt-10">
          {quests?.map((r, i) => (
            <div
              key={i}
              className="flex items-center w-full gap-5 p-3 border rounded-lg"
            >
              <Image
                src={r?.img}
                width={110}
                height={110}
                className="object-cover rounded-lg"
                alt={r?.img}
              />
              <div className="py-2">
                <h3 className="!font-bold">{r?.title}</h3>
                <h6 className="font-medium text-justify line-clamp-2">
                  {r?.description}
                </h6>
                <div className="flex items-center gap-1 mt-1">
                  <p className="flex items-center gap-2 text-xs font-medium text-green-500">
                    <MoveUpRight className="w-3 h-3" /> {r?.coins}
                  </p>
                  <div className="w-6 h-6">
                    <Coin />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
