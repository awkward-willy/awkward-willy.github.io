import Constants from "../_constants";
import Title from "@/app/_components/Title";

const AboutSection = () => {
  return (
    <>
      <Title content="About Me" />
      <ul>
        <li className="mb-2 text-base sm:text-xl">
          Hi, I&apos;m WillyAwkward. Currently a postgraduate student at the Graduate Institute of Networking and Multimedia (GINM), National Taiwan University (NTU) .
        </li>
        <li className="my-2 text-base sm:text-xl">
          I thrive on researching and exploring new technologies. In addition to
          programming, I enjoy illustrating, playing video games and chatting
          with friends. So if you have any questions or just want some brief
          chat, feel free to contact me.
        </li>
        <li className="my-2 text-base sm:text-xl">
          My current research focuses on deep learning, particularly in the
          fields of audio and speech. Feel free to reach out if you&apos;d like to discuss any related topics or just want to chat!
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
