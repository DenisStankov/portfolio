import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 hover:scale-105 shadow-lg hover:shadow-purple-500/25",
        secondary:
          "border-purple-400/30 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-300/50 hover:text-white backdrop-blur-sm",
        destructive:
          "border-transparent bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-500 hover:to-pink-500 hover:scale-105 shadow-lg hover:shadow-red-500/25",
        outline:
          "border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-300 hover:text-white backdrop-blur-sm",
        success:
          "border-transparent bg-gradient-to-r from-emerald-600 to-cyan-600 text-white hover:from-emerald-500 hover:to-cyan-500 hover:scale-105 shadow-lg hover:shadow-emerald-500/25",
        warning:
          "border-transparent bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-400 hover:to-orange-400 hover:scale-105 shadow-lg hover:shadow-yellow-500/25",
        info: "border-transparent bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500 hover:scale-105 shadow-lg hover:shadow-blue-500/25",
        dark: "border-gray-600/50 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 hover:from-gray-700 hover:to-gray-600 hover:border-gray-500 hover:text-white backdrop-blur-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
