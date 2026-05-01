"use client";

import dynamic from "next/dynamic";

const IslandScene = dynamic(() => import("./IslandScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
});

export default IslandScene;
