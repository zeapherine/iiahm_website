"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, useMotionValue, useSpring } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-btn)] text-sm font-bold uppercase tracking-wider transition-all duration-300 ease-[0.16,1,0.3,1] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none border border-slate-700 active:scale-[0.99]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-md hover:bg-primary/95 hover:shadow-lg border-primary hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90 hover:-translate-y-0.5",
        outline: "bg-transparent text-foreground border-border shadow-sm hover:bg-muted hover:border-border hover:-translate-y-0.5",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:-translate-y-0.5",
        ghost: "border-transparent text-foreground hover:bg-muted hover:text-primary",
        link: "border-transparent text-primary underline-offset-4 hover:underline shadow-none",
        accent: "bg-accent text-accent-foreground border-accent shadow-md hover:bg-accent/95 hover:shadow-glow hover:-translate-y-0.5",
        ghost_white: "border-white/30 text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm",
        neon: "bg-neon-green text-black border-4 border-black shadow-hard hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
      },
      size: {
        default: "h-12 px-8 py-2",
        xs: "h-8 gap-1 px-3 text-xs",
        sm: "h-10 gap-1.5 px-6",
        lg: "h-16 px-12 text-lg",
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

interface ButtonProps
  extends React.ComponentProps<"button">,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  magnetic?: boolean
}

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  magnetic = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  // Magnetic Logic
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic) return
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    x.set(distanceX * 0.4)
    y.set(distanceY * 0.4)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const content = (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )

  if (magnetic && !asChild) {
    return (
      <motion.span
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-flex"
      >
        <Comp
          data-slot="button"
          data-variant={variant}
          data-size={size}
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        />
      </motion.span>
    )
  }

  return content
}

export { Button, buttonVariants }
