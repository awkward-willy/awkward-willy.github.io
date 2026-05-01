"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const SkillContent = dynamic(() => import("./SkillContent"), {
  ssr: false,
  loading: () => <Skeleton className="w-20 h-7" />,
});

export default SkillContent;
