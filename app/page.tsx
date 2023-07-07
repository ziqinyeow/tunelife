import Chest from "@/components/chest";
import Image from "next/image";

export default function Home() {
  return (
    <main className="layout">
      <div className="min-h-[88vh]">
        <Chest />
        {/* <Globe /> */}
      </div>
    </main>
  );
}
