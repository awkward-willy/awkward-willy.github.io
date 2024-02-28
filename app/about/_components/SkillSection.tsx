import Constants from "../_constants";
// import Image from "next/image";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
const SkillContent = dynamic(() => import("./SkillContent"), {
  ssr: false,
  loading: () => <Skeleton className="w-20 h-7" />,
});

const SkillSection = () => {
  return (
    <>
      <h1 className="font-extrabold text-2xl sm:text-3xl">Skill</h1>
      {Object.keys(Constants.skills).map((key, index) => {
        return (
          <div key={index} className="">
            <h2 className="font-bold text-base sm:text-xl">{key}</h2>
            <div className="flex flex-wrap gap-2 items-center mt-2">
              {Constants.skills[key as keyof typeof Constants.skills].map(
                (data, index) => {
                  return (
                    <SkillContent
                      key={index}
                      title={data.title}
                      image={data.image}
                    />
                  );
                }
              )}
            </div>
          </div>
        );
      })}

      <p className="text-sm md:text-lg">
        and some others, also still learning and exploring new technologies ...{" "}
      </p>
    </>
  );
};

export default SkillSection;
