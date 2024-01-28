import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { buttonVariants } from "../framer-motion/variants";

type ButtonType = "default" | "secondary" | "primary";

interface ButtonProps {
  btnType?: ButtonType;
  loading?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const buttonStyles: Record<ButtonType, string> = {
  default:
    "bg-secondary border border-secondary hover:border-white hover:bg-primary text-white",
  secondary:
    "text-white border border-white hover:bg-white hover:text-tertiary",
  primary: "text-white    bg-tertiary hover:bg-secondary hover:text-white",
};

const Button: React.FC<ButtonProps> = ({
  btnType = "default",
  loading = false,
  className = "",
  children,
  onClick,
  ...props
}) => {
  const buttonStyle = buttonStyles[btnType] || buttonStyles.default;
  const buttonClasses = `px-4 py-3 transition-all shadow-md  duration-300  cursor-pointer  flex font-normal	 items-center justify-center gap-2 text-center cursor-pointer text-base ${buttonStyle} font-medium whitespace-nowrap rounded-full ${className}`;

  return (
    <motion.button
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      whileTap="whileTap"
      className={buttonClasses}
      type="submit"
      disabled={loading}
      onClick={onClick}
      {...props}
    >
      {loading ? "Loading..." : children}
    </motion.button>
  );
};

export default Button;
