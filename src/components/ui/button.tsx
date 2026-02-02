import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-bold uppercase tracking-wider transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none border-2 border-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow-hard hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-hard hover:bg-destructive/90",
        outline:
          "bg-background text-black shadow-hard hover:bg-accent",
        secondary:
          "bg-secondary text-black shadow-hard hover:bg-secondary/80",
        ghost:
          "border-transparent hover:bg-accent/20",
        link: "border-transparent text-primary underline-offset-4 hover:underline",
        accent: "bg-accent text-black shadow-hard hover:bg-accent/90",
        neon: "bg-neon-green text-black shadow-hard hover:bg-neon-green/90",
        pink: "bg-hot-pink text-white shadow-hard hover:bg-hot-pink/90",
      },
      size: {
        default: "h-12 px-6 py-2",
        xs: "h-8 gap-1 px-3 text-xs",
        sm: "h-10 gap-1.5 px-4",
        lg: "h-14 px-10 text-lg",
        icon: "size-12",
        "icon-xs": "size-8",
        "icon-sm": "size-10",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
