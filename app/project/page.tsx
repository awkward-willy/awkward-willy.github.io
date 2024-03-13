import { Metadata } from "next";
import { Color, ProjectConstants } from "./_constants";
import Image from "next/image";
import { DotIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Title from "../_components/Title";
export const metadata: Metadata = {
  title: "Project",
};

const ProjectPage = () => {
  return (
    <>
      <div className="flex flex-col m-2 gap-3">
        <Title content="Projects" />
        {Object.keys(ProjectConstants).map((key, index) => {
          return (
            <div key={index} className="flex flex-col gap-3 my-4">
              <h2 className="font-bold text-lg sm:text-xl">{key}</h2>
              <div className="flex flex-wrap gap-3">
                {ProjectConstants[key as keyof typeof ProjectConstants].map(
                  (data, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col gap-2 max-w-80 sm:w-96 border-2 p-4 rounded-md h-min shadow-md shadow-border"
                      >
                        <div className="overflow-hidden flex justify-center">
                          <Image
                            src={`${data.Image}`}
                            alt={data.Title}
                            width={300}
                            height={200}
                            className="w-auto h-auto max-h-80 object-contain border-2 rounded-md"
                          />
                        </div>
                        <h3 className="font-bold text-base">{data.Title}</h3>
                        {
                          <>
                            {data.Feature.map((feature, index) => {
                              return (
                                <div
                                  key={index}
                                  className="flex gap-2 items-center"
                                >
                                  <DoubleArrowRightIcon className="w-4 h-4 flex-shrink-0" />
                                  <span className="text-sm">{feature}</span>
                                </div>
                              );
                            })}
                          </>
                        }
                        <Link
                          href={data.Link}
                          target="_blank"
                          className={cn(
                            "flex flex-col gap-2 underline text-sm",
                            data.Link === "/" ? "hidden" : "visible"
                          )}
                        >
                          Link to Project
                        </Link>
                        <div className="flex flex-wrap gap-1.5">
                          {data.Tag.map((tag, index) => {
                            return (
                              <div
                                key={index}
                                className={`flex items-center gap-0.5 text-xs sm:text-sm text-[hsl(184,83%,7%)] px-2 py-1 rounded-md ${
                                  Color[tag as keyof typeof Color] ||
                                  "bg-gray-300"
                                }`}
                              >
                                <DotIcon className="w-3 h-3" />
                                {tag}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectPage;
