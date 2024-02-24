import AboutSection from "./_components/AboutSection";
import ContactSection from "./_components/ContactSection";
import EducationSection from "./_components/EducationSection";
import SkillSection from "./_components/SkillSection";

const AboutPage = () => {
  return (
    <div className="flex flex-col m-2 gap-3">
      <AboutSection />
      <EducationSection />
      <SkillSection />
      <ContactSection />
    </div>
  );
};

export default AboutPage;
