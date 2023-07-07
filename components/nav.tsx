"use client";

import { FC } from "react";
import Logo from "./logo";
import { usePathname, useRouter } from "next/navigation";

interface NavProps {}

const Nav: FC<NavProps> = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="justify-between layout">
      <Logo />
      {/* <div className="flex items-center gap-2">
        <Button
          className={clsx([pathname === "/data" && "!text-black !bg-gray-100"])}
          onClick={() => {
            router.push("/data");
          }}
        >
          <BrainCircuit className="w-4 h-4 text-inherit" />
          <span className={clsx(["hidden md:block", mono.className])}>
            Data
          </span>
        </Button>
      </div> */}
    </nav>
  );
};

export default Nav;
