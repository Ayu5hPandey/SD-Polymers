// components/ui/separator.tsx
import { cn } from "@/lib/utils"

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <div
      className={cn("h-px w-full bg-gray-300", className)}
      role="separator"
      {...props}
    />
  )
}