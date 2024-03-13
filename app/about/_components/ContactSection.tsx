import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import Title from "@/app/_components/Title";
const ContactLinks = dynamic(() => import("@/app/_components/ContactLinks"), {
  ssr: false,
  loading: () => (
    <div className="flex items-start gap-2 w-[90%]">
      <Skeleton className="w-12 h-12 rounded-xl" />
      <Skeleton className="w-12 h-12 rounded-xl" />
      <Skeleton className="w-12 h-12 rounded-xl" />
    </div>
  ),
});

const ContactSection = () => {
  return (
    <>
      <Title content="Contact Me" />
      <ContactLinks />
    </>
  );
};

export default ContactSection;
