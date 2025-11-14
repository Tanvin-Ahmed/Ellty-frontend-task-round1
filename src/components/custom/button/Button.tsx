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
  primary:
    "bg-yellow-400 hover:bg-yellow-500 text-gray-900 focus:ring-yellow-400",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-400",
  danger: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-400",
  success: "bg-green-500 hover:bg-green-600 text-white focus:ring-green-400",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "py-2 px-4 text-sm",
  md: "py-3 px-6 text-base",
  lg: "py-4 px-8 text-lg",
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
    "font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const widthStyles = fullWidth ? "w-full" : "";

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
        <span className="flex items-center justify-center gap-2">
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
        </span>
      ) : (
        children
      )}
    </button>
  );
}
