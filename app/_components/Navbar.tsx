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
export const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    // background
    <nav className="top-0 w-full h-12 px-4 border-b shadow-md shadow-background/10 flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex flex-row items-center w-full justify-around">
        {/* <Logo /> */}
        <h1 className="font-bold">
          <Link href="/">Willy Awkward</Link>
        </h1>
        <div className="space-x-4  md:w-auto flex items-center justify-between">
          <Button
            asChild
            size="default"
            variant="link"
            className="hidden md:block"
          >
            <Link
              href="/"
              className={isActive("/") ? "text-bold underline" : ""}
            >
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
              href="/experience"
              className={isActive("/experience") ? "text-bold underline" : ""}
            >
              Experience
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
                <Button variant="outline" size="icon">
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
                    className={
                      isActive("/project") ? "text-bold underline" : ""
                    }
                  >
                    Project
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="justify-center">
                  <Link
                    href="/experience"
                    className={
                      isActive("/experience") ? "text-bold underline" : ""
                    }
                  >
                    Experience
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
      </div>
    </nav>
  );
};