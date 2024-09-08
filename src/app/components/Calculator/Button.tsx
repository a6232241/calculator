import { twMerge } from "tailwind-merge";

type PropsType = {
  children: string;
  classNameText?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({
  children,
  className,
  classNameText,
  onClick,
  ...props
}: PropsType) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  return (
    <button
      className={twMerge(
        "flex basis-1/5 items-center justify-center",
        "aspect-square overflow-hidden rounded-full disabled:opacity-50",
        "translate duration-1000 hover:brightness-200",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      <span className={twMerge("text-lg font-bold text-white", classNameText)}>
        {children}
      </span>
    </button>
  );
};

export default Button;
