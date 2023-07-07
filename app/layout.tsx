import clsx from "clsx";
import "./globals.css";
import { dmSans, mono, satoshi } from "@/lib/fonts";
import { Providers } from "./providers";
import BottomNavigationBar from "@/components/bottomNavigationBar";

export const metadata = {
  title: "App",
  description: "...",
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
            {/* <Nav /> */}
            {children}
            {/* <Footer /> */}
            <BottomNavigationBar />
          </div>
          {/* <Background /> */}
        </Providers>
      </body>
    </html>
  );
}
