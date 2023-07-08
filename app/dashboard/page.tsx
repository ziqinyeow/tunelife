import Line from "@/components/charts/line";
import Pie from "@/components/charts/pie";
import Stacked from "@/components/charts/stacked";
import { mono, satoshi } from "@/lib/fonts";
import clsx from "clsx";
import { LayoutDashboard } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <main
      className={clsx([
        "pb-10 pt-5 flex flex-col max-w-5xl mx-auto px-2",
        satoshi.className,
      ])}
    >
      <section className="w-full space-y-10">
        <div className="flex items-center gap-3 mb-8">
          <LayoutDashboard className="text-[#ff0000] w-5 h-5" />
          <p className={clsx(["text-xl font-bold", mono.className])}>
            <span className="text-[#ff0000]">Dashbo</span>
            <span>ard</span>
          </p>
        </div>
        <Line />
        <Pie />
        <Stacked />
      </section>
    </main>
  );
};

export default Dashboard;
