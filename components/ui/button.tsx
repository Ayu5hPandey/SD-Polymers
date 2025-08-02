// components/ui/button.tsx
import { cn } from "@/lib/utils" 
import { ButtonHTMLAttributes, forwardRef } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost"
  size?: "default" | "icon"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"

    const variants = {
      default: "bg-blue-500 text-white hover:bg-blue-600",
      ghost: "bg-transparent text-current hover:bg-white/10",
    }

    const sizes = {
      default: "h-10 px-4 py-2 rounded-md text-sm",
      icon: "h-10 w-10 rounded-full",
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }