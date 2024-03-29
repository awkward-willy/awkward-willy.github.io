"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { tektur } from "@/app/fonts";
export const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <nav className="top-0 w-full h-12 border-b shadow-md shadow-background/10 flex items-center flex-row justify-between px-6">
      <div
        className={cn(
          pathname === "/" ? "p-2 md:p-4" : "",
          "flex gap-2 items-center"
        )}
      >
        <Image
          src="/avatars/normal.jpg"
          alt="Avatar Logo"
          width={30}
          height={30}
          className="rounded-full max-[250px]:hidden select-none"
        />
        <h1 className={cn(tektur.className, "font-bold")}>
          <Link href="/">Willy Awkward</Link>
        </h1>
      </div>
      <div className="space-x-4  md:w-auto flex items-center justify-between">
        <Button
          asChild
          size="default"
          variant="link"
          className="hidden md:block"
        >
          <Link href="/" className={isActive("/") ? "text-bold underline" : ""}>
            Home
          </Link>
        </Button>
        <Button
          asChild
          size="default"
          variant="link"
          className="hidden md:block"
        >
          <Link
            href="/about"
            className={isActive("/about") ? "text-bold underline" : ""}
          >
            About
          </Link>
        </Button>
        <Button
          asChild
          size="default"
          variant="link"
          className="hidden md:block"
        >
          <Link
            href="/project"
            className={isActive("/project") ? "text-bold underline" : ""}
          >
            Project
          </Link>
        </Button>
        <Button
          asChild
          size="default"
          variant="link"
          className="hidden md:block"
        >
          <Link
            href="/post"
            className={isActive("/post") ? "text-bold underline" : ""}
          >
            Post
          </Link>
        </Button>
        <ModeToggle />

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="drop-down-menu">
                <HamburgerMenuIcon className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild className="justify-center">
                <Link
                  href="/"
                  className={isActive("/") ? "text-bold underline" : ""}
                >
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="justify-center">
                <Link
                  href="/about"
                  className={isActive("/about") ? "text-bold underline" : ""}
                >
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="justify-center">
                <Link
                  href="/project"
                  className={isActive("/project") ? "text-bold underline" : ""}
                >
                  Project
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="justify-center">
                <Link
                  href="/post"
                  className={isActive("/post") ? "text-bold underline" : ""}
                >
                  Post
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};
