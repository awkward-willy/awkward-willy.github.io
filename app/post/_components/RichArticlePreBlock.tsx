import { RichArticleCodeBlock } from "./RichArticleCodeBlock";
import { isValidElement, type ComponentPropsWithoutRef, type ReactNode } from "react";

type RichArticlePreBlockProps = ComponentPropsWithoutRef<"pre"> & {
  children?: ReactNode;
};

export const RichArticlePreBlock = ({
  children,
  ...rest
}: RichArticlePreBlockProps) => {
  if (isValidElement(children) && children.type === "code") {
    const codeProps = children.props as {
      children: string;
      className: string;
    };

    return (
      <RichArticleCodeBlock className={codeProps.className}>
        {codeProps.children}
      </RichArticleCodeBlock>
    );
  }

  return <pre {...rest}>{children}</pre>;
};
