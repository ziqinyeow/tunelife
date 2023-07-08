"use client";
import Coin from "@/components/3d/coin";
import { mono, satoshi } from "@/lib/fonts";
import clsx from "clsx";
import { MoveUpRight, Swords } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
  {
    id: 2,
    category: "Health",
    img: "https://plus.unsplash.com/premium_photo-1683842178579-2365ce4f5352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "30 Mins Cycling",
    description:
      "Enjoy the joyness of cycling and maintain a healthy lifestyle.",
    coins: 20,
  },
  {
    id: 3,
    category: "Health",
    img: "https://images.unsplash.com/photo-1577253313708-cab167d2c474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    title: "30 Mins Meditation",
    description:
      "Enjoy the joyness of peacefulness and maintain a healthy lifestyle.",
    coins: 40,
  },
  {
    id: 4,
    category: "Health",
    img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Depression Test",
    description:
      "Take a test to identify how severe your depression level is and our AI model will analyze the depression rate and provide advices.",
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
          <Link href={"/stress"}>
            <div className="flex items-center w-full gap-5 p-3 text-green-300 border rounded-lg object-cover bg-[url('https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1190&q=80')]">
              <Image
                src={
                  "https://hospiceatyourside.com/wp-content/uploads/2022/09/mental-health-1.jpg"
                }
                width={120}
                height={120}
                className="object-cover rounded-lg"
                alt={
                  "https://hospiceatyourside.com/wp-content/uploads/2022/09/mental-health-1.jpg"
                }
              />
              <div className="py-2">
                <h3 className="!font-bold">World Mental Health Day</h3>
                <h6 className="font-medium text-justify text-white line-clamp-2">
                  Prioritize your mental health this World Mental Health Day –
                  join us and take our assessment to gain insights, as 1 in 4
                  people worldwide will experience a mental health disorder in
                  their lifetime (according to WHO).
                </h6>
                <div className="flex items-center gap-1 mt-1">
                  <p className="flex items-center gap-2 text-xs font-medium text-green-500">
                    <MoveUpRight className="w-3 h-3" /> 30
                  </p>
                  <div className="w-6 h-6">
                    <Coin />
                  </div>
                </div>
              </div>
            </div>
          </Link>
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
