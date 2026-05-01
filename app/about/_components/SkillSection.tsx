import Constants from "../_constants";
import Title from "@/app/_components/Title";
import SkillContent from "./DynamicSkillContent";

const SkillSection = () => {
  return (
    <>
      <Title content="Skills" />
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
