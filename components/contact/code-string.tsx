import { NextPage } from "next";
import CodeBlock from "../code-block";

interface CodeStringProps {
  form: {
    name: string;
    email: string;
    message: string;
  };
}

const CodeString: NextPage<CodeStringProps> = ({ form }) => {
  const codeString = `const button = document.querySelector('#sendBtn');

    const message = {
      name: "${form.name}"
      email: "${form.email}"
      message: "${form.message}"
      date: "${new Date().toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })}"
    }

    button.addEventListener('click', () => {
      form.send(message);
    })`;

  return (
    <div className="basis-[56%] relative flex items-center justify-center">
      <div className="pr-6 max-w-[569px]">
        <CodeBlock code={codeString} language="javascript" />
      </div>

      {/* side-scrollbar */}
      <div className="h-full w-6 absolute top-0 right-0 border-l border-line">
        <div className="w-[18px] h-2 bg-secondary-100 mx-auto mt-1" />
      </div>
    </div>
  );
};

export default CodeString;
