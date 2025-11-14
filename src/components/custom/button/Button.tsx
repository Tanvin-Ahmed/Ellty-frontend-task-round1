import { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "success";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
  isLoading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[#FFCE22] hover:bg-[#FFD84D] text-gray-900 focus:ring-[#FFCE22]",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-400",
  danger: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-400",
  success: "bg-green-500 hover:bg-green-600 text-white focus:ring-green-400",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-[40px] py-[10px] px-[20px] text-[14px] leading-[130%]",
  md: "h-[40px] py-[10px] px-[20px] text-[14px] leading-[130%]",
  lg: "h-[40px] py-[10px] px-[20px] text-[14px] leading-[130%]",
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  isLoading = false,
  disabled,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-normal rounded-[4px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-[10px]";

  const widthStyles = fullWidth ? "w-full" : "w-[340px]";

  const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${widthStyles}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
}
