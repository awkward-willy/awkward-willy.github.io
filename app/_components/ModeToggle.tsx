"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";

type ColorTheme = "dark" | "light";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const currentThemeRef = useRef<ColorTheme | null>(null);

  useEffect(() => {
    if (
      currentThemeRef.current === null &&
      (resolvedTheme === "dark" || resolvedTheme === "light")
    ) {
      currentThemeRef.current = resolvedTheme;
    }
  }, [resolvedTheme]);

  const toggleTheme = () => {
    const currentTheme =
      currentThemeRef.current ??
      (resolvedTheme === "dark" || resolvedTheme === "light"
        ? resolvedTheme
        : "light");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    currentThemeRef.current = nextTheme;
    setTheme(nextTheme);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
