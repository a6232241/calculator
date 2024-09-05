type PropsType = {
  onClick: () => void;
  children: string;
  className?: string;
  classNameText?: string;
};

const Button = ({ onClick, children, className, classNameText }: PropsType) => {
  return (
    <button
      className={`aspect-square w-1/5 overflow-hidden rounded-full p-5 active:opacity-10 ${className}`}
      onClick={onClick}
    >
      <span className={`text-lg font-bold text-black ${classNameText}`}>
        {children}
      </span>
    </button>
  );
};

export default Button;
