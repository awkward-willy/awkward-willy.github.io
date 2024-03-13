import Link from "next/link";
import { PostMetadata } from "../_util/utils";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="flex flex-col gap-2 shadow-sm shadow-foreground border border-border/20 p-4 bg-foreground/10 w-[45%]">
      <Link href={`/post/${props.slug}`} className="w-fit">
        <h2 className="font-bold text-lg sm:text-xl border-b">{props.title}</h2>
      </Link>
      <h3 className="text-md sm:text-base truncate">{props.subtitle}</h3>
      <p className="text-sm sm:text-base">{props.date}</p>
    </div>
  );
};

export default PostPreview;
