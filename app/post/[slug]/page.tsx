import fs from "fs";
import { Metadata } from "next";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import { getPostsMetadata } from "../_util/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RichArticlePreBlock } from "../_components/RichArticlePreBlock";

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

const SlugPage = (props: { params: { slug: string } }) => {
  const slug = props.params.slug;
  const Metadata = getPostsMetadata().find((post) => post.slug === slug);
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
          {Metadata?.title}
        </h1>
        <h2 className="text-lg md:text-2xl text-center">
          {Metadata?.subtitle}
        </h2>
        <h2 className="text-sm md:text-base text-center">{Metadata?.date}</h2>
      </div>
      <article className="prose prose-gray dark:prose-invert lg:prose-xl break-words max-w-full p-5">
        <Markdown
          options={{
            overrides: {
              pre: RichArticlePreBlock,
              img: {
                component: (props: {
                  src: string;
                  alt: string;
                  title?: string;
                  width?: string;
                  height?: string;
                }) => {
                  return (
                    <Image
                      src={props.src}
                      alt={props.alt}
                      title={props.title}
                      width={parseInt(props.width ?? "300")}
                      height={parseInt(props.height ?? "300")}
                      className="rounded-md"
                    />
                  );
                },
              },
            },
          }}
        >
          {content}
        </Markdown>
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
