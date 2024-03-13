import { tektur } from "@/app/fonts";
import { cn } from "@/lib/utils";

const Title = ({ content }: { content: string }) => {
  return (
    <div className="flex items-center gap-3">
      <h1
        className={cn(
          tektur.className,
          "font-extrabold text-2xl sm:text-3xl after:content-[''] after:block after:w-[120%] after:h-0.5 after:bg-gradient-to-r from-primary to-transparent"
        )}
      >
        {content}
      </h1>
    </div>
  );
};

export default Title;
