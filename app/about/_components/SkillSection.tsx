import Constants from "../_constants";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { DrawingPinFilledIcon } from "@radix-ui/react-icons";
const SkillContent = dynamic(() => import("./SkillContent"), {
  ssr: false,
  loading: () => <Skeleton className="w-20 h-7" />,
});

const SkillSection = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <DrawingPinFilledIcon className="scale-x-[-1]" />
        <h1 className="font-extrabold text-2xl sm:text-3xl after:content-[''] after:block after:w-[85%] after:h-1 after:bg-gradient-to-r from-primary to-transparent">
          Skill
        </h1>
      </div>
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
