import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

SyntaxHighlighter.registerLanguage("tsx", tsx);

type RichArticleCodeBlockProps = {
  children: string;
  className: string;
};

export const RichArticleCodeBlock = ({
  children,
  className,
}: RichArticleCodeBlockProps) => {
  const language = className?.replace("lang-", "");

  return (
    <SyntaxHighlighter language={language} style={oneDark}>
      {children}
    </SyntaxHighlighter>
  );
};
