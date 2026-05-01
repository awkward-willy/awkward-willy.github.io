import fs from "fs";
import type { Metadata } from "next";
import Markdown, { type MarkdownToJSX } from "markdown-to-jsx";
import Link from "next/link";
import { getPostsMetadata } from "../_util/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RichArticlePreBlock } from "../_components/RichArticlePreBlock";
import type { ComponentPropsWithoutRef } from "react";

export const metadata: Metadata = {
  title: "Post",
};

export const generateStaticParams = async () => {
  const posts = getPostsMetadata();
  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
};

const getPostContent = (slug: string) => {
  const folder = "public/posts";
  const content = fs.readFileSync(`${folder}/${slug}.md`, "utf8");
  return content;
};

const MarkdownImage = ({
  src,
  alt = "",
  title,
  width,
  height,
}: ComponentPropsWithoutRef<"img">) => {
  if (typeof src !== "string") {
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      title={title}
      width={Number(width ?? 300)}
      height={Number(height ?? 300)}
      className="rounded-md"
    />
  );
};

const markdownOptions = {
  overrides: {
    pre: RichArticlePreBlock,
    img: {
      component: MarkdownImage,
    },
  },
} as unknown as MarkdownToJSX.Options;

const SlugPage = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;
  const postMetadata = getPostsMetadata().find((post) => post.slug === slug);
  const content = getPostContent(slug);
  return (
    <div className="flex flex-col m-2">
      <Button
        variant="link"
        asChild
        className="text-sm md:text-base justify-start p-0 w-fit"
      >
        <Link href="/post">&larr;&nbsp;&nbsp;back to posts</Link>
      </Button>
      <div className="px-5 pt-10 pb-10 bg-foreground/10 rounded-md text-primary my-3">
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          {postMetadata?.title}
        </h1>
        <h2 className="text-lg md:text-2xl text-center">
          {postMetadata?.subtitle}
        </h2>
        <h2 className="text-sm md:text-base text-center">
          {postMetadata?.date}
        </h2>
      </div>
      <article className="prose prose-gray dark:prose-invert lg:prose-xl break-words max-w-full p-5">
        <Markdown options={markdownOptions}>{content}</Markdown>
      </article>
      <Button
        variant="link"
        asChild
        className="text-sm md:text-base justify-start p-0 w-fit"
      >
        <Link href="/post">&larr;&nbsp;&nbsp;back to posts</Link>
      </Button>
    </div>
  );
};

export default SlugPage;
