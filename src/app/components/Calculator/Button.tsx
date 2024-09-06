import { twMerge } from "tailwind-merge";

type PropsType = {
  onClick: () => void;
  children: string;
  className?: string;
  classNameText?: string;
};

const Button = ({ onClick, children, className, classNameText }: PropsType) => {
  return (
    <button
      className={twMerge(
        "flex aspect-square w-1/5 items-center justify-center overflow-hidden rounded-full active:opacity-10",
        className,
      )}
      onClick={onClick}
    >
      <span className={twMerge("text-lg font-bold text-white", classNameText)}>
        {children}
      </span>
    </button>
  );
};

export default Button;
