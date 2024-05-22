import { NextPage } from "next";

const SnakeFood: NextPage<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      className={className}
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Snake&#39;s Food">
        <circle
          id="Ellipse 4"
          opacity="0.1"
          cx="10.9227"
          cy="10.5377"
          r="10.3456"
          fill="#43D9AD"
        />
        <circle
          id="Ellipse 3"
          opacity="0.2"
          cx="10.9227"
          cy="10.5377"
          r="7.34558"
          fill="#43D9AD"
        />
        <circle id="Ellipse 2" cx="10.9229" cy="10.5377" r="4" fill="#43D9AD" />
      </g>
    </svg>
  );
};

export default SnakeFood;
