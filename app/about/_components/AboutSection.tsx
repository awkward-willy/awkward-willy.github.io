import Constants from "../_constants";
import Title from "@/app/_components/Title";

const AboutSection = () => {
  return (
    <>
      <Title content="About Me" />
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
            <Title content={key} />
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
