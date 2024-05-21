import { NextPage } from "next";
import Image from "next/image";
import message from "@/public/message.svg";
import star_fill from "@/public/star-fill.svg";
import star from "@/public/star.svg";
import close from "@/public/close.svg";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneSpace } from "react-syntax-highlighter/dist/cjs/styles/prism";
import CodeBlock from "../code-block";

const CodeSnippet: NextPage = () => {
  const code = `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
        const value: T = parseModel(chunk._response, chunk._value);
        const initializedChunk: InitializedChunk<T> = (chunk: any);
        initializedChunk._status = INITIALIZED;
        initializedChunk._value = value;
        return value;
      }`;
  return (
    <div className="flex flex-col gap-5 max-w-[660px]">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between gap-5">
          <div className="flex gap-3 items-center">
            <div className="rounded-full w-9 h-9 bg-[#C4C4C4] shrink-0" />
            <div className="flex flex-col">
              <Link
                href={"#"}
                className="text-[#5565E8] text-code-snippet font-bold hover:opacity-60 w-max"
              >
                @username
              </Link>
              <p className="text-secondary-100 font-medium text-xs">
                Created 5 months ago
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <button className="flex gap-2 items-center w-max h-max text-code-snippet hover:text-secondary-400">
              <Image src={message} alt="message" />
              details
            </button>

            <button className="flex gap-2 items-center w-max h-max text-code-snippet hover:text-secondary-400">
              <Image src={star_fill} alt="star" />3 stars
            </button>
          </div>
        </div>

        <div>
          <CodeBlock
            code={code}
            backgroundColor="#011221"
            borderRadius="1rem"
            padding="24px 30px"
            showLineNumbers={false}
            style={duotoneSpace}
            language="typescript"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="w-full h-[1px] bg-line" />
        <div className="flex justify-between gap-5">
          <p className="max-w-[515px] text-code-snippet font-medium">
            My work here was 5 months ago. It was for the project called “...”.
            Some other text can be placed here.
          </p>
          <button className="hover:opacity-40 w-max h-max">
            <Image src={close} alt="close" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;
