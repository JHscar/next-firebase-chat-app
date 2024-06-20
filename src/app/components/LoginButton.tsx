interface LoginButtonProps {
  type: "submit" | "button";
  onClick?: () => void;
  children: React.ReactNode;
  styleType?: "primary" | "secondary";
}

const LoginButton = ({
  type,
  onClick,
  children,
  styleType = "primary",
}: LoginButtonProps) => {
  const primaryStyle =
    "bg-[#00B98D] text-white hover:bg-white hover:text-[#00B98D]";
  const secondaryStyle = "hover:bg-[#00B98D] hover:text-white";

  return (
    <button
      type={type}
      className={`px-6 py-2 mt-4 duration-200 border rounded-3xl w-full ${
        styleType === "primary" ? primaryStyle : secondaryStyle
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default LoginButton;
