import { NextPage } from "next";

export const DropdownArrow: NextPage<{
  isOpen?: boolean;
  toggle?: () => void;
  isHidden?: boolean;
}> = ({ isOpen, toggle, isHidden }) => {
  return (
    <div
      className={`flex justify-center items-center ${
        isHidden && " invisible pointer-events-none"
      }`}
    >
      <button
        className={`transition-transform transform duration-300 ${
          isOpen && "rotate-90"
        }`}
        onClick={toggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
        >
          <path
            d="M5.69658 7.18971L0.746582 2.23971L2.16058 0.82571L8.52458 7.18971L2.16058 13.5537L0.746582 12.1397L5.69658 7.18971Z"
            fill="#607B96"
          />
        </svg>
      </button>
    </div>
  );
};

export const DropdownArrowFill: NextPage<{
  isOpen?: boolean;
  toggle?: () => void;
  isHidden?: boolean;
}> = ({ isOpen, toggle, isHidden }) => {
  return (
    <div
      className={`flex justify-center items-center ${
        isHidden && " invisible pointer-events-none"
      }`}
    >
      <button
        className={`transition-transform transform duration-300 ${
          isOpen ? "rotate-0" : "-rotate-90"
        }`}
        onClick={toggle}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame" clipPath="url(#clip0_72_1377)">
            <path id="Vector" d="M12 16L6 10H18L12 16Z" fill="#607B96" />
          </g>
          <defs>
            <clipPath id="clip0_72_1377">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};
