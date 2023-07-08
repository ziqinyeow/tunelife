"use client";
import Chest from "@/components/3d/chest";
import Coin from "@/components/3d/coin";
import Logo from "@/components/logo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Gift } from "lucide-react";

export default function Home() {
  const [progress, setProgress] = useState("70%");

  return (
    <main className="flex-col layout">
      <div className="h-[50vh] w-full">
        <Coin />
      </div>
      <div className="flex flex-col w-full gap-3 md:flex-row">
        <Link
          href={`/quest`}
          className="bg-[#ff0000] border-2 w-full h-14 justify-center transition-all hover:bg-white hover:text-[#ff0000] flex items-center gap-2 border-[#ff0000] font-bold px-10 py-4 rounded-full text-sm text-white"
        >
          Earn Tune Coins
        </Link>

        <div className="relative w-full">
          <div className="absolute text-xs font-bold -bottom-6 lg:-top-6 left-4">
            🔥 <span className="text-red-600">12 days</span> on streak
          </div>
          <div className="h-14 p-[0.2rem] border border-red-500 rounded-full">
            <div
              className="flex items-center justify-center h-full text-sm leading-none bg-[#ff0000] rounded-full"
              style={{ width: progress }}
            >
              <span className="p-1 font-bold text-white">{progress}</span>
            </div>
          </div>

          <Dialog>
            <DialogTrigger>
              <div className="absolute w-16 h-16 bg-white border rounded-full cursor-pointer -top-1 -right-2 border-primary-red">
                <Chest />
              </div>
            </DialogTrigger>
            <DialogContent>
              <div className="">
                <div className="w-full h-36">
                  <Chest />
                </div>
                <div>
                  <div className="flex gap-3 mb-4 items-center text-[#ff0000]">
                    <Gift className="w-5 h-5" />
                    <h4 className="font-bold">Potential Rewards</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center h-24 text-center border rounded-lg">
                      <Coin />
                      <div>25 coins</div>
                    </div>
                    <div className="flex flex-col items-center h-24 text-center border rounded-lg">
                      <Coin />
                      <div>50 coins</div>
                    </div>
                    <div className="flex flex-col items-center h-24 text-center border rounded-lg">
                      <Coin />
                      <div>99 coins</div>
                    </div>
                    <div className="flex flex-col items-center h-24 text-center border rounded-lg">
                      <Chest />
                      <div>2x coins</div>
                    </div>
                    <div className="flex flex-col items-center h-24 text-center border rounded-lg">
                      <Chest />
                      <div>5x coins</div>
                    </div>
                    <div className="flex flex-col items-center h-24 text-center border rounded-lg">
                      <Chest />
                      <div>10x coins</div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </main>
  );
}
