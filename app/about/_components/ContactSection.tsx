import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
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
      <h1 className="font-extrabold text-2xl sm:text-3xl">Contact</h1>
      <ContactLinks />
    </>
  );
};

export default ContactSection;
