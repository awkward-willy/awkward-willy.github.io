import { Metadata } from "next";
import { getPostsMetadata } from "./_util/utils";
import PostPreview from "./_components/PostPreview";
import Title from "../_components/Title";

export const metadata: Metadata = {
  title: "Post",
};

const PostPage = () => {
  let postMetadata = getPostsMetadata();
  postMetadata = postMetadata.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const postPreviews = postMetadata.map((post) => {
    return <PostPreview key={post.slug} {...post} />;
  });

  return (
    <main className="flex flex-col m-2 gap-3">
      <Title content="Posts" />
      <div className="flex flex-wrap gap-5">{postPreviews}</div>
    </main>
  );
};

export default PostPage;
