import clsx from "clsx";
import "./globals.css";
import { dmSans, mono, satoshi } from "@/lib/fonts";
import { Providers } from "./providers";
import Nav from "@/components/nav";
import BottomNavigationBar from "@/components/bottomNavigationBar";

export const metadata = {
  title: "Tune Life",
  description:
    "A customer loyalty program that improves the engagement of the insurers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx([mono.className, "flex"])}>
        <Providers>
          <div className="z-10 w-full">
            <Nav />
            {children}
            {/* <Footer /> */}
            <div className="py-10"></div>
            <BottomNavigationBar />
          </div>
          {/* <Background /> */}
        </Providers>
      </body>
    </html>
  );
}
