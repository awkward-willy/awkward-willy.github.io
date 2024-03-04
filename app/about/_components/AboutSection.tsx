import Constants from "../_constants";
import { DrawingPinFilledIcon } from "@radix-ui/react-icons";

const AboutSection = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <DrawingPinFilledIcon className="scale-x-[-1]" />
        <h1 className="font-extrabold text-2xl sm:text-3xl after:content-[''] after:block after:w-[85%] after:h-1 after:bg-gradient-to-r from-primary to-transparent">
          About me
        </h1>
      </div>
      <ul>
        <li className="mb-2 text-base sm:text-xl">
          Hi, I&apos;m WillyAwkward. Currently a junior student majoring in
          Computer Science and Information Engineering at National Central
          University (NCU).
        </li>
        <li className="my-2 text-base sm:text-xl">
          I thrive on researching and exploring new technologies. In addition to
          programming, I enjoy illustrating, playing video games and chatting
          with friends. So if you have any questions or just want some brief
          chat, feel free to contact me.
        </li>
      </ul>

      {Object.entries(Constants.about).map(([key, value], index) => {
        return (
          <div key={index}>
            <div className="flex items-center gap-3">
              <DrawingPinFilledIcon className="scale-x-[-1]" />
              <h1 className="font-extrabold text-2xl sm:text-3xl after:content-[''] after:block after:w-[85%] after:h-1 after:bg-gradient-to-r from-primary to-transparent">
                {key}
              </h1>
            </div>
            <ul className="list-disc list-inside text-base sm:text-xl">
              {value.map((item, index) => {
                return (
                  <li key={index} className="my-2">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default AboutSection;
