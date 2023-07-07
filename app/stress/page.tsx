"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { sgrotesk } from "@/lib/fonts";

const Home = () => {
  const [globalScore, setGlobalScore] = useState(0);

  useEffect(() => {
    const ds = Number(window.localStorage.getItem("ds"));
    // const ps = Number(window.localStorage.getItem("ps"));
    if (!ds) {
      window.localStorage.setItem("ds", "0");
    }
    setGlobalScore(Number(ds));
  }, []);

  return (
    <div>
      <main className={clsx("py-10")}>
        <div className="flex flex-col items-start max-w-3xl md:max-w-5xl px-4 py-8 mx-auto 2xl:max-w-7xl 3xl:max-w-[90rem]">
          <div className="flex items-center justify-center w-full">
            <div className="text-justify">
              <h2 className="mb-6">Tune Test</h2>
              <h4 className="mb-6">
                Take a test to identify how severe your depression level is and
                our AI model will analyze the depression rate and provide
                advices.
              </h4>
              <Link href="/stress/depression" className="">
                <div className="p-4 mb-6 transition-all duration-200 border-2 border-[#ff0000] rounded-md cursor-pointer hover:bg-[#ff0000] hover:text-white">
                  <h4 className="font-bold">Depression Test</h4>
                  <h5 className="">
                    Take a test with 10 questions regarding symptoms of
                    depression.
                  </h5>
                </div>
              </Link>
              <Link href="/stress/personality" className="">
                <div className="p-4 mb-6 transition-all duration-200 border-2 border-[#ff0000] rounded-md cursor-pointer hover:bg-[#ff0000] hover:text-white">
                  <h4 className="font-bold">Personality Test</h4>
                  <h5 className="">
                    Take a test with 30 questions regarding your personal
                    lifestyle and living behaviour.
                  </h5>
                </div>
              </Link>
              <h5 className="text-xs text-gray-600">
                * By continuing, you&apos;re agreeing to the terms and
                conditions.
              </h5>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
