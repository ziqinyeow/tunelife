"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import data from "@/data/personality_test";
import advice from "@/data/generated_text";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loadModel, predict } from "@/lib/tf";
import { sgrotesk } from "@/lib/fonts";
import clsx from "clsx";

const Home = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [response, setResponse] = useState({});
  const [result, setResult] = useState("");
  const [pred, setPred] = useState<any>();
  //   const [personalityScore, setPersonalityScore] = useState(0);
  const [globalScore, setGlobalScore] = useState(0);

  //   console.log(result);

  useEffect(() => {
    (async () => {
      await loadModel("/model/personality/model.json");
    })();
    const n = Number(window.sessionStorage.getItem("pt"));
    const ds = Number(window.localStorage.getItem("ds"));
    const ps = Number(window.localStorage.getItem("ps"));
    if (!ds) {
      window.localStorage.setItem("ds", "0");
    }
    if (!ps) {
      window.localStorage.setItem("ps", "0");
    }
    // setPersonalityScore(Number(ps));
    setGlobalScore(Number(ds));
    let r = window.sessionStorage.getItem("ptr") || {};
    if (typeof r === "string") {
      r = JSON.parse(r);
    } else if (Object.keys(r).length === 0) {
      window.sessionStorage.setItem("pt", String(counter));
      window.sessionStorage.setItem(
        "ptr",
        JSON.stringify({
          0: -1,
          1: -1,
          2: -1,
          3: -1,
          4: -1,
          5: -1,
          6: -1,
          7: -1,
          8: -1,
          9: -1,
          10: -1,
          11: -1,
          12: -1,
          13: -1,
          14: -1,
          15: -1,
          16: -1,
          17: -1,
          18: -1,
          19: -1,
          20: -1,
          21: -1,
          22: -1,
          23: -1,
          24: -1,
          25: -1,
          26: -1,
          27: -1,
          28: -1,
          29: -1,
        })
      );
    }
    setCounter(n);
    setResponse(r);
    setMounted(true);
    let timer = setTimeout(() => setLoading(false), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Depr.ai</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="layout"></div>
      <main className={clsx(["py-10"])}>
        <div className="layout">
          {loading && (
            <div className="flex items-center justify-center w-full">
              <div className="md:w-[50vw] xl:w-[30vw] 2xl:w-[20vw] text-justify space-y-6">
                <p className="text-2xl font-bold md:text-3xl">Loading Test</p>
                <p className="text-2xl font-bold md:text-3xl">...</p>
              </div>
            </div>
          )}
          {!loading && counter === 0 ? (
            <div className="flex items-center justify-center w-full">
              <div className="md:w-[50vw] xl:w-[30vw] 2xl:w-[20vw] text-justify space-y-6">
                <p className="text-2xl font-bold md:text-3xl">
                  Personality Test
                </p>
                <h4>
                  Take a test with total of{" "}
                  <span className="text-[#ff0000]">{data.length}</span> question
                  to identify how severe your depression level is and our AI
                  model will analyze the depression rate and provide advices.
                </h4>
                <h4>
                  No personal details are being asked and stored. We used your
                  browser local storage to keep track of your score.
                </h4>
                <button
                  onClick={() => setCounter(1)}
                  className="box-border relative z-30 inline-flex items-center justify-center w-full px-10 py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-[#ff0000] rounded-md cursor-pointer active:scale-95 group ring-offset-2 ring-1 ring-[#ff0000]/50 ring-offset-[#ff0000]/40 hover:ring-offset-[#ff0000] ease focus:outline-none"
                >
                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                  <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                  <span className="relative z-20 flex items-center text-base">
                    Continue
                  </span>
                </button>
                <h5 className="text-xs text-gray-600">
                  * By continuing, you&apos;re agreeing to the terms and
                  conditions.
                </h5>
              </div>
            </div>
          ) : null}
          {mounted && !loading && counter > 0 && counter <= 30 ? (
            <div className="flex items-center justify-center w-full">
              <div className="md:w-[50vw] xl:w-[30vw] 2xl:w-[20vw] text-justify space-y-6">
                <p className="text-2xl font-bold md:text-3xl">
                  Question {counter}
                </p>
                <h4>{data[counter - 1]?.question ?? "--"}</h4>
                {data[counter - 1]?.answer?.map((ans, idx) => {
                  return (
                    <div key={idx} className="flex items-center mb-4">
                      <input
                        id={`radio-${idx}`}
                        onChange={(e) => {
                          setResponse({
                            ...response,
                            [`${counter - 1}`]: e.target.value,
                          });
                          window.sessionStorage.setItem("pt", String(counter));
                          window.sessionStorage.setItem(
                            "ptr",
                            JSON.stringify(response)
                          );
                        }}
                        type="radio"
                        value={idx}
                        name="radio"
                        checked={
                          // @ts-ignore
                          Number(response[counter - 1]) === idx
                        }
                        className="w-4 h-4 text-[#ff0000] bg-gray-100 border-gray-300 rounded-md focus:ring-[#ff0000] focus:ring-2"
                      />
                      <label
                        htmlFor={`radio-${idx}`}
                        className="ml-2 text-sm font-medium text-gray-800"
                      >
                        {ans}
                      </label>
                    </div>
                  );
                })}
                <div className="grid w-full grid-cols-2 gap-5 pt-5">
                  <button
                    onClick={() => {
                      setCounter(counter - 1);
                      window.sessionStorage.setItem("pt", String(counter));
                      window.sessionStorage.setItem(
                        "ptr",
                        JSON.stringify(response)
                      );
                    }}
                    className="box-border relative z-30 inline-flex items-center justify-center w-full px-10 py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-[#ff0000]/50 rounded-md cursor-pointer active:scale-95 group ring-offset-2 ring-1 ring-[#ff0000]/50 ring-offset-[#ff0000]/40 hover:ring-offset-[#ff0000] ease focus:outline-none"
                  >
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-base">
                      Back
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      if (
                        // @ts-ignore
                        response[counter - 1] &&
                        // @ts-ignore
                        response[counter - 1] !== -1
                      ) {
                        window.sessionStorage.setItem(
                          "ptr",
                          JSON.stringify(response)
                        );
                        if (counter === 30) {
                          setCounter(31);
                          (async () => {
                            const result = await predict(
                              [
                                Object.keys(response).map(function (key) {
                                  // @ts-ignore
                                  return Number(response[key]);
                                }),
                              ],
                              1
                            );
                            // @ts-ignore
                            setResult(result?.class);
                            setPred(result?.pred);
                          })();
                          window.sessionStorage.setItem("pt", String(31));
                          let previous_score =
                            window.localStorage.getItem("ps");
                          const score = Object.keys(response).reduce(function (
                            previous,
                            key
                          ) {
                            // @ts-ignore
                            return previous + Number(response[key]);
                          },
                          0);
                          if (previous_score) {
                            // @ts-ignore
                            previous_score = 0;
                            // setPersonalityScore((score / 30) * 100);
                            window.localStorage.setItem(
                              "ps",
                              String((score / 30) * 100)
                            );
                          } else {
                            const ave =
                              ((Number(previous_score) + score) / 2 / 30) * 100;
                            // setPersonalityScore(ave);
                            window.localStorage.setItem("ps", String(ave));
                          }
                        } else {
                          setCounter(counter + 1);
                          window.sessionStorage.setItem("pt", String(counter));
                        }
                      }
                    }}
                    className="box-border relative z-30 inline-flex items-center justify-center w-full px-10 py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-[#ff0000] rounded-md cursor-pointer active:scale-95 group ring-offset-2 ring-1 ring-[#ff0000]/50 ring-offset-[#ff0000]/40 hover:ring-offset-[#ff0000] ease focus:outline-none"
                  >
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-base">
                      Continue
                    </span>
                  </button>
                </div>
                <h5 className="text-xs text-gray-600">
                  {counter === 0
                    ? "* By continuing, you&apos;re agreeing to the terms and conditions."
                    : "* Please choose 1 selection."}
                </h5>
              </div>
            </div>
          ) : null}
          {mounted && !loading && counter > 30 ? (
            <div className="w-full">
              <div className="flex items-center justify-center w-full">
                <div className="md:w-[50vw] xl:w-[30vw] 2xl:w-[20vw] text-justify space-y-6">
                  <div>
                    <p className="text-2xl font-bold md:text-3xl">
                      Test Result
                    </p>
                  </div>
                  <div className="grid grid-cols-6 border-2 border-[#ff0000] rounded-md">
                    <div className="col-span-5 p-4">
                      <h5 className="text-xs">You are more likely to:</h5>
                      <h4 className="font-bold">
                        {result !== "" ? result : "--"}
                      </h4>
                    </div>
                    <div
                      className="flex items-center justify-center font-bold text-white bg-[#ff0000]"
                      style={{
                        opacity: pred === 1 ? 0.9 : 0.25,
                      }}
                    >
                      {/* {Math.round(personalityScore)} */}
                    </div>
                  </div>
                  <h4 className="pt-5 font-bold">Advices</h4>
                  <h5>
                    {advice[Math.floor(Math.random() * 50)]
                      ?.split(".")
                      .slice(0, -1)
                      .join(".")}
                    ...
                  </h5>
                  <h5>
                    {advice[Math.floor(Math.random() * 100) + 50]
                      ?.split(".")
                      .slice(0, -1)
                      .join(".")}
                    ...
                  </h5>
                  <h5 className="text-xs text-gray-600">
                    Result and advices generated from AI models.{" "}
                    <a
                      className="font-bold text-[#ff0000]"
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Report Issue
                    </a>
                  </h5>
                  <div className="grid w-full grid-cols-5 gap-5 pt-5">
                    <button
                      onClick={() => {
                        window.sessionStorage.setItem("pt", String(0));
                        window.sessionStorage.setItem("ptr", "");
                        // setCounter(0);
                        router.push("/stress");
                      }}
                      className="box-border relative z-30 inline-flex items-center justify-center w-full col-span-3 px-10 py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-[#ff0000] rounded-md cursor-pointer active:scale-95 group ring-offset-2 ring-1 ring-[#ff0000]/50 ring-offset-[#ff0000]/40 hover:ring-offset-[#ff0000] ease focus:outline-none"
                    >
                      <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                      <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                      <span className="relative z-20 flex items-center text-base">
                        Retake the test
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        window.sessionStorage.setItem("pt", String(0));
                        window.sessionStorage.setItem("ptr", "");
                        router.push("/");
                      }}
                      className="box-border relative z-30 inline-flex items-center justify-center w-full col-span-2 px-10 py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-[#ff0000] rounded-md cursor-pointer active:scale-95 group ring-offset-2 ring-1 ring-[#ff0000]/50 ring-offset-[#ff0000]/40 hover:ring-offset-[#ff0000] ease focus:outline-none"
                    >
                      <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                      <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                      <span className="relative z-20 flex items-center text-base">
                        Go Home
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default Home;
