"use client";
import { StatsRingCard } from "@/components/statsRingCard";
import StatsRingCardProps from "@/model/statsRingCardProps";
import React, { useState } from "react";
import { SegmentedControl, Group, Center, Box } from "@mantine/core";
import {
  IconLock,
  IconMotorbike,
  IconHomeHeart,
  IconPlaneTilt,
  IconStethoscope,
  IconCar,
  IconActivity,
} from "@tabler/icons-react";

function SegmentedToggle({
  tab,
  setTab,
}: {
  tab: string;
  setTab: (tab: string) => void;
}) {
  return (
    <Group position="center" my="xl">
      <SegmentedControl
        className="w-96"
        value={tab}
        onChange={(value: "profile" | "my-tune") => setTab(value)}
        data={[
          {
            value: "profile",
            label: (
              <Center>
                {/* <IconSun size="1rem" stroke={1.5} /> */}
                <Box ml={10}>Profile</Box>
              </Center>
            ),
          },
          {
            value: "my-tune",
            label: (
              <Center>
                {/* <IconMoon size="1rem" stroke={1.5} /> */}
                <Box ml={10}>My Tune</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
}

function Profile() {
  const stats: StatsRingCardProps[] = [
    {
      title: "Health Screening",
      balance: 300,
      total: 500,
      stats: [
        {
          value: 200,
          label: "Utilization",
        },
        {
          value: 500,
          label: "Total Limit",
        },
      ],
    },
    {
      title: "Inpatient Medical",
      balance: 19200,
      total: 20000,
      stats: [
        {
          value: 800,
          label: "Utilization",
        },
        {
          value: 20000,
          label: "Total Limit",
        },
      ],
    },
    {
      title: "Outpatient Medical",
      balance: 900,
      total: 1000,
      stats: [
        {
          value: 100,
          label: "Utilization",
        },
        {
          value: 1000,
          label: "Total Limit",
        },
      ],
    },
  ];
  return (
    <>
      <div className="flex justify-center m-2">
        <div className="bg-[url('/images/medcard1.jpg')] bg-opacity-0 bg-cover block w-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-tune:bg-gray-800 my-tune:border-gray-700 my-tune:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 my-tune:text-white">
            Medical Card
          </h5>
          <p className="font-normal text-gray-700 my-tune:text-gray-400">
            Unilah
          </p>
          <p className="font-normal text-gray-700 my-tune:text-gray-400">
            Name: Ali Imran
          </p>
          <p className="font-normal text-gray-700 my-tune:text-gray-400">
            Member ID: 123456789
          </p>
          <div className="flex justify-end">
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/tuneprotect.com/tpr/static-tuneprotect/images/logo.png"
              alt="Article"
              className="mb-4 rounded-lg w-10 h-10"
            />
          </div>
        </div>
      </div>
      <div className="m-4">
        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 my-tune:text-white">
          Remaining Coverage
        </h4>
        {stats.map((item, index) => (
          <div className="mb-2">
            <StatsRingCard key={index} {...item} />
          </div>
        ))}
      </div>
    </>
  );
}

function MyTune() {
  return (
    <>
      <div className="m-4 mb-6 flex ">
        <img
          className="w-20 h-20 rounded-full mr-6 object-cover"
          src="./images/1.jpg"
          alt="Rounded avatar"
        />
        <div>
          <p className="font-normal text-gray-700 my-tune:text-gray-400">
            Unilah
          </p>
          <p className="font-normal text-gray-700 my-tune:text-gray-400">
            Name: Ali Imran
          </p>
          <p className="font-normal text-gray-700 my-tune:text-gray-400">
            Member ID: 123456789
          </p>
        </div>
      </div>
      <div className="m-4">
        <h3 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 my-tune:text-white">
          My Tune Protection
        </h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="flex items-center flex-col">
            <button className="p-2 border rounded-2xl mb-2">
              <IconStethoscope className="w-10 h-10 text-red-500" />
            </button>
            <p className="ml-2 text-center">PRO-Health Medical</p>
          </div>
          <div className="flex items-center flex-col">
            <button className="p-2 border rounded-2xl mb-2 bg-slate-200">
              <IconLock className="w-10 h-10 text-gray-600" />
            </button>
            <p className="ml-2 text-center">Bike Easy</p>
          </div>
          {/* <div className="flex items-center flex-col">
            <button className="p-2 border rounded-2xl mb-2 bg-slate-200">
              <IconMotorbike className="w-10 h-10 text-gray-600" />
            </button>
            <p className="ml-2 text-center">Bike Easy</p>
          </div> */}
          <div className="flex items-center flex-col">
            <button className="p-2 border rounded-2xl mb-2 bg-slate-200">
              <IconLock className="w-10 h-10 text-gray-600" />
            </button>
            <p className="ml-2 text-center">Critical Safe+</p>
          </div>
          <div className="flex items-center flex-col">
            <button className="p-2 border rounded-2xl mb-2 bg-slate-200">
              <IconLock className="w-10 h-10 text-gray-600" />
            </button>
            <p className="ml-2 text-center">Home Easy</p>
          </div>
          <div className="flex items-center flex-col">
            <button className="p-2 border rounded-2xl mb-2 bg-slate-200">
              <IconLock className="w-10 h-10 text-gray-600" />
            </button>
            <p className="ml-2 text-center">COVID Travel Pass+</p>
          </div>
          <div className="flex items-center flex-col">
            <button className="p-2 border rounded-2xl mb-2 bg-slate-200">
              <IconLock className="w-10 h-10 text-gray-600" />
            </button>
            <p className="ml-2 text-center">Motor</p>
          </div>
          {/* <div className="flex items-center flex-col">
            <button className="p-2 border rounded-2xl mb-2 bg-slate-200">
              <IconMotorbike className="w-10 h-10 text-gray-600" />
            </button>
            <p className="ml-2 text-center">Bike Easy</p>
          </div>
          <div className="flex items-center flex-col">
            <button className="p-2 border rounded-2xl mb-2">
              <IconActivity className="w-10 h-10 text-red-500" />
            </button>
            <p className="ml-2 text-center">Critical Safe+</p>
          </div>
          <div className="flex items-center flex-col">
            <button className="p-2 border rounded-2xl mb-2">
              <IconHomeHeart className="w-10 h-10 text-red-500" />
            </button>
            <p className="ml-2 text-center">Home Easy</p>
          </div>
          <div className="flex items-center flex-col">
            <button className="p-2 border rounded-2xl mb-2">
              <IconPlaneTilt className="w-10 h-10 text-red-500" />
            </button>
            <p className="ml-2 text-center">COVID Travel Pass+</p>
          </div>
          <div className="flex items-center flex-col">
            <button className="p-2 border rounded-2xl mb-2">
              <IconCar className="w-10 h-10 text-red-500" />
            </button>
            <p className="ml-2 text-center">Motor</p>
          </div> */}
        </div>
      </div>
    </>
  );
}

function page() {
  const [tab, setTab] = useState("my-tune");

  return (
    <div className="mb-32">
      <SegmentedToggle tab={tab} setTab={setTab} />
      {tab === "profile" ? <Profile /> : <MyTune />}
    </div>
  );
}

export default page;
