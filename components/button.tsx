import { NextPage } from "next";
import Link from "next/link";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "ghost";
  className?: string;
  href?: string;
}

const Button: NextPage<ButtonProps> = ({
  children,
  variant,
  className,
  href,
  ...props
}) => {
  const btnVariant =
    variant === "primary"
      ? "bg-accent-100 text-primary-100 hover:bg-accent-600"
      : variant === "secondary"
      ? "bg-accent-500 text-secondary-400 hover:bg-accent-700"
      : variant === "ghost"
      ? "bg-transparent text-secondary-400 border border-secondary-400 hover:border-secondary-400/50"
      : "";

  if (href) {
    return (
      <Link
        href={href}
        className={`rounded-lg px-3.5 py-2.5 shadow-md transition-all duration-300 ${btnVariant} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`rounded-lg px-3.5 py-2.5 shadow-md transition-all duration-300 ${btnVariant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
