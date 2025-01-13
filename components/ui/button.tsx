import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

// Definimos las variantes y estilos predeterminados
const buttonVariants = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  link: "text-blue-600 underline hover:text-blue-700",
};

const buttonSizes = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  className?: string;
}

// Componente Button
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "md", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
