/**
 * Button Component
 *
 * Props:
 * - variant: primary | secondary | outline
 * - size: sm | md | lg
 * - disabled: boolean
 * - onClick: function
 * - children: ReactNode
 */

function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  children,
}) {
  const baseStyles =
    "rounded-lg font-medium transition-all duration-200";

  const variants = {
    primary:
      "bg-green-600 text-white hover:bg-green-700",

    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300",

    outline:
      "border border-green-600 text-green-600 hover:bg-green-50",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {children}
    </button>
  );
}

export default Button;