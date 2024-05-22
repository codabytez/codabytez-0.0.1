import { NextPage } from "next";
import { useEffect, useState } from "react";

const TypingAnimation: NextPage<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typedText.length < text.length) {
        setTypedText(text.slice(0, typedText.length + 1));
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [typedText, text]);

  return (
    <>
      <span className={`font-medium ${className}`}>{typedText}</span>

      <span className="cursor blink">|</span>

      <style jsx>{`
        .cursor {
          display: inline-block;
          width: 1ch; /* Adjust width to match the font size */
        }

        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .blink {
          animation: blink 0.8s infinite;
        }
      `}</style>
    </>
  );
};

export default TypingAnimation;
