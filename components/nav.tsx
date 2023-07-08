"use client";

import { FC } from "react";
import Logo from "./logo";
import Coin from "./3d/coin";
import clsx from "clsx";
import { mono } from "@/lib/fonts";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavProps {}

const Nav: FC<NavProps> = () => {
  // const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="justify-between layout">
      <Logo />
      {pathname !== "a" && (
        <Link href="/reward" className="flex items-center gap-2">
          <div className="w-8 h-8">
            <Coin />
          </div>
          <div className={clsx([mono.className], "font-bold text-[#ff0000]")}>
            20
          </div>
        </Link>
      )}
    </nav>
  );
};

export default Nav;
