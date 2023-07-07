"use client";
import { Toaster, toast } from "sonner";
import { MantineProvider } from "@mantine/core";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Toaster />
        {children}
      </MantineProvider>
    </>
  );
}
