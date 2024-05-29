"use client";
import { NextPage } from "next";
import AnimatedCursor from "react-animated-cursor";

const CustomCursor: NextPage = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          mixBlendMode: "difference",
          backgroundColor: "#fff",
        }}
        outerStyle={{
          mixBlendMode: "exclusion",
          border: "1px solid #fff",
        }}
      />
    </>
  );
};

export default CustomCursor;
