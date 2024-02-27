import Constants from "../_constants";
import Image from "next/image";

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
                    <Image
                      key={index}
                      width={0}
                      height={0}
                      className="w-auto h-auto"
                      src={data.image}
                      alt={data.title}
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
