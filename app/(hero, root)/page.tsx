import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { tektur } from "../fonts";
import { cn } from "@/lib/utils";
const ContactLinks = dynamic(() => import("../_components/ContactLinks"), {
  ssr: false,
  loading: () => (
    <div className="flex items-start gap-2 w-[90%]">
      <Skeleton className="w-12 h-12 rounded-xl" />
      <Skeleton className="w-12 h-12 rounded-xl" />
      <Skeleton className="w-12 h-12 rounded-xl" />
    </div>
  ),
});

export default function HeroPage() {
  return (
    <section
      className={cn(
        tektur.className,
        "flex flex-col items-center justify-center h-full text-left"
      )}
    >
      <p className="text-xl font-bold sm:text-2xl md:text-4xl lg:text-2xl leading-snug w-[90%]">
        Hello there! 👋 I&apos;m
      </p>
      <h1 className="text-3xl font-extrabold sm:text-4xl md:text-6xl lg:text-7xl leading-snug w-[90%] m-4">
        Willy Awkward
      </h1>
      <h1 className="text-xl font-extrabold  sm:text-2xl md:text-4xl lg:text-2xl leading-snug w-[90%]">
        Currently a student majoring in{" "}
        <span className="text-primary">CSIE</span>
      </h1>
      <ContactLinks className="w-[90%] m-4" />
    </section>
  );
}
