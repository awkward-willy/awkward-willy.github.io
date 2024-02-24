"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const ContactLinks = ({ className }: { className?: string }) => {
  const { resolvedTheme } = useTheme();

  return (
    <div className={cn("flex", className)}>
      <Button asChild size="icon" variant="ghost">
        <Link href="https://github.com/awkward-willy" target="_blank">
          <Image
            src={
              resolvedTheme === "dark"
                ? "/GitHubLogo_White.png"
                : "/GitHubLogo.png"
            }
            width={500}
            height={500}
            alt="GitHub Link Logo"
          />
        </Link>
      </Button>

      <Button className="mx-4" asChild size="icon" variant="ghost">
        <Link href="https://t.me/Willy_Awkward" target="_blank">
          <Image
            src="/TelegramLogo.png"
            width={500}
            height={500}
            alt="Telegram Link Logo"
          />
        </Link>
      </Button>
    </div>
  );
};

export default ContactLinks;
