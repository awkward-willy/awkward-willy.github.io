import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bottom-0 w-full h-20 md:h-12 border-t flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center w-full justify-evenly text-center text-sm md:textmd">
        <p>Copyright © 2026 Willy_Awkward </p>
        <div className="underline">
          <Popover>
            <PopoverTrigger asChild>
              <Button size="default" variant="link" className="p-0 underline">
                Home Page Model Source
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <p>
                <Link
                  href="https://skfb.ly/6Y9MY"
                  target="_blank"
                  className="underline"
                >
                  Cartoon Low Poly Penguin Island Illustration
                </Link>
                &nbsp;by antonmoek is licensed under&nbsp;
                <Link
                  href="http://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                  className="underline"
                >
                  Creative Commons Attribution
                </Link>
                .
              </p>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </footer>
  );
};
