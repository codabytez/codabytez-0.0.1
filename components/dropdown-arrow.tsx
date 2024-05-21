import { NextPage } from "next";

const DropdownArrow: NextPage<{ isOpen?: boolean; isHidden?: boolean }> = ({
  isOpen,
  isHidden,
}) => {
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

export default DropdownArrow;
