import { RichArticleCodeBlock } from "./RichArticleCodeBlock";

type RichArticlePreBlockProps = {
  children: JSX.Element | JSX.Element[];
};

export const RichArticlePreBlock = ({
  children,
  ...rest
}: RichArticlePreBlockProps) => {
  if ("type" in children && children["type"] === "code") {
    return RichArticleCodeBlock({
      children: children["props"]["children"],
      className: children["props"]["className"],
    });
  }
  return <pre {...rest}>{children}</pre>;
};
