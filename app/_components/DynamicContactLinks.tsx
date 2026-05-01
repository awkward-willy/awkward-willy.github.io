"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const ContactLinks = dynamic(() => import("./ContactLinks"), {
  ssr: false,
  loading: () => (
    <div className="flex items-start gap-2 w-[90%]">
      <Skeleton className="w-12 h-12 rounded-xl" />
      <Skeleton className="w-12 h-12 rounded-xl" />
      <Skeleton className="w-12 h-12 rounded-xl" />
    </div>
  ),
});

export default ContactLinks;
