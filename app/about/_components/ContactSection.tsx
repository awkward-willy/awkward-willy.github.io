import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { DrawingPinFilledIcon } from "@radix-ui/react-icons";
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
      <div className="flex items-center gap-3">
        <DrawingPinFilledIcon className="scale-x-[-1]" />
        <h1 className="font-extrabold text-2xl sm:text-3xl after:content-[''] after:block after:w-[85%] after:h-1 after:bg-gradient-to-r from-blue-400 to-transparent">
          Contact
        </h1>
      </div>
      <ContactLinks />
    </>
  );
};

export default ContactSection;
