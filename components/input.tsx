import { NextPage } from "next";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: NextPage<InputProps> = ({ label, id, name, ...props }) => {
  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor={id} className="font-medium text-secondary-100">
        {label}
      </label>

      <input
        id={id}
        name={name}
        autoComplete="off"
        aria-autocomplete="none"
        className="h-10 px-3 border border-line rounded-lg bg-primary-300 text-secondary-100 placeholder:text-secondary-100 focus:shadow-input focus:border-secondary-100 focus:outline-none focus:ring-0 transition-all duration-300 ease-in-out"
        {...props}
      />
    </div>
  );
};

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  height?: string;
}

export const TextArea: NextPage<TextAreaProps> = ({
  label,
  id,
  name,
  height = "h-40",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor={id} className="font-medium text-secondary-100">
        {label}
      </label>

      <textarea
        id={id}
        name={name}
        autoComplete="off"
        aria-autocomplete="none"
        className={`px-3 border border-line rounded-lg bg-primary-300 text-secondary-100 placeholder:text-secondary-100 focus:shadow-input focus:border-secondary-100 focus:outline-none focus:ring-0 transition-all duration-300 ease-in-out resize-none ${
          height || "h-36"
        }`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        {...props}
      />
    </div>
  );
};
