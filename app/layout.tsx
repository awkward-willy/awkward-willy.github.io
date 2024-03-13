import type { Metadata } from "next";
import { poppins } from "./fonts";
import "./globals.css";
import { ThemeProvider } from "./_components/ThemeProvider";
import { cn } from "@/lib/utils";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Willy_Awkward",
    template: `Willy_Awkward | %s`,
  },
  description:
    "This is a personal website of Willy Awkward, a student majoring in CSIE in NCU.",
  icons: [
    {
      url: "/avatars/normal.jpg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(poppins.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid h-full grid-flow-row auto-rows-[min-content_auto_min-content]">
            <Navbar />
            <main className="p-4">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
