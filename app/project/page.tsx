import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project",
};

const ProjectPage = () => {
  return (
    <>
      <div className="flex flex-col m-2 gap-3">
        <h1 className="font-extrabold text-2xl sm:text-3xl">Projects</h1>
      </div>
    </>
  );
};

export default ProjectPage;
