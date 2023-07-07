import { mono, satoshi, sgrotesk } from "@/lib/fonts";
import React from "react";

export default function Page({ children }: any) {
  return <div className={mono.className}>{children}</div>;
}
