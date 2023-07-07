import Coin from "@/components/3d/coin";
import Chest from "@/components/chest";
import Logo from "@/components/logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-col layout">
      <div className="h-[50vh] w-full">
        <Coin />
      </div>
      <div>
        <button className="bg-[#ff0000] border-2 transition-all hover:bg-white hover:text-[#ff0000] flex items-center gap-2 border-[#ff0000] font-bold px-10 py-4 rounded-3xl text-sm text-white">
          Earn Tune Coins
        </button>
      </div>
    </main>
  );
}
