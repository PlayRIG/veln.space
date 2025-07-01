import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {oneDark} from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  code: string;
  language?: string;
};

export function CodeBlock({code, language = "typescript"}: Props) {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      showLineNumbers
      customStyle={{padding: "1rem", margin: 0}}
      lineNumberStyle={{color: "#888", marginRight: "16px"}}>
      {code}
    </SyntaxHighlighter>
  );
}
