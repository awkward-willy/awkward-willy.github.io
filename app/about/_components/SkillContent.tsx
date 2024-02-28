import Image from "next/image";

const SkillContent = ({ title, image }: { title: string; image: string }) => {
  return (
    <Image
      className="w-auto h-auto"
      src={image}
      alt={title}
      width={0}
      height={0}
    />
  );
};

export default SkillContent;
